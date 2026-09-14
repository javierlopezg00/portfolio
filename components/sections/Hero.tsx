import NextLink from "next/link";
import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { primaryCtaHref } from "@/lib/content/nav";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { HeroVisualization } from "./hero/HeroVisualization";
import { ScrollCue } from "./hero/ScrollCue";

export async function Hero() {
  const dict = await getServerDictionary();

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
            {dict.hero.heading}
          </Heading>
          <Text size="lg" tone="secondary" className="mt-6 max-w-lg">
            {dict.hero.subhead}
          </Text>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <NextLink
              href={primaryCtaHref}
              className={buttonStyles({ size: "lg" })}
            >
              {dict.hero.ctaPrimary}
            </NextLink>
            <NextLink
              href="#services"
              className={buttonStyles({ variant: "ghost", size: "lg" })}
            >
              {dict.hero.ctaExplore}
            </NextLink>
          </div>
        </div>
      </Container>
      <ScrollCue />
    </Section>
  );
}
