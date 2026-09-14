import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GridProps {
  /** Column classes are left to the caller (e.g. "grid-cols-1 md:grid-cols-3") —
   * Tailwind's grid utilities already cover this; no need to re-abstract them. */
  className?: string;
  children: ReactNode;
}

export function Grid({ className, children }: GridProps) {
  return <div className={cn("grid gap-6", className)}>{children}</div>;
}
