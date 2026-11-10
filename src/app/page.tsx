import { SiteStructuredData } from "@/components/seo/site-structured-data";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { ContactSection } from "@/sections/contact";
import { HeroSection } from "@/sections/hero";
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
      <SiteStructuredData />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
