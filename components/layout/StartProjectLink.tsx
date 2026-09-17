"use client";

import NextLink from "next/link";
import type { ReactNode } from "react";
import { primaryCtaHref } from "@/lib/content/nav";
import { useLocale } from "@/lib/i18n/useLocale";

interface StartProjectLinkProps {
  className?: string;
  children: ReactNode;
  /** Extra side effect to run on click — e.g. MobileMenu closing itself. */
  onClick?: () => void;
}

// Every "Start a Project" CTA site-wide routes through here so they all
// point at the same place: the homepage's contact section, prefixed with
// the current locale so it resolves from any route (case studies, the
// lab), not just the homepage.
export function StartProjectLink({
  className,
  children,
  onClick,
}: StartProjectLinkProps) {
  const locale = useLocale();
  return (
    <NextLink
      href={`/${locale}${primaryCtaHref}`}
      onClick={onClick}
      className={className}
    >
      {children}
    </NextLink>
  );
}
