"use client";

import { createContext, type ReactNode } from "react";
import type { Locale } from "./getDictionary";

// Client Components can't call next/root-params (Server-Component-only), so
// the locale is read once in app/[locale]/layout.tsx (a Server Component)
// and handed down through this context — carrying only the two-character
// locale string, not the whole dictionary, keeps re-renders cheap.
export const LocaleContext = createContext<Locale | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}
