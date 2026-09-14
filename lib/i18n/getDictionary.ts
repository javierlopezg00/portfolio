import type { Dictionary } from "./dictionary";
import { en } from "./en";
import { es } from "./es";

const dictionaries = { en, es } satisfies Record<string, Dictionary>;

export type Locale = keyof typeof dictionaries;
export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
