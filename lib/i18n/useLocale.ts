"use client";

import { use } from "react";
import { LocaleContext } from "./LocaleProvider";
import type { Locale } from "./getDictionary";

export function useLocale(): Locale {
  const locale = use(LocaleContext);
  if (!locale) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return locale;
}
