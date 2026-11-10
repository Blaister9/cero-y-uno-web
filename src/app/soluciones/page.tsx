import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SolutionExplorer } from "@/components/solutions/solution-explorer";
import { SolutionJourney } from "@/components/solutions/solution-journey";
import { siteConfig } from "@/config/site";
import { solutionsPage } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Soluciones digitales | Cero y Uno",
  description:
    "Plataformas internas, portales, aprobaciones, sistemas conectados, tableros e IA aplicada. Explora una solución según el problema de tu equipo.",
  path: "/soluciones"
});

export default function SolucionesPage() {
  return (
    <main>
      <section className="solutions-hero overflow-hidden pb-14 pt-28 md:pb-20 md:pt-36" aria-labelledby="solutions-title">
        <Container>
          <div className="mb-10 flex items-center gap-3 text-sm font-medium text-matrix">
            <span aria-hidden="true" className="h-px w-8 bg-matrix/60" />
            {solutionsPage.eyebrow}
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
            <div>
              <h1 className="text-[clamp(2.9rem,6.5vw,6rem)] font-medium leading-[1.04] tracking-[-0.055em]" id="solutions-title">
                {solutionsPage.title}
                <span className="block text-matrix">{solutionsPage.titleAccent}</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-8 text-steel md:text-lg">{solutionsPage.description}</p>
              <a className="group mt-8 inline-flex min-h-12 items-center gap-5 rounded bg-matrix px-5 text-sm font-semibold text-ink transition hover:bg-porcelain" href="#escenarios">
                {solutionsPage.exploreLabel}
                <ArrowDown aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-y-1" size={18} />
              </a>
            </div>
            <SolutionJourney />
          </div>
        </Container>
      </section>

      <SolutionExplorer />

      <section className="border-t border-white/15 py-16 md:py-24" aria-labelledby="solutions-contact-title">
        <Container className="grid items-end gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div>
            <p className="text-sm font-medium text-matrix">{solutionsPage.closing.eyebrow}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-tight md:text-5xl" id="solutions-contact-title">
              {solutionsPage.closing.title}
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-base leading-7 text-steel">{solutionsPage.closing.description}</p>
            <Link className="mt-7 inline-flex min-h-12 items-center gap-5 rounded bg-matrix px-5 text-sm font-semibold text-ink transition hover:bg-porcelain" href={siteConfig.primaryContactHref}>
              {solutionsPage.closing.action}
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
            <Link className="mt-4 flex min-h-11 w-fit items-center gap-2 text-sm text-steel transition hover:text-matrix" href="/#proceso">
              {solutionsPage.closing.secondaryAction}
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
