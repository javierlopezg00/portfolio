"use client";

import { useEffect, useMemo, useReducer, useState } from "react";
import { Button, Text } from "@/components/ui";
import { track } from "@/lib/analytics/track";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import {
  createLeadSchema,
  createStepSchemas,
  type StepKey,
} from "@/lib/validation/lead.schema";
import { StepContact } from "./StepContact";
import { StepIndicator } from "./StepIndicator";
import { StepNeeds } from "./StepNeeds";
import { StepReview } from "./StepReview";
import { StepSingleSelect } from "./StepSingleSelect";

const STORAGE_KEY = "configurator-draft";

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
    case "review":
      return {};
  }
}

export function Configurator() {
  const locale = useLocale();
  const dict = getDictionary(locale);
  // The dictionary's step keys are plain strings (dictionary.ts doesn't
  // depend on the validation schema's literal-union type) — cast once
  // here rather than scattering it at every StepKey usage below. The
  // runtime values always match createStepSchemas' keys by construction
  // (both are authored from the same five-step flow).
  const steps = dict.configurator.steps as { key: StepKey; label: string }[];
  // Depend on `locale` (a primitive) rather than `dict` — dict is a fresh
  // getDictionary() call each render, and React Compiler can't statically
  // prove that returns a stable reference, so it declines to memoize the
  // component at all if the object itself is the dependency.
  const stepSchemas = useMemo(
    () => createStepSchemas(getDictionary(locale).validation),
    [locale],
  );
  const leadSchema = useMemo(
    () => createLeadSchema(getDictionary(locale).validation),
    [locale],
  );

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

  const currentStep = steps[state.step];

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
    if (state.step === steps.length - 1) {
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
      track("configurator_submit", {
        projectType: state.projectType,
        budget: state.budget,
        timeline: state.timeline,
      });
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
          <Text className="font-semibold">
            {dict.configurator.successTitle}
          </Text>
          <Text tone="secondary" size="sm" className="mt-1">
            {dict.configurator.successBody(state.email)}
          </Text>
        </div>
      </div>
    );
  }

  return (
    <div>
      <StepIndicator
        current={state.step}
        total={steps.length}
        text={dict.configurator.stepIndicator(
          state.step + 1,
          steps.length,
          currentStep.label,
        )}
      />

      {currentStep.key === "projectType" && (
        <StepSingleSelect
          heading={currentStep.label}
          name="projectType"
          options={dict.configurator.options.projectType}
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
          heading={dict.configurator.budgetStep.heading}
          helperText={dict.configurator.budgetStep.helperText}
          name="budget"
          options={dict.configurator.options.budget}
          value={state.budget}
          onChange={(v) => setField("budget", v)}
          error={errors.budget}
        />
      )}
      {currentStep.key === "timeline" && (
        <StepSingleSelect
          heading={currentStep.label}
          name="timeline"
          options={dict.configurator.options.timeline}
          value={state.timeline}
          onChange={(v) => setField("timeline", v)}
          error={errors.timeline}
        />
      )}
      {currentStep.key === "contact" && (
        <StepContact values={state} errors={errors} onChange={setField} />
      )}
      {currentStep.key === "review" && (
        <StepReview
          state={state}
          onEdit={(key) =>
            dispatch({
              type: "SET_STEP",
              step: steps.findIndex((s) => s.key === key),
            })
          }
        />
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        {state.step > 0 ? (
          <Button
            variant="secondary"
            onClick={goBack}
            disabled={status === "submitting"}
          >
            {dict.configurator.back}
          </Button>
        ) : (
          <span />
        )}
        <Button onClick={goNext} disabled={status === "submitting"}>
          {state.step === steps.length - 1
            ? status === "submitting"
              ? dict.configurator.sending
              : dict.configurator.requestProposal
            : dict.configurator.next}
        </Button>
      </div>

      {status === "error" && (
        <p role="alert" className="text-body-sm text-error mt-4">
          {dict.configurator.genericError}
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
