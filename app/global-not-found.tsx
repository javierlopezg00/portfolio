import type { Metadata } from "next";
import NextLink from "next/link";
import { Geist } from "next/font/google";
import { cookies, headers } from "next/headers";
import { buttonStyles, Container, Heading, Text } from "@/components/ui";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { LOCALE_COOKIE, negotiateLocale } from "@/lib/i18n/negotiateLocale";
import "./globals.css";

// Bypasses app/[locale]/layout.tsx entirely (see next.config.ts's
// globalNotFound comment for why a plain not-found.tsx can't catch this
// case) — must define its own <html>/<body>, and can't read the [locale]
// segment via params (this file receives none — the URL never matched a
// segment at all). Still worth a best guess rather than defaulting to
// English outright: same cookie/Accept-Language negotiation the proxy
// itself uses, just read directly via next/headers instead of off a
// NextRequest.
async function resolveLocale() {
  const [cookieStore, headerList] = await Promise.all([cookies(), headers()]);
  return negotiateLocale(
    cookieStore.get(LOCALE_COOKIE)?.value,
    headerList.get("accept-language"),
  );
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await resolveLocale());
  return { title: dict.notFound.heading };
}

export default async function GlobalNotFound() {
  const locale = await resolveLocale();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <main>
          <Container className="flex min-h-screen flex-col items-center justify-center text-center">
            <p className="text-accent text-caption mb-4 font-semibold tracking-wide uppercase">
              {dict.notFound.eyebrow}
            </p>
            <Heading size="display" className="max-w-xl">
              {dict.notFound.heading}
            </Heading>
            <Text tone="secondary" size="lg" className="mt-4 max-w-md">
              {dict.notFound.body}
            </Text>
            <NextLink
              href={`/${locale}`}
              className={buttonStyles({ className: "mt-8" })}
            >
              {dict.notFound.backHome}
            </NextLink>
          </Container>
        </main>
      </body>
    </html>
  );
}
