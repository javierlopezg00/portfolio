import { defaultLocale, isLocale, type Locale } from "./getDictionary";

export const LOCALE_COOKIE = "NEXT_LOCALE";

// Shared by proxy.ts (via NextRequest's cookies/headers) and
// global-not-found.tsx (via next/headers' cookies()/headers()) — both
// need the same "what locale would this visitor get" answer, just from
// slightly different APIs for reading the incoming request.
export function negotiateLocale(
  cookieValue: string | undefined,
  acceptLanguageHeader: string | null,
): Locale {
  if (cookieValue && isLocale(cookieValue)) return cookieValue;
  if (!acceptLanguageHeader) return defaultLocale;

  // Hand-rolled negotiation for a binary en/es choice: parse
  // "es-MX,es;q=0.9,en;q=0.8" style headers, strip region subtags, first
  // supported match wins. No need for a full RFC 4647 matcher library.
  const preferred = acceptLanguageHeader
    .split(",")
    .map((part) => part.split(";")[0]!.trim().toLowerCase().split("-")[0]!);

  return preferred.find(isLocale) ?? defaultLocale;
}
