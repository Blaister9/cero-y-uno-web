import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { ContactSection } from "@/sections/contact";
import { HeroSection } from "@/sections/hero";
import { ManifestoSection } from "@/sections/manifesto";
import { ProcessSection } from "@/sections/process";
import { ServicesSection } from "@/sections/services";

export const metadata = createPageMetadata({
  title: "Cero y Uno | Desarrollo de software, automatización e inteligencia aplicada",
  description: siteConfig.description,
  path: "/"
});

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
