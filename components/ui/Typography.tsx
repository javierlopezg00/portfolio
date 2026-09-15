import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4";

const headingTag: Record<HeadingSize, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

const headingSizeClass: Record<HeadingSize, string> = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
};

interface HeadingProps {
  /** Visual size — decoupled from the semantic tag so hierarchy stays correct
   * even when a heading needs to look smaller (or bigger) than its level. */
  size: HeadingSize;
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Heading({ size, as, id, className, children }: HeadingProps) {
  const Tag = as ?? headingTag[size];
  return (
    <Tag
      id={id}
      className={cn(
        headingSizeClass[size],
        "text-text font-semibold",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type TextSize = "lg" | "base" | "sm" | "caption";
type TextTone = "primary" | "secondary";

const textSizeClass: Record<TextSize, string> = {
  lg: "text-body-lg",
  base: "text-body",
  sm: "text-body-sm",
  caption: "text-caption",
};

interface TextProps {
  as?: "p" | "span" | "div";
  size?: TextSize;
  tone?: TextTone;
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Text({
  as: Tag = "p",
  size = "base",
  tone = "primary",
  id,
  className,
  children,
}: TextProps) {
  return (
    <Tag
      id={id}
      className={cn(
        textSizeClass[size],
        tone === "primary" ? "text-text" : "text-text-secondary",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
