import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "@/lib/i18n/getDictionary";
import { LOCALE_COOKIE, negotiateLocale } from "@/lib/i18n/negotiateLocale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = negotiateLocale(
    request.cookies.get(LOCALE_COOKIE)?.value,
    request.headers.get("accept-language"),
  );
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
