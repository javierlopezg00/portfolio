import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[background-color,border-color,color,box-shadow] duration-fast ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-accent-strong text-white shadow-sm hover:bg-accent",
  secondary:
    "bg-surface text-text border border-border-strong shadow-sm hover:border-accent hover:text-accent",
  ghost: "text-text hover:text-accent",
  // WhatsApp keeps its recognizable green so visitors spot it instantly —
  // the one place the palette borrows a brand color.
  whatsapp: "bg-whatsapp text-white shadow-sm hover:brightness-110",
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
