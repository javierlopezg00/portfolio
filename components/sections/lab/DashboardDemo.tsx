"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  formatCompact,
  formatCurrencyCompact,
  formatPercent,
} from "@/lib/format";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { AnimatedChart } from "./AnimatedChart";
import { StatTile } from "./StatTile";
import {
  dashboardDatasets,
  dashboardRanges,
  type DashboardRange,
} from "./dashboard-data";

export function DashboardDemo() {
  const [range, setRange] = useState<DashboardRange>("7d");
  const reducedMotion = useReducedMotion();
  const data = dashboardDatasets[range];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Badge>Demo · Sample Data</Badge>
        <div
          role="group"
          aria-label="Date range"
          className="border-border bg-background/40 flex gap-1 rounded-full border p-1"
        >
          {dashboardRanges.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRange(r.id)}
              aria-pressed={range === r.id}
              className={cn(
                "text-body-sm duration-fast focus-visible:ring-focus-ring rounded-full px-3 py-1.5 transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none",
                range === r.id
                  ? "bg-accent text-white"
                  : "text-text-secondary hover:text-text",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile
          label="Revenue"
          value={data.revenue}
          formatValue={formatCurrencyCompact}
          delta={data.revenueDelta}
        />
        <StatTile
          label="Visitors"
          value={data.visitors}
          formatValue={formatCompact}
          delta={data.visitorsDelta}
        />
        <StatTile
          label="Conversion rate"
          value={data.conversionRate}
          formatValue={formatPercent}
          delta={data.conversionDelta}
        />
        <StatTile
          label="Bookings"
          value={data.bookings}
          formatValue={formatCompact}
          delta={data.bookingsDelta}
        />
      </div>

      <div className="border-border bg-surface rounded-md border p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={range}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
          >
            <AnimatedChart data={data.chart} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
