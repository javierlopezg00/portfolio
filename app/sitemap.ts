import type { MetadataRoute } from "next";
import { WORK_PROJECT_IDS } from "@/lib/content/work";
import { locales } from "@/lib/i18n/getDictionary";
import { SITE_URL } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}`]),
  );

  const homepages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages },
  }));

  const caseStudies: MetadataRoute.Sitemap = WORK_PROJECT_IDS.flatMap((id) => {
    const caseStudyLanguages = Object.fromEntries(
      locales.map((locale) => [locale, `${SITE_URL}/${locale}/work/${id}`]),
    );
    return locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/work/${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: caseStudyLanguages },
    }));
  });

  const labLanguages = Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}/lab`]),
  );
  const lab: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}/lab`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
    alternates: { languages: labLanguages },
  }));

  return [...homepages, ...caseStudies, ...lab];
}
