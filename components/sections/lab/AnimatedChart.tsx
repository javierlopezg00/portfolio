"use client";

import { useId, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import type { ChartPoint } from "./dashboard-data";

interface AnimatedChartProps {
  data: ChartPoint[];
}

const WIDTH = 600;
const HEIGHT = 220;
const PADDING_X = 12;
const PADDING_Y = 20;

export function AnimatedChart({ data }: AnimatedChartProps) {
  const dict = getDictionary(useLocale());
  const gradientId = useId();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const points = useMemo(() => {
    const values = data.map((d) => d.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const innerWidth = WIDTH - PADDING_X * 2;
    const innerHeight = HEIGHT - PADDING_Y * 2;

    return data.map((d, i) => {
      const x =
        PADDING_X +
        (data.length === 1
          ? innerWidth / 2
          : (i / (data.length - 1)) * innerWidth);
      const y =
        PADDING_Y + innerHeight - ((d.value - min) / range) * innerHeight;
      return { x, y, ...d };
    });
  }, [data]);

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
    .join(" ");
  const baseline = HEIGHT - PADDING_Y;
  const areaPath = `${linePath} L${points[points.length - 1].x},${baseline} L${points[0].x},${baseline} Z`;
  const gridLines = [0.25, 0.5, 0.75].map(
    (f) => PADDING_Y + f * (HEIGHT - PADDING_Y * 2),
  );
  const active = activeIndex !== null ? points[activeIndex] : null;

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        role="img"
        aria-label={dict.lab.dashboard.chartAriaLabel(
          data[0]?.label ?? "",
          data[data.length - 1]?.label ?? "",
          Math.min(...data.map((d) => d.value)).toLocaleString(dict.intlLocale),
          Math.max(...data.map((d) => d.value)).toLocaleString(dict.intlLocale),
        )}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              style={{ stopColor: "var(--color-accent)" }}
              stopOpacity={0.18}
            />
            <stop
              offset="100%"
              style={{ stopColor: "var(--color-accent)" }}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        {gridLines.map((y) => (
          <line
            key={y}
            x1={PADDING_X}
            y1={y}
            x2={WIDTH - PADDING_X}
            y2={y}
            className="stroke-border"
            strokeWidth={1}
          />
        ))}

        <path d={areaPath} fill={`url(#${gradientId})`} />
        <path
          d={linePath}
          fill="none"
          className="stroke-accent"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {active && (
          <line
            x1={active.x}
            y1={PADDING_Y}
            x2={active.x}
            y2={baseline}
            className="stroke-border-strong"
            strokeWidth={1}
          />
        )}

        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={activeIndex === i ? 5 : 3}
            className="fill-accent stroke-surface duration-fast transition-[r] ease-out"
            strokeWidth={2}
          />
        ))}
      </svg>

      {/* Hover + keyboard focus share one hit-target mechanism, per the
          dataviz guidance: same tooltip detail on focus as on hover. */}
      <div className="absolute inset-0 flex">
        {points.map((p, i) => (
          <button
            key={i}
            type="button"
            className="flex-1 focus-visible:outline-none"
            onPointerEnter={() => setActiveIndex(i)}
            onPointerLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex(null)}
            aria-label={dict.lab.dashboard.chartPointAriaLabel(
              p.label,
              p.value.toLocaleString(dict.intlLocale),
            )}
          />
        ))}
      </div>

      {active && (
        <div
          className={cn(
            "border-border bg-surface text-caption pointer-events-none absolute top-0 -translate-x-1/2 rounded-md border px-2.5 py-1.5 shadow-md",
            active.x < WIDTH * 0.15 && "translate-x-0",
            active.x > WIDTH * 0.85 && "-translate-x-full",
          )}
          style={{ left: `${(active.x / WIDTH) * 100}%` }}
        >
          <p className="text-text font-semibold">
            {active.value.toLocaleString(dict.intlLocale)}
          </p>
          <p className="text-text-secondary">{active.label}</p>
        </div>
      )}
    </div>
  );
}
