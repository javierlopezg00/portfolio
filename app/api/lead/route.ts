import { Resend } from "resend";
import { formatLeadEmail } from "@/lib/email/formatLead";
import { leadSchema } from "@/lib/validation/lead.schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = leadSchema.safeParse(body);
  if (!result.success) {
    return Response.json(
      { error: "Invalid submission", issues: result.error.flatten() },
      { status: 400 },
    );
  }

  const lead = result.data;

  // Honeypot tripped — pretend success so bots don't learn to avoid it,
  // but never send the email.
  if (lead.honeypot) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !toEmail) {
    // No email provider configured yet — log server-side instead of
    // silently failing, so the full flow stays testable end-to-end
    // before real credentials exist. Swap this for the Resend call
    // below by setting RESEND_API_KEY and LEAD_NOTIFICATION_EMAIL.
    console.info("[lead] Email not configured, logging lead instead:", lead);
    return Response.json({ ok: true });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from:
      process.env.LEAD_FROM_EMAIL ??
      "Project Configurator <onboarding@resend.dev>",
    to: toEmail,
    subject: `New project inquiry from ${lead.name}`,
    text: formatLeadEmail(lead),
  });

  if (error) {
    console.error("[lead] Failed to send email:", error);
    return Response.json({ error: "Failed to send" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
