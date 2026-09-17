import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { CheckIcon } from "@/components/illustrations/icons";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { SkipLink } from "@/components/layout/SkipLink";
import { CaseStudyApproach } from "@/components/sections/work/CaseStudyApproach";
import { CaseStudyCTA } from "@/components/sections/work/CaseStudyCTA";
import { CaseStudyHeader } from "@/components/sections/work/CaseStudyHeader";
import { ClinicPreview } from "@/components/sections/work/previews";
import { ClinicShowcase } from "@/components/work/clinic/ClinicShowcase";
import { Container, Heading, Section, Text } from "@/components/ui";
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
// so it never adds to the weight of a visitor who never scrolls to it.
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

// Meridian is the site's strongest sales demo — a URL to send straight to
// a doctor or clinic owner. It's a full walk through the clinic site
// (services, doctors, phone experience, location, live booking flow)
// with fictional data only, and no medical information collected.
export default async function ClinicCaseStudyPage({ params }: ClinicPageProps) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dict = getDictionary(resolvedLocale);
  const project = dict.work.projects.find((p) => p.id === "clinic");
  if (!project) notFound();

  const show = dict.work.clinicShowcase;
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
        <CaseStudyHeader
          locale={resolvedLocale}
          dict={dict}
          project={project}
          preview={<ClinicPreview content={dict.work.previewContent.clinic} />}
        >
          <Text size="lg" className="mt-4 font-medium">
            {show.tagline}
          </Text>
          <ul className="mt-6 flex flex-wrap gap-2">
            {show.highlights.map((item) => (
              <li
                key={item}
                className="border-border bg-surface text-body-sm text-text flex items-center gap-2 rounded-full border py-1.5 pr-4 pl-2.5"
              >
                <CheckIcon className="text-accent" width={16} height={16} />
                {item}
              </li>
            ))}
          </ul>
        </CaseStudyHeader>

        <ClinicShowcase dict={dict} />

        <Section theme="soft" ariaLabelledBy="book-heading" id="book">
          <Container>
            <div className="max-w-xl">
              <Heading id="book-heading" size="h2">
                {cb.heading}
              </Heading>
              <Text tone="secondary" size="lg" className="mt-4">
                {cb.subhead}
              </Text>
            </div>
            <div className="mt-10 max-w-2xl">
              <ClinicBookingFlow />
            </div>

            <div className="mt-16 max-w-2xl">
              <Heading size="h3" as="h2">
                {show.trustHeading}
              </Heading>
              <ul className="mt-6 flex flex-col gap-3">
                {show.trustPoints.map((point) => (
                  <li key={point} className="text-text flex items-start gap-3">
                    <span className="bg-success/15 text-success mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon width={13} height={13} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        <CaseStudyApproach dict={dict} projectId="clinic" />

        <CaseStudyCTA />
      </main>
      <Footer />
    </>
  );
}
