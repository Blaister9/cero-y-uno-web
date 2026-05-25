import { CapabilitiesSection } from "@/sections/capabilities";
import { ContactSection } from "@/sections/contact";
import { HeroSection } from "@/sections/hero";
import { PrinciplesSection } from "@/sections/principles";
import { ProblemSection } from "@/sections/problem";
import { ProcessSection } from "@/sections/process";
import { SolutionsSection } from "@/sections/solutions";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CapabilitiesSection />
      <ProblemSection />
      <ProcessSection />
      <SolutionsSection />
      <PrinciplesSection />
      <ContactSection />
    </main>
  );
}
