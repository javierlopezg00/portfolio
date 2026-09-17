"use client";

import { useReducer } from "react";
import { OptionCard } from "@/components/sections/configurator/OptionCard";
import { StepIndicator } from "@/components/sections/configurator/StepIndicator";
import { Badge, Button, Text } from "@/components/ui";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";

// No fetch call anywhere in this component — every field lives in useReducer
// state only and is discarded on reset. The final step is a read-only
// summary, not a submission — the page's own CaseStudyCTA (rendered right
// after this component) is the actual call to action.

type Step = "service" | "companySize" | "timeline" | "summary";
const STEPS: Step[] = ["service", "companySize", "timeline", "summary"];

interface FlowState {
  step: Step;
  service: string;
  companySize: string;
  timeline: string;
}

const initialState: FlowState = {
  step: "service",
  service: "",
  companySize: "",
  timeline: "",
};

type Action =
  | {
      type: "SET_FIELD";
      field: "service" | "companySize" | "timeline";
      value: string;
    }
  | { type: "GO_TO"; step: Step }
  | { type: "RESET" };

function reducer(state: FlowState, action: Action): FlowState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "GO_TO":
      return { ...state, step: action.step };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function LeadQualificationDemo() {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const lq = dict.work.leadQualificationDemo;
  const services = dict.work.previewContent.consulting.practiceAreas;
  const timelines = dict.configurator.options.timeline;
  const [state, dispatch] = useReducer(reducer, initialState);

  const stepIndex = STEPS.indexOf(state.step);
  const canAdvance = Boolean(
    (state.step === "service" && state.service) ||
    (state.step === "companySize" && state.companySize) ||
    (state.step === "timeline" && state.timeline),
  );

  function goNext() {
    if (stepIndex < STEPS.length - 1) {
      dispatch({ type: "GO_TO", step: STEPS[stepIndex + 1] });
    }
  }

  function goBack() {
    if (stepIndex > 0) dispatch({ type: "GO_TO", step: STEPS[stepIndex - 1] });
  }

  const timelineLabel = timelines.find((t) => t.id === state.timeline)?.label;

  return (
    <div className="flex flex-col gap-6">
      <Badge>{dict.lab.demoBadge}</Badge>
      <StepIndicator
        tone="demo"
        current={stepIndex}
        total={STEPS.length}
        text={dict.configurator.stepIndicator(
          stepIndex + 1,
          STEPS.length,
          lq.steps[state.step],
        )}
      />

      <div className="border-border bg-surface rounded-md border p-6">
        {state.step === "service" && (
          <div className="flex flex-col gap-3">
            {services.map((service) => (
              <OptionCard
                tone="demo"
                key={service}
                type="radio"
                name="service"
                value={service}
                label={service}
                checked={state.service === service}
                onChange={() =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "service",
                    value: service,
                  })
                }
              />
            ))}
          </div>
        )}

        {state.step === "companySize" && (
          <div className="flex flex-col gap-3">
            {lq.companySizes.map((size) => (
              <OptionCard
                tone="demo"
                key={size.id}
                type="radio"
                name="company-size"
                value={size.id}
                label={size.label}
                checked={state.companySize === size.id}
                onChange={() =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "companySize",
                    value: size.id,
                  })
                }
              />
            ))}
          </div>
        )}

        {state.step === "timeline" && (
          <div className="flex flex-col gap-3">
            {timelines.map((t) => (
              <OptionCard
                tone="demo"
                key={t.id}
                type="radio"
                name="timeline"
                value={t.id}
                label={t.label}
                checked={state.timeline === t.id}
                onChange={() =>
                  dispatch({
                    type: "SET_FIELD",
                    field: "timeline",
                    value: t.id,
                  })
                }
              />
            ))}
          </div>
        )}

        {state.step === "summary" && (
          <div className="flex flex-col gap-4">
            <Text className="font-semibold">{lq.summaryHeading}</Text>
            <dl className="flex flex-col gap-3">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-body-sm text-text-secondary">
                  {lq.summaryLabels.service}
                </dt>
                <dd className="text-body-sm text-text font-medium">
                  {state.service}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-body-sm text-text-secondary">
                  {lq.summaryLabels.companySize}
                </dt>
                <dd className="text-body-sm text-text font-medium">
                  {
                    lq.companySizes.find((s) => s.id === state.companySize)
                      ?.label
                  }
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-body-sm text-text-secondary">
                  {lq.summaryLabels.timeline}
                </dt>
                <dd className="text-body-sm text-text font-medium">
                  {timelineLabel}
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>

      <Text tone="secondary" size="sm">
        {lq.disclosure}
      </Text>

      <div className="flex items-center justify-between gap-4">
        {stepIndex > 0 ? (
          <Button variant="secondary" onClick={goBack}>
            {lq.back}
          </Button>
        ) : (
          <span />
        )}
        {state.step !== "summary" && (
          <Button variant="demo" onClick={goNext} disabled={!canAdvance}>
            {lq.next}
          </Button>
        )}
      </div>
    </div>
  );
}
