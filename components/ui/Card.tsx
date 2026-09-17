import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  className?: string;
  children: ReactNode;
  /** Adds hover affordance for cards that are themselves a link/button. */
  interactive?: boolean;
}

export function Card({ className, children, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "border-border bg-surface rounded-xl border p-6 shadow-sm sm:p-8",
        interactive &&
          "duration-base hover:border-border-strong transition-[border-color,box-shadow,transform] ease-out hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
