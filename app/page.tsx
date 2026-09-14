import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { InteractiveLab } from "@/components/sections/InteractiveLab";
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
      </main>
    </>
  );
}
