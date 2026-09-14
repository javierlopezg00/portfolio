"use client";

import NextLink from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { buttonStyles } from "@/components/ui";
import { primaryCtaHref } from "@/lib/content/nav";
import { useFocusTrap } from "@/lib/hooks/useFocusTrap";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { CloseIcon } from "./icons";
import { LocaleSwitcher } from "./LocaleSwitcher";

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const dict = getDictionary(useLocale());
  const reducedMotion = useReducedMotion();
  const containerRef = useFocusTrap<HTMLDivElement>(open, { onClose });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label={dict.nav.menuLabel}
          className="bg-background fixed inset-0 z-50 flex flex-col md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <span className="text-body-sm text-text font-semibold tracking-wide">
              JL
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label={dict.nav.closeMenu}
              className="text-text focus-visible:ring-focus-ring flex h-11 w-11 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
          <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
            {dict.nav.links.map((link) => (
              <li key={link.href}>
                <NextLink
                  href={link.href}
                  onClick={onClose}
                  className="text-h3 text-text focus-visible:ring-focus-ring block rounded-sm py-3 font-semibold focus-visible:ring-2 focus-visible:outline-none"
                >
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-6 px-6 pb-10">
            <LocaleSwitcher className="justify-center" />
            <NextLink
              href={primaryCtaHref}
              onClick={onClose}
              className={buttonStyles({ className: "w-full" })}
            >
              {dict.nav.startAProject}
            </NextLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
