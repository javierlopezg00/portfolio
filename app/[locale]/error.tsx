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
import { useLocale } from "@/lib/i18n/useLocale";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const locale = useLocale();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <Container className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="text-accent mb-4 font-mono text-sm tracking-wide uppercase">
          Error
        </p>
        <Heading size="display" className="max-w-xl">
          Something went wrong.
        </Heading>
        <Text tone="secondary" size="lg" className="mt-4 max-w-md">
          An unexpected error occurred. You can try again, or head back to the
          homepage.
        </Text>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => retry()}>Try again</Button>
          <NextLink
            href={`/${locale}`}
            className={buttonStyles({ variant: "secondary" })}
          >
            Back to home
          </NextLink>
        </div>
      </Container>
    </main>
  );
}
