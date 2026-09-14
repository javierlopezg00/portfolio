// Set NEXT_PUBLIC_SITE_URL once a real domain is connected — falls back to
// localhost so metadata/sitemap/OG URLs are still well-formed in dev.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "Javier López";
export const SITE_TITLE = "Javier López — Software Development";
export const SITE_DESCRIPTION =
  "Premium software development studio — websites, web applications, and custom software.";
