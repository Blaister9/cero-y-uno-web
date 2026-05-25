import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { ValueCard } from "@/components/ui/value-card";
import { solutionsPage } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Soluciones digitales | Cero y Uno",
  description:
    "Soluciones digitales aplicables a plataformas internas, portales corporativos, automatización, integraciones, tableros e IA aplicada.",
  path: "/soluciones"
});

export default function SolucionesPage() {
  return (
    <main>
      <PageHero
        description={solutionsPage.description}
        eyebrow={solutionsPage.eyebrow}
        title={solutionsPage.title}
      >
        <Link
          className="inline-flex h-12 items-center justify-center gap-2 rounded bg-porcelain px-5 text-sm font-semibold text-ink transition hover:bg-white"
          href="/servicios"
        >
          Ver servicios
          <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </PageHero>

      <FeatureGrid>
        {solutionsPage.scenarios.map((scenario, index) => (
          <ValueCard eyebrow={`Escenario 0${index + 1}`} key={scenario.title} title={scenario.title}>
            <p>{scenario.description}</p>
          </ValueCard>
        ))}
      </FeatureGrid>
    </main>
  );
}
