import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
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

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
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
