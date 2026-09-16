import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/getDictionary";
import { SITE_NAME, SITE_URL } from "./site";

export function getHomepageStructuredData(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: dict.seo.title,
    alternateName: SITE_NAME,
    description: dict.seo.description,
    url: `${SITE_URL}/${locale}`,
    areaServed: dict.seo.structuredDataAreaServed,
    serviceType: dict.seo.structuredDataServiceTypes,
  };
}

export function getCaseStudyStructuredData(
  locale: Locale,
  dict: Dictionary,
  project: { id: string; name: string; description: string; vertical: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    about: project.vertical,
    url: `${SITE_URL}/${locale}/work/${project.id}`,
    creator: {
      "@type": "ProfessionalService",
      name: dict.seo.title,
      alternateName: SITE_NAME,
      url: `${SITE_URL}/${locale}`,
    },
  };
}
