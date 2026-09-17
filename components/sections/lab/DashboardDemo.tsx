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
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import { AnimatedChart } from "./AnimatedChart";
import { StatTile } from "./StatTile";
import { dashboardDatasets, type DashboardRange } from "./dashboard-data";

export function DashboardDemo() {
  const dict = getDictionary(useLocale());
  const [range, setRange] = useState<DashboardRange>("7d");
  const reducedMotion = useReducedMotion();
  const data = dashboardDatasets[range];
  const chart = data.chart.map((point) => ({
    ...point,
    label: dict.lab.dashboard.chartLabels[point.label] ?? point.label,
  }));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Badge>{dict.lab.demoBadge}</Badge>
        <div
          role="group"
          aria-label={dict.lab.dashboard.dateRangeAriaLabel}
          className="border-border bg-background/40 flex gap-1 rounded-full border p-1"
        >
          {dict.lab.dashboard.ranges.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRange(r.id as DashboardRange)}
              aria-pressed={range === r.id}
              className={cn(
                "text-body-sm duration-fast rounded-full px-3 py-1.5 transition-colors ease-out",
                range === r.id
                  ? "bg-demo-strong text-white"
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
          label={dict.lab.dashboard.stats.revenue}
          value={data.revenue}
          formatValue={(v) => formatCurrencyCompact(v, dict.intlLocale)}
          delta={data.revenueDelta}
        />
        <StatTile
          label={dict.lab.dashboard.stats.visitors}
          value={data.visitors}
          formatValue={(v) => formatCompact(v, dict.intlLocale)}
          delta={data.visitorsDelta}
        />
        <StatTile
          label={dict.lab.dashboard.stats.conversionRate}
          value={data.conversionRate}
          formatValue={formatPercent}
          delta={data.conversionDelta}
        />
        <StatTile
          label={dict.lab.dashboard.stats.bookings}
          value={data.bookings}
          formatValue={(v) => formatCompact(v, dict.intlLocale)}
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
            <AnimatedChart data={chart} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
