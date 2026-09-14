export interface EvolutionStage {
  id: string;
  title: string;
  description: string;
}

export const evolutionStages: EvolutionStage[] = [
  {
    id: "landing",
    title: "Simple Website",
    description: "A clean landing page — one message, one action.",
  },
  {
    id: "business",
    title: "Business Website",
    description: "Navigation, services, and real content take shape.",
  },
  {
    id: "app",
    title: "Web Application",
    description: "The interface becomes a real, working application.",
  },
  {
    id: "connected",
    title: "Connected Platform",
    description: "Payments, data, and automation connect to it.",
  },
  {
    id: "custom",
    title: "Custom Software",
    description: "Whatever your business needs.",
  },
];
