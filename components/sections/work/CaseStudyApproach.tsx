import { CheckIcon } from "@/components/illustrations/icons";
import { Container, Grid, Heading, Section, Text } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { ResultsMetrics } from "./ResultsMetrics";
import { Testimonial } from "./Testimonial";

interface CaseStudyApproachProps {
  dict: Dictionary;
  projectId: string;
}

// "What makes it work": three plain-language points per project, plus
// real results/testimonials when (and only when) they exist — see the
// caseStudyResults comment in dictionary.ts.
export function CaseStudyApproach({ dict, projectId }: CaseStudyApproachProps) {
  const approach = dict.work.caseStudies[projectId] ?? [];
  const results = dict.work.caseStudyResults[projectId];
  if (approach.length === 0 && !results) return null;

  return (
    <Section theme="soft" ariaLabelledBy="approach-heading" id="approach">
      <Container>
        <Heading id="approach-heading" size="h2">
          {dict.work.caseStudy.approachHeading}
        </Heading>
        <Grid className="mt-10 grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {approach.map((point) => (
            <div
              key={point.title}
              className="border-border bg-surface rounded-xl border p-6 shadow-sm"
            >
              <span className="bg-accent-soft text-accent flex h-9 w-9 items-center justify-center rounded-full">
                <CheckIcon width={16} height={16} />
              </span>
              <Heading size="h4" as="h3" className="mt-4">
                {point.title}
              </Heading>
              <Text tone="secondary" className="mt-2">
                {point.description}
              </Text>
            </div>
          ))}
        </Grid>

        {results?.results && results.results.length > 0 && (
          <div className="mt-16 max-w-2xl">
            <Heading size="h3">{dict.work.caseStudy.resultsHeading}</Heading>
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
      </Container>
    </Section>
  );
}
