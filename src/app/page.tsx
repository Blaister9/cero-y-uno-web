import { SiteStructuredData } from "@/components/seo/site-structured-data";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import {
  HomeCapabilities,
  HomeClosing,
  HomeIntro,
} from "@/sections/home-intro";
import { HomePortfolio } from "@/components/home/home-portfolio";
import { blockchainDemo } from "@/content/blockchain-demo";

export const metadata = createPageMetadata({
  title:
    "Cero y Uno | Desarrollo de software, automatización e inteligencia aplicada",
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <main className="home-page" id="contenido" tabIndex={-1}>
      <SiteStructuredData />
      <HomeIntro />
      <HomePortfolio blockchain={blockchainDemo} />
      <HomeCapabilities />
      <HomeClosing />
    </main>
  );
}
