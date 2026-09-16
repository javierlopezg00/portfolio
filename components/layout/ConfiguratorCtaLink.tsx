"use client";

import NextLink from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { ScrollTrigger } from "@/lib/animation/gsap";
import { primaryCtaHref } from "@/lib/content/nav";
import { useLocale } from "@/lib/i18n/useLocale";

interface ConfiguratorCtaLinkProps {
  className?: string;
  children: ReactNode;
  /** Extra side effect to run on click — e.g. MobileMenu closing itself. */
  onClick?: () => void;
}

// Every "Start a Project" CTA site-wide routes through here rather than a
// plain NextLink. A handful of things below the configurator's position
// on the page settle in asynchronously shortly after load — web fonts,
// images without a reserved size, and (on desktop) the Evolution
// sequence's GSAP-pinned scroll region, which reserves substantial extra
// scroll height once its own code chunk finishes loading and can take
// well over a second under real network conditions. A click landing
// before any of that settles scrolls to wherever the target *currently*
// sits, not where it ends up — confirmed by testing landing anywhere
// from a few hundred to several thousand pixels short. Fixed-delay
// retries alone weren't reliably long enough, so this also listens for
// GSAP's own "setup finished" signal directly instead of guessing.
export function ConfiguratorCtaLink({
  className,
  children,
  onClick,
}: ConfiguratorCtaLinkProps) {
  const locale = useLocale();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.();

    const target = document.getElementById(primaryCtaHref.slice(1));
    // Not on the homepage (e.g. a case-study page) — the configurator
    // section doesn't exist here, so let the link's href do a real
    // cross-page navigation to `/${locale}#configurator` instead of
    // no-opping on a same-page fragment that resolves to nothing.
    if (!target) return;

    event.preventDefault();
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    const scrollToTarget = () =>
      target.scrollIntoView({ behavior, block: "start" });

    scrollToTarget();
    for (const delay of [250, 900]) {
      window.setTimeout(scrollToTarget, delay);
    }

    // Covers the GSAP-pin case precisely, however long its chunk load +
    // setup actually takes, rather than guessing a fixed delay for it.
    const onRefresh = () => scrollToTarget();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    window.setTimeout(() => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
    }, 4000);
  }

  return (
    <NextLink
      href={`/${locale}${primaryCtaHref}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </NextLink>
  );
}
