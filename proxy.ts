import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  defaultLocale,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n/getDictionary";

const LOCALE_COOKIE = "NEXT_LOCALE";

function pickLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  // Hand-rolled negotiation for a binary en/es choice: parse
  // "es-MX,es;q=0.9,en;q=0.8" style headers, strip region subtags, first
  // supported match wins. No need for a full RFC 4647 matcher library.
  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]!.trim().toLowerCase().split("-")[0]!);

  return preferred.find(isLocale) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Exclude API routes (locale-prefixing would break fetch("/api/...")
    // calls), the internal dev-only kitchen sink, Next/Vercel platform
    // internals (_vercel serves Analytics/Speed Insights — normally
    // intercepted by Vercel's edge before this proxy runs, but excluded
    // here too as a defensive measure), and the global (non-per-locale)
    // icon/robots/sitemap file-convention routes. opengraph-image lives
    // under app/[locale]/ (already locale-scoped by directory, not a root
    // path) so it doesn't need an exclusion here.
    "/((?!api|dev|_next/static|_next/image|_vercel|favicon.ico|icon|apple-icon|robots.txt|sitemap.xml).*)",
  ],
};
