import type { Metadata } from "next";
import NextLink from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { buttonStyles, Container, Heading, Text } from "@/components/ui";
import { defaultLocale } from "@/lib/i18n/getDictionary";
import "./globals.css";

// Bypasses app/[locale]/layout.tsx entirely (see next.config.ts's
// globalNotFound comment for why a plain not-found.tsx can't catch this
// case) — must define its own <html>/<body>. The locale is genuinely
// unknown here (the URL didn't match a [locale] segment at all), so this
// stays English-only rather than guessing.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <main>
          <Container className="flex min-h-screen flex-col items-center justify-center text-center">
            <p className="text-accent mb-4 font-mono text-sm tracking-wide uppercase">
              404
            </p>
            <Heading size="display" className="max-w-xl">
              This page doesn&apos;t exist.
            </Heading>
            <Text tone="secondary" size="lg" className="mt-4 max-w-md">
              The page you&apos;re looking for was moved, renamed, or never
              existed.
            </Text>
            <NextLink
              href={`/${defaultLocale}`}
              className={buttonStyles({ className: "mt-8" })}
            >
              Back to home
            </NextLink>
          </Container>
        </main>
      </body>
    </html>
  );
}
