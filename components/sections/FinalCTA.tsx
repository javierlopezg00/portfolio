import NextLink from "next/link";
import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { primaryCtaHref } from "@/lib/content/nav";

export function FinalCTA() {
  return (
    <Section id="contact" ariaLabelledBy="final-cta-heading">
      <Container className="max-w-2xl text-center">
        <Heading id="final-cta-heading" size="display">
          Ready to build something?
        </Heading>
        <Text tone="secondary" size="lg" className="mx-auto mt-6 max-w-lg">
          Tell us what you&apos;re working on — the project configurator takes
          about two minutes.
        </Text>
        <div className="mt-10 flex justify-center">
          <NextLink
            href={primaryCtaHref}
            className={buttonStyles({ size: "lg" })}
          >
            Start a Project
          </NextLink>
        </div>
      </Container>
    </Section>
  );
}
