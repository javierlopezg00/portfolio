import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { SkipLink } from "@/components/layout/SkipLink";
import { DeviceFrame } from "@/components/sections/work/DeviceFrame";
import { ClinicPreview } from "@/components/sections/work/previews";
import { ResultsMetrics } from "@/components/sections/work/ResultsMetrics";
import { Testimonial } from "@/components/sections/work/Testimonial";
import {
  Badge,
  Container,
  Heading,
  Link,
  Section,
  Text,
} from "@/components/ui";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n/getDictionary";
import { SITE_NAME } from "@/lib/seo/site";
import { getCaseStudyStructuredData } from "@/lib/seo/structuredData";

// The booking flow is meaningfully heavier than the rest of this page
// (its own calendar/slot logic, several steps of state) — code-split it
// the same way the homepage's Lab demos already are, so it never adds to
// the weight of a visitor who never scrolls to it.
const ClinicBookingFlow = dynamic(() =>
  import("@/components/work/clinic/ClinicBookingFlow").then(
    (m) => m.ClinicBookingFlow,
  ),
);

interface ClinicPageProps {
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
}: ClinicPageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dict = getDictionary(resolvedLocale);
  const project = dict.work.projects.find((p) => p.id === "clinic");
  if (!project) return {};

  const languages = Object.fromEntries(
    locales.map((l) => [l, `/${l}/work/clinic`]),
  );

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: `/${resolvedLocale}/work/clinic`,
      languages,
    },
    openGraph: {
      title: `${project.name} — ${SITE_NAME}`,
      description: project.description,
      url: `/${resolvedLocale}/work/clinic`,
    },
  };
}

export default async function ClinicCaseStudyPage({ params }: ClinicPageProps) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dict = getDictionary(resolvedLocale);
  const project = dict.work.projects.find((p) => p.id === "clinic");
  if (!project) notFound();

  const approach = dict.work.caseStudies.clinic ?? [];
  const caseStudyResults = dict.work.caseStudyResults.clinic;
  const cb = dict.work.clinicBooking;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getCaseStudyStructuredData(resolvedLocale, dict, project),
          ),
        }}
      />
      <SkipLink />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Section ariaLabelledBy="case-study-heading" id="overview">
          <Container>
            <Link href={`/${resolvedLocale}#work`} className="text-body-sm">
              ← {dict.work.caseStudy.backToWork}
            </Link>

            <div className="mt-6 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="accent">{dict.work.conceptualProjectBadge}</Badge>
                <Badge>{project.vertical}</Badge>
              </div>
              <Heading id="case-study-heading" size="h1" className="mt-4">
                {project.name}
              </Heading>
              <Text tone="secondary" className="mt-4">
                {project.description}
              </Text>
              <Text tone="secondary" size="sm" className="mt-4 italic">
                {dict.work.caseStudy.conceptualNote}
              </Text>
            </div>

            <div className="mt-12">
              <DeviceFrame mode="desktop">
                <ClinicPreview content={dict.work.previewContent.clinic} />
              </DeviceFrame>
            </div>
          </Container>
        </Section>

        {approach.length > 0 && (
          <Section
            theme="light"
            ariaLabelledBy="approach-heading"
            id="approach"
          >
            <Container>
              <div className="max-w-2xl">
                <Heading id="approach-heading" size="h2">
                  {dict.work.caseStudy.approachHeading}
                </Heading>
                <div className="mt-8 flex flex-col gap-8">
                  {approach.map((point) => (
                    <div key={point.title}>
                      <Heading size="h4" as="h3">
                        {point.title}
                      </Heading>
                      <Text tone="secondary" className="mt-2">
                        {point.description}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>

              {caseStudyResults?.results &&
                caseStudyResults.results.length > 0 && (
                  <div className="mt-16 max-w-2xl">
                    <Heading size="h3">
                      {dict.work.caseStudy.resultsHeading}
                    </Heading>
                    <div className="mt-8">
                      <ResultsMetrics results={caseStudyResults.results} />
                    </div>
                  </div>
                )}

              {caseStudyResults?.testimonial && (
                <div className="mt-16 max-w-2xl">
                  <Testimonial {...caseStudyResults.testimonial} />
                </div>
              )}
            </Container>
          </Section>
        )}

        <Section ariaLabelledBy="book-heading" id="book">
          <Container>
            <div className="max-w-xl">
              <Heading id="book-heading" size="h2">
                {cb.heading}
              </Heading>
              <Text tone="secondary" className="mt-4">
                {cb.subhead}
              </Text>
            </div>
            <div className="mt-10 max-w-2xl">
              <ClinicBookingFlow />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
