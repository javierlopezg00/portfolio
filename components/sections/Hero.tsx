import NextLink from "next/link";
import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { ConfiguratorCtaLink } from "@/components/layout/ConfiguratorCtaLink";
import { getServerDictionary } from "@/lib/i18n/getServerDictionary";
import { heroEdges, heroNodes, heroNodesMobile } from "./hero/graph";
import { HeroVisualization } from "./hero/HeroVisualization";
import { ScrollCue } from "./hero/ScrollCue";

export async function Hero() {
  const dict = await getServerDictionary();

  return (
    <Section
      id="hero"
      ariaLabelledBy="hero-heading"
      className="relative overflow-hidden pt-36 pb-72 sm:pt-44 sm:pb-80 lg:pb-28"
    >
      <HeroVisualization
        nodes={heroNodes}
        edges={heroEdges}
        className="absolute inset-0 hidden lg:block"
      />
      {/* Below `lg` the copy stacks full-width over the graph instead of
          beside it, so this instance renders dimmer and weighted toward
          the lower half (see heroNodesMobile) — still full-bleed and
          always-present like the desktop version, not a separate block. */}
      <HeroVisualization
        nodes={heroNodesMobile}
        edges={heroEdges}
        className="pointer-events-none absolute inset-0 opacity-90 lg:hidden"
      />
      {/* Scrim: solid through the copy (which ends around 64% down, see
          heroNodesMobile's comment), then clears just past it so the graph
          reads at full strength in its own dedicated space below the CTAs. */}
      <div
        aria-hidden="true"
        className="from-background via-background pointer-events-none absolute inset-0 bg-gradient-to-b from-0% via-62% to-transparent to-72% lg:hidden"
      />
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
            <ConfiguratorCtaLink className={buttonStyles({ size: "lg" })}>
              {dict.hero.ctaPrimary}
            </ConfiguratorCtaLink>
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
