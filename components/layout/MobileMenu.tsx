"use client";

import NextLink from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { buttonStyles } from "@/components/ui";
import { useFocusTrap } from "@/lib/hooks/useFocusTrap";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { CloseIcon } from "./icons";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { StartProjectLink } from "./StartProjectLink";
import { Wordmark } from "./Wordmark";

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const locale = useLocale();
  const dict = getDictionary(locale);
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
