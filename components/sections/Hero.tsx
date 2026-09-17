import NextLink from "next/link";
import {
  Container,
  Heading,
  Section,
  Text,
  buttonStyles,
} from "@/components/ui";
import { StartProjectLink } from "@/components/layout/StartProjectLink";
import {
  getServerDictionary,
  getServerLocale,
} from "@/lib/i18n/getServerDictionary";
import { HeroShowcase } from "./hero/HeroShowcase";

export async function Hero() {
  const locale = await getServerLocale();
  const dict = await getServerDictionary();

  return (
    <Section
      id="hero"
      ariaLabelledBy="hero-heading"
      className="overflow-hidden pt-10 pb-8 sm:pt-16 sm:pb-12 lg:pt-20"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,11fr)_minmax(0,10fr)] lg:gap-12">
          <div className="animate-fade-up flex max-w-xl flex-col items-start">
            <Heading id="hero-heading" size="display">
              {dict.hero.heading}
            </Heading>
            <Text tone="secondary" size="lg" className="mt-6 max-w-lg">
              {dict.hero.subhead}
            </Text>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <StartProjectLink className={buttonStyles({ size: "lg" })}>
                {dict.hero.ctaPrimary}
              </StartProjectLink>
              <NextLink
                href={`/${locale}#work`}
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                {dict.hero.ctaSecondary}
              </NextLink>
            </div>
            <Text tone="secondary" size="sm" className="mt-6">
              {dict.hero.audience}
            </Text>
          </div>

          {/* Extra top/bottom room so the floating chip and phone that
              overhang the browser frame never clip. */}
          <div className="px-2 pt-6 pb-14 sm:px-10 sm:pb-20">
            <HeroShowcase content={dict.hero.showcase} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
