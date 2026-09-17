import NextLink from "next/link";
import { ArrowRightIcon } from "@/components/illustrations/icons";
import { BrandMotif } from "@/components/illustrations/BrandMotif";
import { StartProjectLink } from "@/components/layout/StartProjectLink";
import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import {
  getServerDictionary,
  getServerLocale,
} from "@/lib/i18n/getServerDictionary";
import { HeroShowcase } from "./hero/HeroShowcase";
import { AccentWord } from "./hero/AccentWord";

export async function Hero() {
  const locale = await getServerLocale();
  const dict = await getServerDictionary();
  const { lead, accent, tail } = dict.hero.heading;
  // Keep any punctuation that immediately follows the accented word on
  // the same line as it: otherwise the headline can wrap to leave a
  // lone "." on the next line, which looks broken and splits the
  // heading's accessible name across a line break.
  const [, tailStuck = "", tailRest = ""] = /^(\S*)([\s\S]*)$/.exec(tail) ?? [];

  return (
    <Section
      theme="sand"
      id="hero"
      ariaLabelledBy="hero-heading"
      // The composition deliberately overflows its column on the right,
      // so the section clips rather than the page scrolling sideways.
      className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-16 lg:pb-24"
    >
      {/* Warm wash behind the interface cluster: it lifts the mockups off
          the sand ground without drawing a box around them. */}
      <div
        aria-hidden="true"
        className="from-warm-soft pointer-events-none absolute top-[-10%] right-[-15%] hidden h-[130%] w-[70%] rounded-full bg-radial to-transparent to-70% opacity-70 blur-2xl lg:block"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,10fr)_minmax(0,11fr)] lg:gap-10">
          <div className="animate-fade-up flex max-w-2xl flex-col items-start">
            <Heading id="hero-heading" size="display" className="text-balance">
              {lead}
              <span className="whitespace-nowrap">
                <AccentWord>{accent}</AccentWord>
                {tailStuck}
              </span>
              {tailRest}
            </Heading>

            <Text
              tone="secondary"
              size="lg"
              className="mt-7 max-w-md text-pretty"
            >
              {dict.hero.subhead}
            </Text>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <StartProjectLink
                className={buttonStyles({ size: "lg", className: "group" })}
              >
                {dict.hero.ctaPrimary}
                <ArrowRightIcon
                  width={18}
                  height={18}
                  className="duration-fast transition-transform ease-out group-hover:translate-x-1"
                />
              </StartProjectLink>
              <NextLink
                href={`/${locale}#work`}
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                {dict.hero.ctaSecondary}
              </NextLink>
            </div>

            {/* The audience line reads as a caption under the CTAs, set
                against a short amber rule rather than as another
                paragraph of body copy. */}
            <p className="text-body-sm text-text-secondary mt-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="bg-warm h-px w-8 shrink-0 sm:w-12"
              />
              {dict.hero.audience}
            </p>
          </div>

          {/* Extra room on every side: the phone, the chip and the
              dashboard fragment all hang outside the browser frame. */}
          <div className="relative px-2 pt-10 pb-24 sm:px-8 sm:pb-28 lg:-mr-20 lg:px-0 lg:pb-24 xl:-mr-28">
            <BrandMotif
              corner="tl"
              className="absolute -top-2 -left-2 h-20 w-20 opacity-70 sm:h-28 sm:w-28 lg:-top-6 lg:-left-10"
            />
            <HeroShowcase content={dict.hero.showcase} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
