import type { Metadata } from "next";
import NextLink from "next/link";
import { buttonStyles, Container, Heading, Text } from "@/components/ui";
import { getServerLocale } from "@/lib/i18n/getServerDictionary";
import { getDictionary } from "@/lib/i18n/getDictionary";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default async function NotFound() {
  // notFound() can fire before the [locale] segment resolves (e.g. an
  // unmatched path under a bad prefix), so getServerLocale falls back
  // rather than trust this is always a valid locale.
  const locale = await getServerLocale();
  const dict = getDictionary(locale);

  return (
    <main>
      <Container className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="text-accent mb-4 font-mono text-sm tracking-wide uppercase">
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
  );
}
