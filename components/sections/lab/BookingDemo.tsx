"use client";

import { useMemo, useReducer } from "react";
import { Badge, Button, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

const SLOT_TIMES = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];
const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

interface CalendarDay {
  day: number;
  available: boolean;
}

function buildMonth(year: number, month: number, minDay: number) {
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay.getDay();

  const days: CalendarDay[] = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const weekday = new Date(year, month, day).getDay();
    const isPast = day < minDay;
    const isWeekend = weekday === 0 || weekday === 6;
    return { day, available: !isPast && !isWeekend };
  });

  const monthLabel = firstDay.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return { days, startOffset, monthLabel };
}

function useCalendarMonth() {
  return useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const current = buildMonth(year, month, now.getDate());
    // Near the end of the month, the rest of it may be all weekend — roll
    // forward rather than showing a calendar with nothing bookable.
    if (current.days.some((d) => d.available)) return current;

    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    return buildMonth(nextYear, nextMonth, 1);
  }, []);
}

function getSlots(day: number) {
  return SLOT_TIMES.map((time, i) => ({
    time,
    available: (day + i) % 5 !== 0,
  }));
}

interface BookingState {
  step: "day" | "time" | "confirmed";
  day: number | null;
  time: string | null;
}

type BookingAction =
  | { type: "SELECT_DAY"; day: number }
  | { type: "SELECT_TIME"; time: string }
  | { type: "CONFIRM" }
  | { type: "RESET" };

const initialState: BookingState = { step: "day", day: null, time: null };

function reducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case "SELECT_DAY":
      return { step: "time", day: action.day, time: null };
    case "SELECT_TIME":
      return { ...state, time: action.time };
    case "CONFIRM":
      return state.time ? { ...state, step: "confirmed" } : state;
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function BookingDemo() {
  const { days, startOffset, monthLabel } = useCalendarMonth();
  const [state, dispatch] = useReducer(reducer, initialState);
  const slots = state.day !== null ? getSlots(state.day) : [];

  return (
    <div className="flex flex-col gap-6">
      <Badge>Demo · Sample Data</Badge>

      <div className="border-border bg-surface rounded-md border p-6">
        {state.step === "confirmed" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="bg-accent/15 flex h-12 w-12 items-center justify-center rounded-full">
              <CheckIcon />
            </div>
            <div>
              <Text className="font-semibold">Booked</Text>
              <Text tone="secondary" size="sm" className="mt-1">
                {monthLabel.split(" ")[0]} {state.day}, {state.time}
              </Text>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Book another
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-8 sm:flex-row">
            <div className="flex-1">
              <Text size="sm" className="mb-3 font-medium">
                {monthLabel}
              </Text>
              <div className="grid grid-cols-7 gap-1 text-center">
                {WEEKDAY_LABELS.map((label, i) => (
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
                    aria-label={`${monthLabel} ${day}${available ? "" : ", unavailable"}`}
                    className={cn(
                      "text-body-sm duration-fast focus-visible:ring-focus-ring aspect-square rounded-md transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none",
                      !available && "text-text-secondary/30 cursor-not-allowed",
                      available &&
                        state.day !== day &&
                        "text-text hover:border-border-strong border border-transparent",
                      state.day === day && "bg-accent text-white",
                    )}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <Text size="sm" className="mb-3 font-medium">
                {state.day ? "Available times" : "Select a day"}
              </Text>
              {state.day && (
                <div className="flex flex-col gap-4">
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
                            "border-accent bg-accent text-white",
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <div>
                    <Button
                      size="sm"
                      disabled={!state.time}
                      onClick={() => dispatch({ type: "CONFIRM" })}
                    >
                      Confirm booking
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
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
