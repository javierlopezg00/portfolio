import type { Metadata } from "next";
import NextLink from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { SkipLink } from "@/components/layout/SkipLink";
import { LabTabs } from "@/components/sections/lab/LabTabs";
import { CaseStudyCTA } from "@/components/sections/work/CaseStudyCTA";
import { Container, Heading, Section, Text } from "@/components/ui";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n/getDictionary";

interface LabPageProps {
  params: Promise<{ locale: string }>;
}

function resolveLocale(locale: string): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LabPageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dict = getDictionary(resolvedLocale);
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}/lab`]));

  return {
    title: dict.seo.labTitle,
    description: dict.seo.labDescription,
    alternates: { canonical: `/${resolvedLocale}/lab`, languages },
    openGraph: {
      title: dict.seo.labTitle,
      description: dict.seo.labDescription,
      url: `/${resolvedLocale}/lab`,
    },
  };
}

// The Interactive Lab used to be a homepage section. It's its own route
// now so the homepage stays short and customer-facing — anyone who lands
// here chose to, so the demos can afford to be a little more technical.
export default async function LabPage({ params }: LabPageProps) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dict = getDictionary(resolvedLocale);

  return (
    <>
      <SkipLink />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Section
          id="lab"
          ariaLabelledBy="lab-heading"
          className="pt-10 sm:pt-16"
        >
          <Container>
            <NextLink
              href={`/${resolvedLocale}`}
              className="text-body-sm text-text-secondary hover:text-text rounded-sm"
            >
              ← {dict.lab.backHome}
            </NextLink>
            <div className="mt-6 max-w-2xl">
              <Heading id="lab-heading" size="h1">
                {dict.lab.heading}
              </Heading>
              <Text tone="secondary" size="lg" className="mt-4">
                {dict.lab.subhead}
              </Text>
            </div>
            <div className="mt-10">
              <LabTabs />
            </div>
          </Container>
        </Section>
        <CaseStudyCTA />
      </main>
      <Footer />
    </>
  );
}
