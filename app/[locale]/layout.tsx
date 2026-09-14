import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  locales,
} from "@/lib/i18n/getDictionary";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { SITE_NAME, SITE_URL } from "@/lib/seo/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OG_LOCALE = { en: "en_US", es: "es_ES" } as const;

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(currentLocale);
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}`]));

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.seo.title,
      template: `%s — ${SITE_NAME}`,
    },
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    authors: [{ name: SITE_NAME }],
    alternates: {
      canonical: `/${currentLocale}`,
      languages,
    },
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      url: `/${currentLocale}`,
      siteName: SITE_NAME,
      type: "website",
      locale: OG_LOCALE[currentLocale],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
