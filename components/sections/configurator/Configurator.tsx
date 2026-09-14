"use client";

import { useEffect, useReducer, useState } from "react";
import { Button, Text } from "@/components/ui";
import {
  budgetOptions,
  projectTypeOptions,
  timelineOptions,
} from "@/lib/content/configurator-options";
import {
  leadSchema,
  stepSchemas,
  type StepKey,
} from "@/lib/validation/lead.schema";
import { StepContact } from "./StepContact";
import { StepIndicator } from "./StepIndicator";
import { StepNeeds } from "./StepNeeds";
import { StepSingleSelect } from "./StepSingleSelect";

const STORAGE_KEY = "configurator-draft";

const STEPS: { key: StepKey; label: string }[] = [
  { key: "projectType", label: "What do you want to build?" },
  { key: "needs", label: "What does your business need?" },
  { key: "budget", label: "Approximate budget" },
  { key: "timeline", label: "Timeline" },
  { key: "contact", label: "Your details" },
];

interface FormState {
  step: number;
  projectType: string;
  needs: string[];
  budget: string;
  timeline: string;
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  honeypot: string;
}

const initialState: FormState = {
  step: 0,
  projectType: "",
  needs: [],
  budget: "",
  timeline: "",
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  honeypot: "",
};

type Action =
  | { type: "SET_FIELD"; field: keyof FormState; value: string }
  | { type: "SET_NEEDS"; needs: string[] }
  | { type: "SET_STEP"; step: number }
  | { type: "HYDRATE"; state: FormState };

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_NEEDS":
      return { ...state, needs: action.needs };
    case "SET_STEP":
      return { ...state, step: action.step };
    case "HYDRATE":
      return action.state;
    default:
      return state;
  }
}

function dataForStep(key: StepKey, state: FormState) {
  switch (key) {
    case "projectType":
      return { projectType: state.projectType };
    case "needs":
      return { needs: state.needs };
    case "budget":
      return { budget: state.budget };
    case "timeline":
      return { timeline: state.timeline };
    case "contact":
      return { name: state.name, email: state.email };
  }
}

export function Configurator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  // Gates the persist effect below. This MUST be React state, not a ref:
  // the HYDRATE dispatch and setIsHydrating(false) are issued from the
  // same effect callback, so React batches them into one re-render — the
  // persist effect only ever sees isHydrating flip to false in the exact
  // same commit where `state` already reflects the hydrated draft. A
  // ref-based flag doesn't have that guarantee (it can flip synchronously
  // before the dispatch's state update has landed), which let the persist
  // effect below fire once with the pre-hydration blank state and
  // overwrite the saved draft — most visible under React's dev-mode
  // double effect invocation, but not exclusive to it.
  const [isHydrating, setIsHydrating] = useState(true);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) dispatch({ type: "HYDRATE", state: JSON.parse(saved) });
    } catch {
      // ignore malformed/unavailable storage
    }
    // Batches with the HYDRATE dispatch above (see the comment on
    // isHydrating's declaration) — the whole point is that this can't be
    // computed during render, so it's an intentional exception to the
    // set-state-in-effect rule.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrating(false);
  }, []);

  useEffect(() => {
    if (isHydrating) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage write failures (private mode, quota, etc.)
    }
  }, [state, isHydrating]);

  const currentStep = STEPS[state.step];

  function setField(field: keyof FormState, value: string) {
    dispatch({ type: "SET_FIELD", field, value });
  }

  function goNext() {
    const result = stepSchemas[currentStep.key].safeParse(
      dataForStep(currentStep.key, state),
    );
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    if (state.step === STEPS.length - 1) {
      void submit();
    } else {
      dispatch({ type: "SET_STEP", step: state.step + 1 });
    }
  }

  function goBack() {
    setErrors({});
    dispatch({ type: "SET_STEP", step: Math.max(0, state.step - 1) });
  }

  async function submit() {
    const parsed = leadSchema.safeParse(state);
    if (!parsed.success) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div className="bg-accent/15 flex h-12 w-12 items-center justify-center rounded-full">
          <CheckIcon />
        </div>
        <div>
          <Text className="font-semibold">Thanks — that&apos;s in.</Text>
          <Text tone="secondary" size="sm" className="mt-1">
            We&apos;ll follow up at {state.email} within one business day.
          </Text>
        </div>
      </div>
    );
  }

  return (
    <div>
      <StepIndicator
        current={state.step}
        total={STEPS.length}
        label={currentStep.label}
      />

      {currentStep.key === "projectType" && (
        <StepSingleSelect
          heading="What do you want to build?"
          name="projectType"
          options={projectTypeOptions}
          value={state.projectType}
          onChange={(v) => setField("projectType", v)}
          error={errors.projectType}
        />
      )}
      {currentStep.key === "needs" && (
        <StepNeeds
          value={state.needs}
          onChange={(needs) => dispatch({ type: "SET_NEEDS", needs })}
          error={errors.needs}
        />
      )}
      {currentStep.key === "budget" && (
        <StepSingleSelect
          heading="Approximate budget"
          name="budget"
          options={budgetOptions}
          value={state.budget}
          onChange={(v) => setField("budget", v)}
          error={errors.budget}
        />
      )}
      {currentStep.key === "timeline" && (
        <StepSingleSelect
          heading="Timeline"
          name="timeline"
          options={timelineOptions}
          value={state.timeline}
          onChange={(v) => setField("timeline", v)}
          error={errors.timeline}
        />
      )}
      {currentStep.key === "contact" && (
        <StepContact values={state} errors={errors} onChange={setField} />
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        {state.step > 0 ? (
          <Button
            variant="secondary"
            onClick={goBack}
            disabled={status === "submitting"}
          >
            Back
          </Button>
        ) : (
          <span />
        )}
        <Button onClick={goNext} disabled={status === "submitting"}>
          {state.step === STEPS.length - 1
            ? status === "submitting"
              ? "Sending…"
              : "Request Proposal"
            : "Next"}
        </Button>
      </div>

      {status === "error" && (
        <p role="alert" className="text-body-sm text-error mt-4">
          Something went wrong sending your request. Please try again.
        </p>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      className="text-accent"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
