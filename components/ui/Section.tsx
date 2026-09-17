import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

// "light" is the root default, "soft" is the same theme on the tinted
// surface, and "dark" flips every token underneath via data-theme — used
// sparingly (the contact section, the footer) for contrast.
type SectionTheme = "light" | "soft" | "dark";

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
      className={cn(
        "text-text py-16 sm:py-24",
        theme === "soft" ? "bg-surface-soft" : "bg-background",
        className,
      )}
    >
      {children}
    </section>
  );
}
