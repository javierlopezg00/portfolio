import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

// Three light grounds and one dark, so consecutive sections alternate
// instead of running together into a single flat plane:
//   light  #f7f4ee  the default warm page ground
//   white  #fffdf9  crisp, for structured card sections
//   muted  #f1eadf  a step deeper, for the human moments and case studies
//   dark   #29322d  charcoal green — the two contrast moments
type SectionTheme = "light" | "white" | "muted" | "dark";

const themeClass: Record<SectionTheme, string> = {
  light: "bg-background",
  white: "bg-surface",
  muted: "bg-surface-muted",
  dark: "bg-background",
};

interface SectionProps {
  id?: string;
  theme?: SectionTheme;
  className?: string;
  ariaLabelledBy?: string;
  children: ReactNode;
}

export function Section({
  id,
  theme = "light",
  className,
  ariaLabelledBy,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      data-theme={theme === "dark" ? "dark" : undefined}
      aria-labelledby={ariaLabelledBy}
      className={cn("text-text py-20 sm:py-28", themeClass[theme], className)}
    >
      {children}
    </section>
  );
}
