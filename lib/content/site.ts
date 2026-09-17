// One home for the contact details every CTA on the site points at.
// Both values are read from the environment so switching to a branded
// address (or a different phone) is a deploy setting, not a code change.

// The visible contact address, used by every "Email me" link and shown in
// the footer. Defaults to the working personal inbox so the contact flow
// keeps functioning; set NEXT_PUBLIC_CONTACT_EMAIL to the branded domain
// address (e.g. hello@javierdigital.com) once that mailbox actually
// exists and receives mail.
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "javierlopezguzman00@gmail.com";

// WhatsApp number in international format, digits only (country code +
// number, e.g. 50212345678). NEXT_PUBLIC_ so it's inlined at build time
// and usable from Client Components too. Left unset, every WhatsApp CTA
// simply doesn't render — better than shipping a button that opens a
// chat with nobody.
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
);

export const siteConfig = {
  contact: {
    email: contactEmail,
    mailto: `mailto:${contactEmail}`,
    /** null until NEXT_PUBLIC_WHATSAPP_NUMBER is configured. */
    whatsapp: whatsappNumber ?? null,
  },
} as const;

/** A normal external wa.me link that works on both mobile (opens the app)
 * and desktop (opens WhatsApp Web), with the message pre-filled. Returns
 * null when no number is configured, so callers can skip the button. */
export function getWhatsAppHref(message: string): string | null {
  const number = siteConfig.contact.whatsapp;
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
