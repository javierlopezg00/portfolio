import {
  budgetOptions,
  needsOptions,
  projectTypeOptions,
  timelineOptions,
  type ConfiguratorOption,
} from "@/lib/content/configurator-options";
import type { LeadPayload } from "@/lib/validation/lead.schema";

function labelFor(options: ConfiguratorOption[], id: string): string {
  return options.find((o) => o.id === id)?.label ?? id;
}

export function formatLeadEmail(lead: LeadPayload): string {
  return [
    "New project inquiry",
    "",
    `Project type: ${labelFor(projectTypeOptions, lead.projectType)}`,
    `Needs: ${lead.needs.map((id) => labelFor(needsOptions, id)).join(", ")}`,
    `Budget: ${labelFor(budgetOptions, lead.budget)}`,
    `Timeline: ${labelFor(timelineOptions, lead.timeline)}`,
    "",
    `Name: ${lead.name}`,
    `Company: ${lead.company || "—"}`,
    `Email: ${lead.email}`,
    `WhatsApp: ${lead.whatsapp || "—"}`,
  ].join("\n");
}
