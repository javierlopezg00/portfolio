import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  "primary" | "secondary" | "ghost" | "whatsapp" | "demo";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[background-color,border-color,color,box-shadow] duration-fast ease-out disabled:pointer-events-none disabled:opacity-40";

const variantClass: Record<ButtonVariant, string> = {
  // Hover darkens rather than lightens: a lighter terracotta would drop
  // the white label below 4.5:1.
  primary:
    "bg-accent-strong text-white shadow-sm hover:bg-[color:var(--color-accent-hover)]",
  // On the light theme this is a soft surface with a hairline; on a dark
  // section the same tokens resolve to a cream outline on charcoal.
  secondary:
    "bg-surface text-text border border-border-strong shadow-sm hover:border-accent hover:text-accent",
  ghost: "text-text hover:text-accent",
  // WhatsApp is a channel, not a second brand: the button wears this
  // site's own secondary styling and the green survives only inside the
  // glyph, where it's still instantly recognizable.
  whatsapp:
    "bg-transparent text-text border border-border-strong hover:border-accent hover:text-accent [&_svg]:text-whatsapp",
  // The primary action *inside a conceptual project's own interface* —
  // a clinic's "Confirm visit", a restaurant's "Reserve". It wears that
  // project's blue, not this site's terracotta, so a demo reads as one
  // coherent product rather than half-branded by its host.
  demo: "bg-demo-strong text-white shadow-sm hover:bg-demo",
};

// Every size clears the 44px touch-target minimum on phones.
const sizeClass: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-body-sm",
  md: "h-12 px-6 text-body",
  lg: "h-13 px-8 text-body-lg",
};

interface ButtonStylesOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

/** Exported so a link can be styled as a button (e.g. `<Link className={buttonStyles(...)}>`)
 * without a polymorphic component abstraction. */
export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStylesOptions = {}) {
  return cn(base, variantClass[variant], sizeClass[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonStyles({ variant, size, className })} {...props} />
  );
}
