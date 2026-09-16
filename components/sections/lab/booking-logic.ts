// Pure day/time calendar mechanics shared between the Interactive Lab's
// BookingDemo and the Meridian clinic case study's booking flow — kept here
// so both call sites use identical availability rules and date math instead
// of duplicating them.
import { useMemo } from "react";

export const SLOT_HOURS = [9, 10, 11, 13, 14, 15, 16];

export function formatSlotTime(hour: number, intlLocale: string) {
  const d = new Date(2000, 0, 1, hour);
  return new Intl.DateTimeFormat(intlLocale, {
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
}

export interface CalendarDay {
  day: number;
  available: boolean;
}

export function buildMonth(
  year: number,
  month: number,
  minDay: number,
  intlLocale: string,
) {
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

  const monthLabel = firstDay.toLocaleDateString(intlLocale, {
    month: "long",
    year: "numeric",
  });

  return { days, startOffset, monthLabel };
}

export function useCalendarMonth(intlLocale: string) {
  return useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const current = buildMonth(year, month, now.getDate(), intlLocale);
    // Near the end of the month, the rest of it may be all weekend — roll
    // forward rather than showing a calendar with nothing bookable.
    if (current.days.some((d) => d.available)) return current;

    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    return buildMonth(nextYear, nextMonth, 1, intlLocale);
  }, [intlLocale]);
}

export function getSlots(day: number, intlLocale: string) {
  return SLOT_HOURS.map((hour, i) => ({
    time: formatSlotTime(hour, intlLocale),
    available: (day + i) % 5 !== 0,
  }));
}
