import { Grid, Text } from "@/components/ui";

interface ResultsMetricsProps {
  results: { label: string; value: string }[];
}

// Rendered only by callers that already checked real result data exists
// for a project (see dict.work.caseStudyResults) — never given placeholder
// numbers itself, so there's no fabricated metric to accidentally ship.
export function ResultsMetrics({ results }: ResultsMetricsProps) {
  return (
    <Grid className="grid-cols-2 sm:grid-cols-4">
      {results.map((result) => (
        <div
          key={result.label}
          className="border-border bg-surface rounded-md border p-4"
        >
          <Text size="sm" tone="secondary">
            {result.label}
          </Text>
          <Text size="lg" className="mt-1 font-semibold">
            {result.value}
          </Text>
        </div>
      ))}
    </Grid>
  );
}
