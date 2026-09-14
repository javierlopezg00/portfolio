"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useMotionValueEvent, useSpring } from "motion/react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface StatTileProps {
  label: string;
  value: number;
  formatValue?: (value: number) => string;
  delta?: number;
}

const defaultFormat = (value: number) => Math.round(value).toLocaleString();

export function StatTile({ label, value, formatValue, delta }: StatTileProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const motionValue = useMotionValue(value);
  const spring = useSpring(motionValue, {
    stiffness: reducedMotion ? 1000 : 120,
    damping: reducedMotion ? 100 : 22,
    mass: 0.5,
  });
  const format = formatValue ?? defaultFormat;

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useMotionValueEvent(spring, "change", (latest) => {
    if (spanRef.current) {
      spanRef.current.textContent = format(latest);
    }
  });

  return (
    <div className="border-border bg-background/40 rounded-md border p-4">
      <p className="text-body-sm text-text-secondary">{label}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <span ref={spanRef} className="text-h3 text-text font-semibold">
          {format(value)}
        </span>
        {delta !== undefined && (
          <span
            className={cn(
              "text-caption font-medium",
              delta >= 0 ? "text-emerald-500" : "text-red-400",
            )}
          >
            {delta >= 0 ? "+" : ""}
            {delta}%
          </span>
        )}
      </div>
    </div>
  );
}
