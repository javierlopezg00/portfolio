import NextLink from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type LinkProps = ComponentProps<typeof NextLink> & {
  external?: boolean;
};

/** Inline text link. For a link that should look like a button (a CTA),
 * compose `buttonStyles()` from Button.tsx directly rather than extending this. */
export function Link({ external, className, children, ...props }: LinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <NextLink
      className={cn(
        "text-text duration-fast hover:text-accent rounded-sm underline-offset-4 transition-colors ease-out",
        className,
      )}
      {...externalProps}
      {...props}
    >
      {children}
    </NextLink>
  );
}
