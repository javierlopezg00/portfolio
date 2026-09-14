import type { Metadata } from "next";
import NextLink from "next/link";
import { buttonStyles, Container, Heading, Text } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main>
      <Container className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="text-accent mb-4 font-mono text-sm tracking-wide uppercase">
          404
        </p>
        <Heading size="display" className="max-w-xl">
          This page doesn&apos;t exist.
        </Heading>
        <Text tone="secondary" size="lg" className="mt-4 max-w-md">
          The page you&apos;re looking for was moved, renamed, or never existed.
        </Text>
        <NextLink href="/" className={buttonStyles({ className: "mt-8" })}>
          Back to home
        </NextLink>
      </Container>
    </main>
  );
}
