import type { ReactNode } from "react";
import { CheckIcon } from "@/components/illustrations/icons";
import { Container, Grid, Heading, Section, Text } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { ResultsMetrics } from "./ResultsMetrics";
import { Testimonial } from "./Testimonial";

interface CaseStudyStoryProps {
  dict: Dictionary;
  projectId: string;
  /** Rendered inside Key Features as a card pointing at this page's own
   * live demo (booking, reservations, inquiry flow). */
  demoHighlight?: { title: string; description: string; href: string };
  children?: ReactNode;
}

// The body of every case study, in the order a business owner reads it:
// what the business needed, what its customers can do, the features that
// matter to them, and why it's shaped that way. Implementation notes come
// last and stay collapsed — available to anyone who looks for them,
// invisible to everyone else.
export function CaseStudyStory({
  dict,
  projectId,
  demoHighlight,
}: CaseStudyStoryProps) {
  const study = dict.work.caseStudies[projectId];
  const results = dict.work.caseStudyResults[projectId];
  if (!study) return null;
  const cs = dict.work.caseStudy;

  return (
    <>
      <Section theme="muted" ariaLabelledBy="goal-heading" id="goal">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <Heading id="goal-heading" size="h2">
                {cs.goalHeading}
              </Heading>
              <Text tone="secondary" size="lg" className="mt-4">
                {study.goal}
              </Text>
            </div>
            <div>
              <Heading size="h2" as="h2">
                {cs.experienceHeading}
              </Heading>
              <Text tone="secondary" size="lg" className="mt-4">
                {study.experience}
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section ariaLabelledBy="features-heading" id="features">
        <Container>
          <Heading id="features-heading" size="h2">
            {cs.featuresHeading}
          </Heading>
          <Grid className="mt-10 grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {study.features.map((feature) => (
              <div
                key={feature.title}
                className="border-border bg-surface rounded-xl border p-6 shadow-sm"
              >
                <span className="bg-accent-soft text-accent flex h-9 w-9 items-center justify-center rounded-full">
                  <CheckIcon width={16} height={16} />
                </span>
                <Heading size="h4" as="h3" className="mt-4">
                  {feature.title}
                </Heading>
                <Text tone="secondary" className="mt-2">
                  {feature.description}
                </Text>
              </div>
            ))}

            {demoHighlight && (
              <a
                href={demoHighlight.href}
                className="group border-accent/40 bg-accent-soft/50 duration-base hover:border-accent rounded-xl border p-6 shadow-sm transition-[border-color,box-shadow] ease-out hover:shadow-md sm:col-span-2"
              >
                <span className="text-accent text-caption font-semibold tracking-wide uppercase">
                  {cs.tryItLabel}
                </span>
                <Heading size="h4" as="h3" className="mt-2">
                  {demoHighlight.title}
                </Heading>
                <Text tone="secondary" className="mt-2">
                  {demoHighlight.description}
                </Text>
              </a>
            )}
          </Grid>
        </Container>
      </Section>

      <Section theme="muted" ariaLabelledBy="decisions-heading" id="decisions">
        <Container>
          <Heading id="decisions-heading" size="h2">
            {cs.decisionsHeading}
          </Heading>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {study.decisions.map((decision) => (
              <div
                key={decision.title}
                className="border-accent border-l-2 pl-5"
              >
                <Heading size="h4" as="h3">
                  {decision.title}
                </Heading>
                <Text tone="secondary" className="mt-2">
                  {decision.description}
                </Text>
              </div>
            ))}
          </div>

          {results?.results && results.results.length > 0 && (
            <div className="mt-16 max-w-2xl">
              <Heading size="h3" as="h2">
                {cs.resultsHeading}
              </Heading>
              <div className="mt-8">
                <ResultsMetrics results={results.results} />
              </div>
            </div>
          )}

          {results?.testimonial && (
            <div className="mt-16 max-w-2xl">
              <Testimonial {...results.testimonial} />
            </div>
          )}

          {/* Secondary by construction: the engineering notes are the only
              place implementation vocabulary appears, and they stay closed
              until someone asks for them. <details> gives that for free,
              keyboard-operable and announced, with no JavaScript. */}
          <details className="group border-border bg-surface mt-16 max-w-3xl rounded-xl border shadow-sm">
            <summary className="text-body text-text flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-medium [&::-webkit-details-marker]:hidden">
              <span>
                {cs.technicalHeading}
                <Text
                  tone="secondary"
                  size="sm"
                  as="span"
                  className="mt-0.5 block"
                >
                  {cs.technicalNote}
                </Text>
              </span>
              <ChevronIcon className="text-text-secondary duration-fast shrink-0 transition-transform ease-out group-open:rotate-180" />
            </summary>
            <div className="flex flex-col gap-6 px-5 pt-1 pb-6">
              {study.technical.map((item) => (
                <div key={item.title}>
                  <Heading size="h4" as="h3">
                    {item.title}
                  </Heading>
                  <Text tone="secondary" size="sm" className="mt-1">
                    {item.description}
                  </Text>
                </div>
              ))}
            </div>
          </details>
        </Container>
      </Section>
    </>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={18}
      height={18}
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
