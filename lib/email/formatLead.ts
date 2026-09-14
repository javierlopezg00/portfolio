import type { ConfiguratorOptionText } from "@/lib/i18n/dictionary";
import { en } from "@/lib/i18n/en";
import type { LeadPayload } from "@/lib/validation/lead.schema";

// This email goes to the business owner, not the visitor, so it stays in
// English regardless of which locale the lead actually submitted in —
// intentionally importing the fixed `en` dictionary here rather than
// getDictionary(locale).
const { projectType, needs, budget, timeline } = en.configurator.options;

function labelFor(options: ConfiguratorOptionText[], id: string): string {
  return options.find((o) => o.id === id)?.label ?? id;
}

export function formatLeadEmail(lead: LeadPayload): string {
  return [
    "New project inquiry",
    "",
    `Project type: ${labelFor(projectType, lead.projectType)}`,
    `Needs: ${lead.needs.map((id) => labelFor(needs, id)).join(", ")}`,
    `Budget: ${labelFor(budget, lead.budget)}`,
    `Timeline: ${labelFor(timeline, lead.timeline)}`,
    "",
    `Name: ${lead.name}`,
    `Company: ${lead.company || "—"}`,
    `Email: ${lead.email}`,
    `WhatsApp: ${lead.whatsapp || "—"}`,
  ].join("\n");
}
