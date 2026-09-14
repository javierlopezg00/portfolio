export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "A short project brief — goals, requirements, and constraints — before any design work starts.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "The experience and system get mapped out, so structure is decided before code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Engineered in the open — you see progress as it happens, not just at the end.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      'Shipped, measured, and maintained — software is never really "done" at launch.',
  },
];
