export interface Principle {
  title: string;
  description: string;
}

export const aboutContent = {
  heading: "One person, full-stack.",
  body: [
    "This site is built and maintained by a single developer — not a large agency, and not a no-code template. Every project gets direct, hands-on engineering from start to finish.",
    "The same tools and techniques shown throughout this site — modern React, careful performance work, real accessibility — are what get used on client projects too.",
  ],
  principles: [
    {
      title: "Direct communication",
      description:
        "You talk to the person actually building it — no account managers, no hand-offs.",
    },
    {
      title: "Modern engineering",
      description:
        "The same stack demonstrated across this site: Next.js, TypeScript, and production-grade tooling.",
    },
    {
      title: "Built to last",
      description:
        "Maintainable code and clear structure, not just something that works on launch day.",
    },
  ] satisfies Principle[],
};
