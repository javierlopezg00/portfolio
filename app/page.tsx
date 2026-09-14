import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { SkipLink } from "@/components/layout/SkipLink";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { InteractiveLab } from "@/components/sections/InteractiveLab";
import { Process } from "@/components/sections/Process";
import { ProjectConfigurator } from "@/components/sections/ProjectConfigurator";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { SoftwareEvolution } from "@/components/sections/SoftwareEvolution";
import { getHomepageStructuredData } from "@/lib/seo/structuredData";

export default function Home() {
  return (
    <>
      {/* Static, fully-known content — safe to inline directly. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getHomepageStructuredData()),
        }}
      />
      <SkipLink />
      <Navigation />
      {/* tabIndex={-1}: <main> isn't natively focusable, so without it the
          skip link scrolls here but focus falls back to <body>. */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <SoftwareEvolution />
        <Services />
        <InteractiveLab />
        <SelectedWork />
        <Process />
        <ProjectConfigurator />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
