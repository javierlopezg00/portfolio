import { z } from "zod";

export interface LeadValidationMessages {
  projectTypeRequired: string;
  needsRequired: string;
  budgetRequired: string;
  timelineRequired: string;
  nameRequired: string;
  emailInvalid: string;
}

// One schema, two jobs: per-step client validation (inline errors) and
// server-side re-validation in the route handler. Never trust client-only
// validation for a lead form. A factory rather than a fixed schema because
// the messages are locale-dependent, and every message here is already a
// custom override — Zod's built-in locale packs only fire for messages
// you *haven't* overridden, so they'd never apply to this schema anyway.
export function createLeadSchema(m: LeadValidationMessages) {
  return z.object({
    projectType: z.string().min(1, m.projectTypeRequired),
    needs: z.array(z.string()).min(1, m.needsRequired),
    budget: z.string().min(1, m.budgetRequired),
    timeline: z.string().min(1, m.timelineRequired),
    name: z.string().trim().min(1, m.nameRequired),
    company: z.string().optional(),
    email: z.email(m.emailInvalid),
    whatsapp: z.string().optional(),
    // Honeypot — real users never see or fill this field. Deliberately
    // unconstrained here: a length cap would make Zod reject a bot-filled
    // value with a visible 400, teaching the bot the field is a trap. The
    // route handler checks it instead and pretends success either way.
    honeypot: z.string().optional(),
  });
}

export type LeadPayload = z.infer<ReturnType<typeof createLeadSchema>>;

export function createStepSchemas(m: LeadValidationMessages) {
  const leadSchema = createLeadSchema(m);
  return {
    projectType: leadSchema.pick({ projectType: true }),
    needs: leadSchema.pick({ needs: true }),
    budget: leadSchema.pick({ budget: true }),
    timeline: leadSchema.pick({ timeline: true }),
    contact: leadSchema.pick({ name: true, email: true }),
    // Read-only summary step — nothing new to collect, always passes.
    review: z.object({}),
  } as const;
}

export type StepKey = keyof ReturnType<typeof createStepSchemas>;

// Fixed-English instance for the API route's server-side re-validation.
// Its messages are never surfaced to the user — the client only checks
// res.ok on a failed submission (see Configurator.tsx's submit()) — so
// there's no need to plumb a locale into the route handler for this.
const englishMessages: LeadValidationMessages = {
  projectTypeRequired: "Select an option to continue",
  needsRequired: "Select at least one",
  budgetRequired: "Select a budget range",
  timelineRequired: "Select a timeline",
  nameRequired: "Name is required",
  emailInvalid: "Enter a valid email address",
};

export const leadSchema = createLeadSchema(englishMessages);
