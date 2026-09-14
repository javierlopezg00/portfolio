import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "neutral" | "accent";

const toneClass: Record<BadgeTone, string> = {
  neutral: "bg-surface text-text-secondary border border-border",
  accent: "bg-accent/10 text-accent border border-accent/20",
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
        "text-caption inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-medium tracking-wide uppercase",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
