// Scaffolding for possible future vertical-specific landing pages (e.g.
// /verticals/[slug]) — not wired to any route yet. Kept here only so the
// shape exists when that work is actually scoped, per the standing "don't
// introduce unnecessary complexity immediately" constraint.
export const VERTICAL_SLUGS = [
  "healthcare",
  "hospitality",
  "professional-services",
] as const;

export type VerticalSlug = (typeof VERTICAL_SLUGS)[number];

export interface Vertical {
  slug: VerticalSlug;
  label: string;
}
