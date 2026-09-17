import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { SkipLink } from "@/components/layout/SkipLink";
import { Container, Heading, Section, Text } from "@/components/ui";
import { CaseStudyStory } from "@/components/sections/work/CaseStudyStory";
import { CaseStudyCTA } from "@/components/sections/work/CaseStudyCTA";
import { CaseStudyHeader } from "@/components/sections/work/CaseStudyHeader";
import {
  ConsultingPreview,
  RestaurantPreview,
} from "@/components/sections/work/previews";
import { LeadQualificationDemo } from "@/components/work/consulting/LeadQualificationDemo";
import { ReservationDemo } from "@/components/work/restaurant/ReservationDemo";
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

  const preview =
    resolved.id === "restaurant" ? (
      <RestaurantPreview content={dict.work.previewContent.restaurant} />
    ) : (
      <ConsultingPreview content={dict.work.previewContent.consulting} />
    );

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
        <CaseStudyHeader
          locale={resolved.locale}
          dict={dict}
          project={project}
          preview={preview}
        />

        <CaseStudyStory
          dict={dict}
          projectId={resolved.id}
          demoHighlight={
            resolved.id === "restaurant"
              ? {
                  title: dict.work.reservationDemo.heading,
                  description: dict.work.reservationDemo.subhead,
                  href: "#reservation-demo",
                }
              : {
                  title: dict.work.leadQualificationDemo.heading,
                  description: dict.work.leadQualificationDemo.subhead,
                  href: "#lead-qualification-demo",
                }
          }
        />

        {resolved.id === "restaurant" && (
          <Section
            ariaLabelledBy="reservation-demo-heading"
            id="reservation-demo"
          >
            <Container>
              <div className="max-w-xl">
                <Heading id="reservation-demo-heading" size="h2">
                  {dict.work.reservationDemo.heading}
                </Heading>
                <Text tone="secondary" size="lg" className="mt-4">
                  {dict.work.reservationDemo.subhead}
                </Text>
              </div>
              <div className="mt-10 max-w-2xl">
                <ReservationDemo />
              </div>
            </Container>
          </Section>
        )}

        {resolved.id === "consulting" && (
          <Section
            ariaLabelledBy="lead-qualification-demo-heading"
            id="lead-qualification-demo"
          >
            <Container>
              <div className="max-w-xl">
                <Heading id="lead-qualification-demo-heading" size="h2">
                  {dict.work.leadQualificationDemo.heading}
                </Heading>
                <Text tone="secondary" size="lg" className="mt-4">
                  {dict.work.leadQualificationDemo.subhead}
                </Text>
              </div>
              <div className="mt-10 max-w-2xl">
                <LeadQualificationDemo />
              </div>
            </Container>
          </Section>
        )}

        <CaseStudyCTA />
      </main>
      <Footer />
    </>
  );
}
