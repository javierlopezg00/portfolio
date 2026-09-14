import NextLink from "next/link";
import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { primaryCtaHref } from "@/lib/content/nav";
import { HeroVisualization } from "./hero/HeroVisualization";
import { ScrollCue } from "./hero/ScrollCue";

export function Hero() {
  return (
    <Section
      id="hero"
      ariaLabelledBy="hero-heading"
      className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <HeroVisualization />
      {/* Container is full-width (for centering) but the copy inside it
          isn't — pointer-events-none lets the empty space beside the text
          pass pointer events through to the canvas underneath, while the
          text/CTA block re-enables them for itself. */}
      <Container className="pointer-events-none relative z-10">
        <div className="pointer-events-auto max-w-2xl">
          <Heading id="hero-heading" size="display">
            We build digital experiences that work.
          </Heading>
          <Text size="lg" tone="secondary" className="mt-6 max-w-lg">
            Websites · Web Apps · Software · Automation
          </Text>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <NextLink
              href={primaryCtaHref}
              className={buttonStyles({ size: "lg" })}
            >
              Start a Project
            </NextLink>
            <NextLink
              href="#services"
              className={buttonStyles({ variant: "ghost", size: "lg" })}
            >
              Explore
            </NextLink>
          </div>
        </div>
      </Container>
      <ScrollCue />
    </Section>
  );
}
