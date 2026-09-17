import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  className?: string;
  children: ReactNode;
  /** Adds hover affordance for cards that are themselves a link/button. */
  interactive?: boolean;
  /** The signature squared corner. Reserved for cards that are meant to
   * feel like brand objects rather than plain containers — a handful per
   * page, never every card in a grid. */
  signature?: boolean;
}

export function Card({
  className,
  children,
  interactive = false,
  signature = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "border-border bg-surface border p-6 shadow-sm sm:p-8",
        signature ? "rounded-signature-lg" : "rounded-xl",
        interactive &&
          "duration-base hover:border-border-strong transition-[border-color,box-shadow,transform] ease-out hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
