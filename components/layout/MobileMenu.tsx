"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import { buttonStyles } from "@/components/ui";
import { cn } from "@/lib/cn";
import { useFocusTrap } from "@/lib/hooks/useFocusTrap";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import { CloseIcon } from "./icons";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { StartProjectLink } from "./StartProjectLink";
import { Wordmark } from "./Wordmark";

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

// A plain CSS fade rather than a motion/react AnimatePresence: this is the
// one place the homepage used the animation library, and it cost ~47KB
// of gzipped JavaScript competing with the web fonts before first paint.
// Entry fades via @starting-style (the `starting:` variant); exit keeps
// the menu mounted as `closing` until its transition ends.
export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const containerRef = useFocusTrap<HTMLDivElement>(open, { onClose });
  // "Adjust state when a prop changes" — computed during render, so no
  // effect has to set state synchronously.
  const [prevOpen, setPrevOpen] = useState(open);
  const [closing, setClosing] = useState(false);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (!open) setClosing(true);
  }

  // Safety net in case transitionend never fires (e.g. the element is
  // hidden mid-transition): unmount shortly after the base duration.
  useEffect(() => {
    if (!closing) return;
    const timeout = window.setTimeout(() => setClosing(false), 400);
    return () => window.clearTimeout(timeout);
  }, [closing]);

  if (!open && !closing) return null;

  return (
    <div
      id={id}
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={dict.nav.menuLabel}
      onTransitionEnd={() => {
        if (!open) setClosing(false);
      }}
      className={cn(
        "bg-background duration-base fixed inset-0 z-50 flex flex-col transition-opacity ease-out md:hidden",
        open ? "opacity-100 starting:opacity-0" : "opacity-0",
      )}
    >
      <div className="flex h-18 items-center justify-between px-4">
        <Wordmark href={`/${locale}`} />
        <button
          type="button"
          onClick={onClose}
          aria-label={dict.nav.closeMenu}
          className="text-text -mr-2 flex h-11 w-11 items-center justify-center rounded-full"
        >
          <CloseIcon />
        </button>
      </div>
      <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
        {dict.nav.links.map((link) => (
          <li key={link.href}>
            <NextLink
              href={`/${locale}${link.href}`}
              onClick={onClose}
              className="text-h2 text-text block rounded-md py-3 font-semibold"
            >
              {link.label}
            </NextLink>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-6 px-6 pb-10">
        <LocaleSwitcher className="justify-center" />
        <StartProjectLink
          onClick={onClose}
          className={buttonStyles({ size: "lg", className: "w-full" })}
        >
          {dict.nav.startAProject}
        </StartProjectLink>
      </div>
    </div>
  );
}
