export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "websites",
    title: "Websites",
    description: "Marketing sites and storefronts built to convert.",
    items: [
      "Landing pages",
      "Business websites",
      "Corporate websites",
      "E-commerce",
    ],
  },
  {
    id: "web-apps",
    title: "Web Applications",
    description: "Real software your team and customers use daily.",
    items: [
      "Dashboards",
      "Booking systems",
      "Customer portals",
      "Internal tools",
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connecting the tools your business already runs on.",
    items: ["Payments", "APIs", "CRM", "Email & WhatsApp"],
  },
  {
    id: "custom",
    title: "Custom Software",
    description: "For requirements that don't fit a standard category.",
    items: ["Architecture & scoping", "Bespoke builds", "Ongoing partnership"],
  },
];
