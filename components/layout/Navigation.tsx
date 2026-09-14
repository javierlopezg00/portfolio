"use client";

import { useState } from "react";
import NextLink from "next/link";
import { buttonStyles } from "@/components/ui";
import { cn } from "@/lib/cn";
import { navLinks, primaryCtaHref } from "@/lib/content/nav";
import { useScrolledPast } from "@/lib/hooks/useScrolledPast";
import { MenuIcon } from "./icons";
import { MobileMenu } from "./MobileMenu";

const MOBILE_MENU_ID = "mobile-menu";

export function Navigation() {
  const scrolled = useScrolledPast(80);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          "duration-base flex w-full items-center justify-between rounded-full border transition-[max-width,padding,background-color,border-color,box-shadow] ease-out",
          scrolled
            ? "border-border bg-surface/80 max-w-2xl px-4 py-2 shadow-md backdrop-blur"
            : "max-w-6xl border-transparent bg-transparent px-2 py-3",
        )}
      >
        <NextLink
          href="/"
          className="text-body-sm text-text focus-visible:ring-focus-ring rounded-sm px-2 font-semibold tracking-wide focus-visible:ring-2 focus-visible:outline-none"
        >
          JL
        </NextLink>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
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

        <div className="hidden md:block">
          <NextLink
            href={primaryCtaHref}
            className={buttonStyles({ size: "sm" })}
          >
            Start a Project
          </NextLink>
        </div>

        <button
          type="button"
          className="text-text focus-visible:ring-focus-ring flex h-11 w-11 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:outline-none md:hidden"
          aria-label="Open menu"
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
