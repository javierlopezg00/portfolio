import { Text } from "@/components/ui";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

// Rendered only by callers that already checked real testimonial data
// exists for a project (see dict.work.caseStudyResults) — never given
// placeholder content itself, so there's no fabricated quote to
// accidentally ship.
export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <blockquote className="border-accent/30 border-l-2 pl-6">
      <Text size="lg" className="italic">
        “{quote}”
      </Text>
      <footer className="mt-4">
        <Text size="sm" className="font-medium">
          {author}
        </Text>
        <Text size="sm" tone="secondary">
          {role}
        </Text>
      </footer>
    </blockquote>
  );
}
