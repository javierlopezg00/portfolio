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
