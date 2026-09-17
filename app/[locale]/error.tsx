"use client";

import { useEffect } from "react";
import NextLink from "next/link";
import {
  Button,
  buttonStyles,
  Container,
  Heading,
  Text,
} from "@/components/ui";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useLocale } from "@/lib/i18n/useLocale";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const locale = useLocale();
  const dict = getDictionary(locale);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <Container className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="text-accent text-caption mb-4 font-semibold tracking-wide uppercase">
          {dict.errorPage.eyebrow}
        </p>
        <Heading size="display" className="max-w-xl">
          {dict.errorPage.heading}
        </Heading>
        <Text tone="secondary" size="lg" className="mt-4 max-w-md">
          {dict.errorPage.body}
        </Text>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => retry()}>{dict.errorPage.tryAgain}</Button>
          <NextLink
            href={`/${locale}`}
            className={buttonStyles({ variant: "secondary" })}
          >
            {dict.errorPage.backHome}
          </NextLink>
        </div>
      </Container>
    </main>
  );
}
