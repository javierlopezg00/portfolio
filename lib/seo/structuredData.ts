import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "./site";

export function getHomepageStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_TITLE,
    alternateName: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "Web Application Development",
      "Custom Software Development",
      "System Integration",
    ],
  };
}
