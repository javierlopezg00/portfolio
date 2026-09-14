import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // app/[locale]/layout.tsx is the root layout, defined with a top-level
  // dynamic segment — Next's own docs flag this as one of the two cases
  // where a plain app/not-found.tsx can't catch genuinely unmatched URLs
  // (it composes with layout.tsx, which requires a matched [locale] to
  // even render). global-not-found.tsx bypasses routing/layouts entirely.
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
