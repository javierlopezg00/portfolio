import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { SkipLink } from "@/components/layout/SkipLink";
import {
  Badge,
  Container,
  Heading,
  Link,
  Section,
  Text,
} from "@/components/ui";
import { DeviceFrame } from "@/components/sections/work/DeviceFrame";
import {
  ClinicPreview,
  ConsultingPreview,
  RestaurantPreview,
} from "@/components/sections/work/previews";
import { ResultsMetrics } from "@/components/sections/work/ResultsMetrics";
import { Testimonial } from "@/components/sections/work/Testimonial";
import { WORK_PROJECT_IDS, type WorkProjectId } from "@/lib/content/work";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n/getDictionary";
import { SITE_NAME } from "@/lib/seo/site";
import { getCaseStudyStructuredData } from "@/lib/seo/structuredData";

interface CaseStudyPageProps {
  params: Promise<{ locale: string; id: string }>;
}

function resolveParams(locale: string, id: string) {
  const currentLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  if (!WORK_PROJECT_IDS.includes(id as WorkProjectId)) return null;
  return { locale: currentLocale, id: id as WorkProjectId };
}

// "clinic" has its own dedicated route (app/[locale]/work/clinic) that
// Next resolves before this dynamic segment — excluded here so the build
// doesn't also prerender a shadowed duplicate at the same URL.
const GENERIC_CASE_STUDY_IDS = WORK_PROJECT_IDS.filter((id) => id !== "clinic");

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    GENERIC_CASE_STUDY_IDS.map((id) => ({ locale, id })),
  );
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const resolved = resolveParams(locale, id);
  if (!resolved) return {};

  const dict = getDictionary(resolved.locale);
  const project = dict.work.projects.find((p) => p.id === resolved.id);
  if (!project) return {};

  const languages = Object.fromEntries(
    locales.map((l) => [l, `/${l}/work/${resolved.id}`]),
  );

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: `/${resolved.locale}/work/${resolved.id}`,
      languages,
    },
    openGraph: {
      title: `${project.name} — ${SITE_NAME}`,
      description: project.description,
      url: `/${resolved.locale}/work/${resolved.id}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, id } = await params;
  const resolved = resolveParams(locale, id);
  if (!resolved) notFound();

  const dict = getDictionary(resolved.locale);
  const project = dict.work.projects.find((p) => p.id === resolved.id);
  if (!project) notFound();

  const approach = dict.work.caseStudies[resolved.id] ?? [];
  const caseStudyResults = dict.work.caseStudyResults[resolved.id];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getCaseStudyStructuredData(resolved.locale, dict, project),
          ),
        }}
      />
      <SkipLink />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Section ariaLabelledBy="case-study-heading">
          <Container>
            <Link href={`/${resolved.locale}#work`} className="text-body-sm">
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
                {resolved.id === "clinic" && (
                  <ClinicPreview content={dict.work.previewContent.clinic} />
                )}
                {resolved.id === "restaurant" && (
                  <RestaurantPreview
                    content={dict.work.previewContent.restaurant}
                  />
                )}
                {resolved.id === "consulting" && (
                  <ConsultingPreview
                    content={dict.work.previewContent.consulting}
                  />
                )}
              </DeviceFrame>
            </div>

            {approach.length > 0 && (
              <div className="mt-16 max-w-2xl">
                <Heading size="h2">
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
            )}

            {caseStudyResults?.results &&
              caseStudyResults.results.length > 0 && (
                <div className="mt-16 max-w-2xl">
                  <Heading size="h2">
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
      </main>
      <Footer />
    </>
  );
}
