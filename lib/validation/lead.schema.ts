import { z } from "zod";

// One schema, two jobs: per-step client validation (inline errors) and
// server-side re-validation in the route handler. Never trust client-only
// validation for a lead form.
export const leadSchema = z.object({
  projectType: z.string().min(1, "Select an option to continue"),
  needs: z.array(z.string()).min(1, "Select at least one"),
  budget: z.string().min(1, "Select a budget range"),
  timeline: z.string().min(1, "Select a timeline"),
  name: z.string().trim().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.email("Enter a valid email address"),
  whatsapp: z.string().optional(),
  // Honeypot — real users never see or fill this field. Deliberately
  // unconstrained here: a length cap would make Zod reject a bot-filled
  // value with a visible 400, teaching the bot the field is a trap. The
  // route handler checks it instead and pretends success either way.
  honeypot: z.string().optional(),
});

export type LeadPayload = z.infer<typeof leadSchema>;

export const stepSchemas = {
  projectType: leadSchema.pick({ projectType: true }),
  needs: leadSchema.pick({ needs: true }),
  budget: leadSchema.pick({ budget: true }),
  timeline: leadSchema.pick({ timeline: true }),
  contact: leadSchema.pick({ name: true, email: true }),
} as const;

export type StepKey = keyof typeof stepSchemas;
