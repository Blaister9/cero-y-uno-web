import { ContactSection } from "@/sections/contact";
import { DifferentialSection } from "@/sections/differential";
import { HeroSection } from "@/sections/hero";
import { ImpactSection } from "@/sections/impact";
import { ManifestoSection } from "@/sections/manifesto";
import { ProcessSection } from "@/sections/process";
import { ServicesSection } from "@/sections/services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <DifferentialSection />
      <ImpactSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
