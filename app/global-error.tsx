"use client";

import { Geist, Instrument_Serif } from "next/font/google";
import { Button, Container, Heading, Text } from "@/components/ui";
import "./globals.css";

// Catches errors thrown in app/[locale]/layout.tsx itself (e.g. a bug in
// locale resolution) — the per-locale error.tsx can't, since Next's error
// boundaries only catch errors in their own segment's children, not their
// own layout or ancestors. Must render its own <html>/<body> and can't
// reach the locale dictionary (this bypasses the localized layout
// entirely), so it stays English-only.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Display face — headlines only (see Heading in components/ui/Typography).
// One weight, latin subset: ~35KB, and it never blocks body text.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <main>
          <Container className="flex min-h-screen flex-col items-center justify-center text-center">
            <p className="text-accent text-caption mb-4 font-semibold tracking-wide uppercase">
              Error
            </p>
            <Heading size="display" className="max-w-xl">
              Something went wrong.
            </Heading>
            <Text tone="secondary" size="lg" className="mt-4 max-w-md">
              An unexpected error occurred. Please try again.
            </Text>
            <Button className="mt-8" onClick={() => retry()}>
              Try again
            </Button>
          </Container>
        </main>
      </body>
    </html>
  );
}
