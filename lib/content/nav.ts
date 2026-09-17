// Anchor for every "Start a Project" CTA site-wide — the homepage's
// contact section, which holds both the quick-contact options and the
// quote configurator. A locale-agnostic in-page fragment, not
// translatable text; components prefix the locale so it resolves from
// any route (case studies, the lab), not just the homepage.
export const primaryCtaHref = "#contact";

export const contactEmail = "javierlopezguzman00@gmail.com";

// Low-friction alternative to the configurator — a plain mailto:, no
// backend, same inbox that LEAD_NOTIFICATION_EMAIL delivers leads to.
export const secondaryContactHref = `mailto:${contactEmail}`;

// WhatsApp number in international format, digits only (e.g. 50212345678).
// NEXT_PUBLIC_ so it's inlined at build time and usable from Client
// Components too. Left unset, every WhatsApp CTA simply doesn't render —
// better than shipping a button that opens a chat with nobody.
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
);

/** A normal external wa.me link that works on both mobile (opens the app)
 * and desktop (opens WhatsApp Web), with the message pre-filled. */
export function getWhatsAppHref(message: string): string | null {
  if (!whatsappNumber) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
