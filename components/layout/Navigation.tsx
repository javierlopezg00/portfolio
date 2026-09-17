"use client";

import { useState } from "react";
import NextLink from "next/link";
import { buttonStyles } from "@/components/ui";
import { cn } from "@/lib/cn";
import { useScrolledPast } from "@/lib/hooks/useScrolledPast";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import { MenuIcon } from "./icons";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileMenu } from "./MobileMenu";
import { StartProjectLink } from "./StartProjectLink";
import { Wordmark } from "./Wordmark";

const MOBILE_MENU_ID = "mobile-menu";

export function Navigation() {
  const locale = useLocale();
  const dict = getDictionary(locale);
  const scrolled = useScrolledPast(24);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // The header's backdrop-blur makes it the containing block for any
    // `position: fixed` descendant, so the full-screen menu has to live
    // beside the header, not inside it — otherwise it's clipped to the
    // bar's own 72px.
    <>
      <header
        className={cn(
          "bg-background/85 duration-base sticky top-0 z-50 border-b backdrop-blur transition-[border-color,box-shadow] ease-out",
          scrolled ? "border-border shadow-sm" : "border-transparent",
        )}
      >
        <nav
          aria-label={dict.nav.primaryAriaLabel}
          className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4 sm:px-8"
        >
          <Wordmark href={`/${locale}`} />

          <ul className="hidden items-center gap-1 md:flex">
            {dict.nav.links.map((link) => (
              <li key={link.href}>
                <NextLink
                  href={`/${locale}${link.href}`}
                  className="text-body-sm text-text-secondary duration-fast hover:text-text focus-visible:ring-focus-ring relative rounded-full px-3 py-2 font-medium transition-colors ease-out after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[color:var(--color-warm)] after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:ring-2 focus-visible:outline-none"
                >
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <LocaleSwitcher />
            <StartProjectLink className={buttonStyles({ size: "sm" })}>
              {dict.nav.startAProject}
            </StartProjectLink>
          </div>

          <button
            type="button"
            className="text-text focus-visible:ring-focus-ring -mr-2 flex h-11 w-11 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:outline-none md:hidden"
            aria-label={dict.nav.openMenu}
            aria-expanded={mobileOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      <MobileMenu
        id={MOBILE_MENU_ID}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
