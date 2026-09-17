import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { SkipLink } from "@/components/layout/SkipLink";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { GrowWithBusiness } from "@/components/sections/GrowWithBusiness";
import { Hero } from "@/components/sections/Hero";
import { LabTeaser } from "@/components/sections/LabTeaser";
import { Process } from "@/components/sections/Process";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { WhoIWorkWith } from "@/components/sections/WhoIWorkWith";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { getServerLocale } from "@/lib/i18n/getServerDictionary";
import { getHomepageStructuredData } from "@/lib/seo/structuredData";

export default async function Home() {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);

  return (
    <>
      {/* Static, fully-known content — safe to inline directly. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getHomepageStructuredData(locale, dict)),
        }}
      />
      <SkipLink />
      <Navigation />
      {/* tabIndex={-1}: <main> isn't natively focusable, so without it the
          skip link scrolls here but focus falls back to <body>. */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Services />
        <SelectedWork />
        <GrowWithBusiness />
        <WhoIWorkWith />
        <Process />
        <LabTeaser />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
