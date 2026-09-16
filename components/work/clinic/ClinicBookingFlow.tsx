"use client";

import { useReducer } from "react";
import { OptionCard } from "@/components/sections/configurator/OptionCard";
import { StepIndicator } from "@/components/sections/configurator/StepIndicator";
import {
  getSlots,
  useCalendarMonth,
} from "@/components/sections/lab/booking-logic";
import { Badge, Button, Input, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";

// No fetch call anywhere in this component — every field lives in useReducer
// state only and is discarded on reset. This is a demo of the booking UX,
// not a real intake system, and never collects or stores medical data.

type Step = "service" | "doctor" | "schedule" | "contact";
const STEPS: Step[] = ["service", "doctor", "schedule", "contact"];

interface FlowState {
  step: Step | "confirmed";
  service: string;
  doctor: string;
  day: number | null;
  time: string | null;
  name: string;
  email: string;
}

const initialState: FlowState = {
  step: "service",
  service: "",
  doctor: "",
  day: null,
  time: null,
  name: "",
  email: "",
};

type Action =
  | {
      type: "SET_FIELD";
      field: "service" | "doctor" | "name" | "email";
      value: string;
    }
  | { type: "SELECT_DAY"; day: number }
  | { type: "SELECT_TIME"; time: string }
  | { type: "GO_TO"; step: FlowState["step"] }
  | { type: "RESET" };

function reducer(state: FlowState, action: Action): FlowState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
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

export function ClinicBookingFlow() {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const cb = dict.work.clinicBooking;
  const { days, startOffset, monthLabel } = useCalendarMonth(dict.intlLocale);
  const [state, dispatch] = useReducer(reducer, initialState);
  const slots = state.day !== null ? getSlots(state.day, dict.intlLocale) : [];

  if (state.step === "confirmed") {
    const service = cb.services.find((s) => s.id === state.service);
    const doctor = cb.doctors.find((d) => d.id === state.doctor);
    return (
      <div className="flex flex-col gap-6">
        <Badge>{dict.lab.demoBadge}</Badge>
        <div className="border-border bg-surface rounded-md border p-6">
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="bg-accent/15 flex h-12 w-12 items-center justify-center rounded-full">
              <CheckIcon />
            </div>
            <div>
              <Text className="font-semibold">{cb.confirmedHeading}</Text>
              <Text tone="secondary" size="sm" className="mt-1">
                {cb.confirmedBody(
                  service?.label ?? "",
                  doctor?.name ?? "",
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
              {cb.bookAnother}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const stepIndex = STEPS.indexOf(state.step);
  const canAdvance = Boolean(
    (state.step === "service" && state.service) ||
    (state.step === "doctor" && state.doctor) ||
    (state.step === "schedule" && state.day && state.time) ||
    (state.step === "contact" && state.name && state.email),
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
    <div className="flex flex-col gap-6">
      <Badge>{dict.lab.demoBadge}</Badge>
      <StepIndicator
        current={stepIndex}
        total={STEPS.length}
        text={dict.configurator.stepIndicator(
          stepIndex + 1,
          STEPS.length,
          cb.steps[state.step],
        )}
      />

      <div className="border-border bg-surface rounded-md border p-6">
        {state.step === "service" && (
          <div className="flex flex-col gap-3">
            {cb.services.map((s) => (
              <OptionCard
                key={s.id}
                type="radio"
                name="service"
                value={s.id}
                label={s.label}
                checked={state.service === s.id}
                onChange={() =>
                  dispatch({ type: "SET_FIELD", field: "service", value: s.id })
                }
              />
            ))}
          </div>
        )}

        {state.step === "doctor" && (
          <div className="flex flex-col gap-3">
            {cb.doctors.map((d) => (
              <OptionCard
                key={d.id}
                type="radio"
                name="doctor"
                value={d.id}
                label={`${d.name} — ${d.specialty}`}
                checked={state.doctor === d.id}
                onChange={() =>
                  dispatch({ type: "SET_FIELD", field: "doctor", value: d.id })
                }
              />
            ))}
          </div>
        )}

        {state.step === "schedule" && (
          <div className="flex flex-col gap-8 sm:flex-row">
            <div className="flex-1">
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
                      "text-body-sm duration-fast focus-visible:ring-focus-ring aspect-square rounded-md transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none",
                      !available && "text-text-secondary/30 cursor-not-allowed",
                      available &&
                        state.day !== day &&
                        "text-text hover:border-border-strong border border-transparent",
                      state.day === day && "bg-accent-strong text-white",
                    )}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <Text size="sm" className="mb-3 font-medium">
                {state.day
                  ? dict.lab.booking.availableTimes
                  : dict.lab.booking.selectDay}
              </Text>
              {state.day && (
                <div className="flex flex-wrap gap-2">
                  {slots.map(({ time, available }) => (
                    <button
                      key={time}
                      type="button"
                      disabled={!available}
                      onClick={() => dispatch({ type: "SELECT_TIME", time })}
                      aria-pressed={state.time === time}
                      className={cn(
                        "text-body-sm duration-fast focus-visible:ring-focus-ring rounded-full border px-3 py-1.5 transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none",
                        !available &&
                          "border-border text-text-secondary/30 cursor-not-allowed",
                        available &&
                          state.time !== time &&
                          "border-border-strong text-text hover:border-accent/50",
                        state.time === time &&
                          "border-accent-strong bg-accent-strong text-white",
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {state.step === "contact" && (
          <div className="flex flex-col gap-5">
            <Input
              label={cb.contactFields.name}
              autoComplete="name"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "name",
                  value: e.target.value,
                })
              }
            />
            <Input
              label={cb.contactFields.email}
              type="email"
              autoComplete="email"
              value={state.email}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "email",
                  value: e.target.value,
                })
              }
            />
            <Text tone="secondary" size="sm">
              {cb.disclosure}
            </Text>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        {stepIndex > 0 ? (
          <Button variant="secondary" onClick={goBack}>
            {cb.back}
          </Button>
        ) : (
          <span />
        )}
        <Button onClick={goNext} disabled={!canAdvance}>
          {state.step === "contact" ? cb.confirm : cb.next}
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
      className="text-accent"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
