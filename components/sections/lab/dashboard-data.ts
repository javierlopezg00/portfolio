export interface ChartPoint {
  label: string;
  value: number;
}

export interface DashboardDataset {
  revenue: number;
  revenueDelta: number;
  visitors: number;
  visitorsDelta: number;
  conversionRate: number;
  conversionDelta: number;
  bookings: number;
  bookingsDelta: number;
  chart: ChartPoint[];
}

// Range ids/labels for the UI live in the dictionary (dict.lab.dashboard.
// ranges) — same ids as this Record's keys, so no separate structural
// array is needed here.
export type DashboardRange = "7d" | "30d" | "1y";

export const dashboardDatasets: Record<DashboardRange, DashboardDataset> = {
  "7d": {
    revenue: 4820,
    revenueDelta: 8.2,
    visitors: 1240,
    visitorsDelta: 3.4,
    conversionRate: 3.8,
    conversionDelta: -0.4,
    bookings: 47,
    bookingsDelta: 12.1,
    chart: [
      { label: "Mon", value: 520 },
      { label: "Tue", value: 610 },
      { label: "Wed", value: 480 },
      { label: "Thu", value: 720 },
      { label: "Fri", value: 690 },
      { label: "Sat", value: 850 },
      { label: "Sun", value: 950 },
    ],
  },
  "30d": {
    revenue: 21300,
    revenueDelta: 14.6,
    visitors: 5860,
    visitorsDelta: 9.1,
    conversionRate: 4.1,
    conversionDelta: 0.6,
    bookings: 212,
    bookingsDelta: 18.4,
    chart: [
      { label: "W1", value: 4200 },
      { label: "W2", value: 4800 },
      { label: "W3", value: 5100 },
      { label: "W4", value: 5900 },
    ],
  },
  "1y": {
    revenue: 248000,
    revenueDelta: 32.5,
    visitors: 68000,
    visitorsDelta: 21.7,
    conversionRate: 3.6,
    conversionDelta: 1.2,
    bookings: 2450,
    bookingsDelta: 27.9,
    chart: [
      { label: "Jan", value: 14200 },
      { label: "Feb", value: 15800 },
      { label: "Mar", value: 17100 },
      { label: "Apr", value: 16400 },
      { label: "May", value: 18900 },
      { label: "Jun", value: 20200 },
      { label: "Jul", value: 19600 },
      { label: "Aug", value: 21500 },
      { label: "Sep", value: 23100 },
      { label: "Oct", value: 24800 },
      { label: "Nov", value: 26200 },
      { label: "Dec", value: 27400 },
    ],
  },
};
