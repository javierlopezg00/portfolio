import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "neutral" | "accent" | "success";

const toneClass: Record<BadgeTone, string> = {
  neutral: "bg-background text-text-secondary border border-border",
  accent: "bg-accent-soft text-accent border border-transparent",
  success: "bg-success/10 text-success border border-transparent",
};

interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}

export function Badge({ tone = "neutral", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-caption inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-medium",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
