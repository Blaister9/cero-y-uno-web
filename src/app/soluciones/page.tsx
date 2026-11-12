import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SolutionExplorer } from "@/components/solutions/solution-explorer";
import { SolutionJourney } from "@/components/solutions/solution-journey";
import { siteConfig } from "@/config/site";
import { solutionsPage } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Soluciones digitales | Cero y Uno",
  description:
    "Plataformas internas, portales, aprobaciones, sistemas conectados, tableros e IA aplicada. Explora una solución según el problema de tu equipo.",
  path: "/soluciones",
});

export default function SolucionesPage() {
  return (
    <main className="solutions-page" id="contenido" tabIndex={-1}>
      <section
        className="solutions-intro home-container"
        aria-labelledby="solutions-title"
      >
        <p className="solutions-mono">{solutionsPage.eyebrow}</p>
        <div className="solutions-intro-grid">
          <h1 id="solutions-title">
            {solutionsPage.title} <span>{solutionsPage.titleAccent}</span>
          </h1>
          <div>
            <p>{solutionsPage.description}</p>
            <a className="solutions-text-link" href="#escenarios">
              {solutionsPage.exploreLabel}
              <ArrowDown aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
        <SolutionJourney />
      </section>
      <SolutionExplorer />
      <section
        className="solutions-closing"
        aria-labelledby="solutions-contact-title"
      >
        <div className="home-container solutions-closing-grid">
          <div>
            <p className="solutions-mono">{solutionsPage.closing.eyebrow}</p>
            <h2 id="solutions-contact-title">{solutionsPage.closing.title}</h2>
          </div>
          <div>
            <p>{solutionsPage.closing.description}</p>
            <Link
              className="solutions-button"
              href={siteConfig.primaryContactHref}
            >
              {solutionsPage.closing.action}
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
            <Link className="solutions-text-link" href="/#portafolio">
              {solutionsPage.closing.secondaryAction}
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
