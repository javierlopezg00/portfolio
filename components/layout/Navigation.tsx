"use client";

import { useState } from "react";
import NextLink from "next/link";
import { buttonStyles } from "@/components/ui";
import { cn } from "@/lib/cn";
import { useScrolledPast } from "@/lib/hooks/useScrolledPast";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import { ConfiguratorCtaLink } from "./ConfiguratorCtaLink";
import { MenuIcon } from "./icons";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileMenu } from "./MobileMenu";

const MOBILE_MENU_ID = "mobile-menu";

export function Navigation() {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const scrolled = useScrolledPast(80);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label={dict.nav.primaryAriaLabel}
        className={cn(
          "duration-base flex w-full items-center justify-between rounded-full border transition-[max-width,padding,background-color,border-color,box-shadow] ease-out",
          scrolled
            ? "border-border bg-surface/80 max-w-2xl px-4 py-2 shadow-md backdrop-blur"
            : "max-w-6xl border-transparent bg-transparent px-2 py-3",
        )}
      >
        <NextLink
          href={`/${locale}`}
          className="text-body-sm text-text focus-visible:ring-focus-ring shrink-0 rounded-sm px-2 font-semibold tracking-wide whitespace-nowrap focus-visible:ring-2 focus-visible:outline-none"
        >
          {/* The full wordmark only fits the pill's expanded, unscrolled
              width — the compact scrolled state (which also has to fit the
              nav links, locale switcher, and CTA) is already at its limit
              with a 2-character mark; even "JLD" was enough to wrap the
              row and break the layout, confirmed by testing it directly. */}
          {scrolled ? "JL" : "Javier López Digital"}
        </NextLink>

        <ul className="hidden items-center gap-1 md:flex">
          {dict.nav.links.map((link) => (
            <li key={link.href}>
              <NextLink
                href={link.href}
                className="text-body-sm text-text-secondary duration-fast hover:text-text focus-visible:ring-focus-ring rounded-sm px-3 py-2 transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none"
              >
                {link.label}
              </NextLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher />
          <ConfiguratorCtaLink className={buttonStyles({ size: "sm" })}>
            {dict.nav.startAProject}
          </ConfiguratorCtaLink>
        </div>

        <button
          type="button"
          className="text-text focus-visible:ring-focus-ring flex h-11 w-11 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:outline-none md:hidden"
          aria-label={dict.nav.openMenu}
          aria-expanded={mobileOpen}
          aria-controls={MOBILE_MENU_ID}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </button>
      </nav>

      <MobileMenu
        id={MOBILE_MENU_ID}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
