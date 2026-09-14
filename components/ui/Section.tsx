import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionTheme = "dark" | "light";

interface SectionProps {
  id?: string;
  /** Dark is the root default, so only "light" ever needs a data-theme override. */
  theme?: SectionTheme;
  className?: string;
  ariaLabelledBy?: string;
  children: ReactNode;
}

export function Section({
  id,
  theme = "dark",
  className,
  ariaLabelledBy,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      data-theme={theme === "light" ? "light" : undefined}
      aria-labelledby={ariaLabelledBy}
      className={cn("bg-background text-text py-20 sm:py-28", className)}
    >
      {children}
    </section>
  );
}
