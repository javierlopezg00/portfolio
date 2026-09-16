// Set NEXT_PUBLIC_SITE_URL once a real domain is connected — falls back to
// localhost so metadata/sitemap/OG URLs are still well-formed in dev.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// A proper name — same in every locale, so it stays here rather than in
// the dictionary. The title/description shown to visitors and search
// engines live in dict.seo instead, since those genuinely translate.
export const SITE_NAME = "Javier López Digital";
