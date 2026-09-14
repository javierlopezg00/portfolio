export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How long does a project take?",
    answer:
      "A focused marketing website typically takes 2–4 weeks. Web applications and custom software vary more — usually 6–12 weeks depending on scope. Timeline is one of the questions in the project configurator above, so estimates stay grounded in what you're actually building.",
  },
  {
    question: "What does a project cost?",
    answer:
      "It depends entirely on scope — a landing page and a custom platform aren't priced the same way. The configurator's budget step gives a starting range, and every project gets a proposal with specifics before any work begins.",
  },
  {
    question: "I'm not sure exactly what I need — can we still talk?",
    answer:
      'Yes. "Not sure yet" is one of the options in the project configurator for exactly this reason. Most projects start as a rough idea and get scoped together.',
  },
  {
    question: "Do you only build websites, or full applications too?",
    answer:
      "Both, plus the integrations and automation in between — payments, CRMs, booking systems, admin dashboards. The Interactive Lab and Services sections above show the range concretely rather than just listing it.",
  },
  {
    question: "Is there support after launch?",
    answer:
      "Yes. Launch isn't the finish line — ongoing support and iteration are part of how projects are scoped, not an afterthought bolted on later.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Modern, production-grade tools — Next.js, TypeScript, and Tailwind CSS form the default stack, with the specific integrations (payments, CRM, automation) chosen per project rather than forced into a one-size-fits-all template.",
  },
];
