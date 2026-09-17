import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

// Four light grounds and one dark, so consecutive sections can alternate
// instead of running together into a single flat plane:
//   light  #fafaf7  the default page ground
//   white  #ffffff  crisp, for structured card sections
//   sand   #f4efe6  warm, for the human moments (hero, about)
//   soft   #eef2ff  cool tint, used on case-study pages
//   dark   navy     the two contrast moments (growth story, contact)
type SectionTheme = "light" | "white" | "sand" | "soft" | "dark";

const themeClass: Record<SectionTheme, string> = {
  light: "bg-background",
  white: "bg-surface",
  sand: "bg-surface-sand",
  soft: "bg-accent-soft",
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
