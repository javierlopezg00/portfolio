export interface ConfiguratorOption {
  id: string;
  label: string;
}

export const projectTypeOptions: ConfiguratorOption[] = [
  { id: "website", label: "Website" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "web-app", label: "Web application" },
  { id: "custom-software", label: "Custom software" },
  { id: "not-sure", label: "Not sure yet" },
];

export const needsOptions: ConfiguratorOption[] = [
  { id: "bookings", label: "Online bookings" },
  { id: "payments", label: "Payments" },
  { id: "accounts", label: "Customer accounts" },
  { id: "dashboard", label: "Admin dashboard" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "crm", label: "CRM integration" },
  { id: "api", label: "API integrations" },
  { id: "analytics", label: "Analytics" },
  { id: "automation", label: "Automation" },
  { id: "other", label: "Something else" },
];

// Budget/timeline brackets live here as data, not hardcoded into the
// component or validation logic — changing a bracket is a content edit.
export const budgetOptions: ConfiguratorOption[] = [
  { id: "3-5k", label: "$3k – $5k" },
  { id: "5-10k", label: "$5k – $10k" },
  { id: "10-25k", label: "$10k – $25k" },
  { id: "25k-plus", label: "$25k+" },
];

export const timelineOptions: ConfiguratorOption[] = [
  { id: "asap", label: "As soon as possible" },
  { id: "1-2-months", label: "1–2 months" },
  { id: "3-6-months", label: "3–6 months" },
  { id: "flexible", label: "Flexible / not sure" },
];
