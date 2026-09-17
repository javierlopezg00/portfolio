"use client";

import { useReducer } from "react";
import { OptionCard } from "@/components/sections/configurator/OptionCard";
import { StepIndicator } from "@/components/sections/configurator/StepIndicator";
import {
  getSlots,
  useCalendarMonth,
} from "@/components/sections/lab/booking-logic";
import { Badge, Button, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";

// No fetch call anywhere in this component — every field lives in useReducer
// state only and is discarded on reset. This is a demo of the reservation
// UX, not a real booking system, and never stores anything.

type Step = "partySize" | "date" | "time";
const STEPS: Step[] = ["partySize", "date", "time"];

interface FlowState {
  step: Step | "confirmed";
  partySize: string;
  day: number | null;
  time: string | null;
}

const initialState: FlowState = {
  step: "partySize",
  partySize: "",
  day: null,
  time: null,
};

type Action =
  | { type: "SET_PARTY_SIZE"; value: string }
  | { type: "SELECT_DAY"; day: number }
  | { type: "SELECT_TIME"; time: string }
  | { type: "GO_TO"; step: FlowState["step"] }
  | { type: "RESET" };

function reducer(state: FlowState, action: Action): FlowState {
  switch (action.type) {
    case "SET_PARTY_SIZE":
      return { ...state, partySize: action.value };
    case "SELECT_DAY":
      return { ...state, day: action.day, time: null };
    case "SELECT_TIME":
      return { ...state, time: action.time };
    case "GO_TO":
      return { ...state, step: action.step };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function ReservationDemo() {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const rd = dict.work.reservationDemo;
  const { days, startOffset, monthLabel } = useCalendarMonth(dict.intlLocale);
  const [state, dispatch] = useReducer(reducer, initialState);
  const slots = state.day !== null ? getSlots(state.day, dict.intlLocale) : [];

  if (state.step === "confirmed") {
    return (
      <div data-brand="ember" className="flex flex-col gap-6">
        <Badge>{dict.lab.demoBadge}</Badge>
        <div className="border-border bg-surface rounded-md border p-6">
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="bg-demo/15 flex h-12 w-12 items-center justify-center rounded-full">
              <CheckIcon />
            </div>
            <div>
              <Text className="font-semibold">{rd.confirmedHeading}</Text>
              <Text tone="secondary" size="sm" className="mt-1">
                {rd.confirmedBody(
                  state.partySize,
                  `${monthLabel.split(" ")[0]} ${state.day}`,
                  state.time ?? "",
                )}
              </Text>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => dispatch({ type: "RESET" })}
            >
              {rd.bookAnother}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const stepIndex = STEPS.indexOf(state.step);
  const canAdvance = Boolean(
    (state.step === "partySize" && state.partySize) ||
    (state.step === "date" && state.day) ||
    (state.step === "time" && state.time),
  );

  function goNext() {
    if (stepIndex < STEPS.length - 1) {
      dispatch({ type: "GO_TO", step: STEPS[stepIndex + 1] });
    } else {
      dispatch({ type: "GO_TO", step: "confirmed" });
    }
  }

  function goBack() {
    if (stepIndex > 0) dispatch({ type: "GO_TO", step: STEPS[stepIndex - 1] });
  }

  return (
    <div data-brand="ember" className="flex flex-col gap-6">
      <Badge>{dict.lab.demoBadge}</Badge>
      <StepIndicator
        tone="demo"
        current={stepIndex}
        total={STEPS.length}
        text={dict.configurator.stepIndicator(
          stepIndex + 1,
          STEPS.length,
          rd.steps[state.step],
        )}
      />

      <div className="border-border bg-surface rounded-md border p-6">
        {state.step === "partySize" && (
          <div className="flex flex-col gap-3">
            {rd.partySizes.map((p) => (
              <OptionCard
                tone="demo"
                key={p.id}
                type="radio"
                name="party-size"
                value={p.id}
                label={p.label}
                checked={state.partySize === p.id}
                onChange={() =>
                  dispatch({ type: "SET_PARTY_SIZE", value: p.id })
                }
              />
            ))}
          </div>
        )}

        {state.step === "date" && (
          <div>
            <Text size="sm" className="mb-3 font-medium">
              {monthLabel}
            </Text>
            <div className="grid grid-cols-7 gap-1 text-center">
              {dict.lab.booking.weekdayLabels.map((label, i) => (
                <span key={i} className="text-caption text-text-secondary">
                  {label}
                </span>
              ))}
              {Array.from({ length: startOffset }).map((_, i) => (
                <span key={`offset-${i}`} />
              ))}
              {days.map(({ day, available }) => (
                <button
                  key={day}
                  type="button"
                  disabled={!available}
                  onClick={() => dispatch({ type: "SELECT_DAY", day })}
                  aria-pressed={state.day === day}
                  aria-label={dict.lab.booking.dayAriaLabel(
                    monthLabel,
                    day,
                    available,
                  )}
                  className={cn(
                    "text-body-sm duration-fast aspect-square rounded-md transition-colors ease-out",
                    !available && "text-text-secondary/30 cursor-not-allowed",
                    available &&
                      state.day !== day &&
                      "text-text hover:border-border-strong border border-transparent",
                    state.day === day && "bg-demo-strong text-white",
                  )}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}

        {state.step === "time" && (
          <div>
            <Text size="sm" className="mb-3 font-medium">
              {rd.steps.time}
            </Text>
            <div className="flex flex-wrap gap-2">
              {slots.map(({ time, available }) => (
                <button
                  key={time}
                  type="button"
                  disabled={!available}
                  onClick={() => dispatch({ type: "SELECT_TIME", time })}
                  aria-pressed={state.time === time}
                  className={cn(
                    "text-body-sm duration-fast rounded-full border px-3 py-1.5 transition-colors ease-out",
                    !available &&
                      "border-border text-text-secondary/30 cursor-not-allowed",
                    available &&
                      state.time !== time &&
                      "border-border-strong text-text hover:border-demo/50",
                    state.time === time &&
                      "border-demo-strong bg-demo-strong text-white",
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <Text tone="secondary" size="sm">
        {rd.disclosure}
      </Text>

      <div className="flex items-center justify-between gap-4">
        {stepIndex > 0 ? (
          <Button variant="secondary" onClick={goBack}>
            {rd.back}
          </Button>
        ) : (
          <span />
        )}
        <Button variant="demo" onClick={goNext} disabled={!canAdvance}>
          {state.step === "time" ? rd.confirm : rd.next}
        </Button>
      </div>
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
      className="text-demo"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
