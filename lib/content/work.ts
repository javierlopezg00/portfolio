export interface WorkProject {
  id: string;
  name: string;
  vertical: string;
  description: string;
  tags: string[];
}

// The site's current conceptual case studies — drives /work/[id]'s
// generateStaticParams and validates the route's dynamic segment.
export const WORK_PROJECT_IDS = ["clinic", "restaurant", "consulting"] as const;
export type WorkProjectId = (typeof WORK_PROJECT_IDS)[number];

export interface CaseStudyApproachPoint {
  title: string;
  description: string;
}

// Optional fields for a future real case study — unused by today's
// conceptual projects. Rendered only when actually populated, never behind
// a boolean flag, since that's a stronger guarantee against ever shipping
// fabricated testimonials or results.
export interface CaseStudyContent {
  approach: CaseStudyApproachPoint[];
  testimonial?: { quote: string; author: string; role: string };
  results?: { label: string; value: string }[];
}
