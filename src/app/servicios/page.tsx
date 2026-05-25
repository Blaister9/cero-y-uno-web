import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { ValueCard } from "@/components/ui/value-card";
import { servicesPage } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Servicios | Cero y Uno",
  description:
    "Servicios de desarrollo de software a medida, automatización, integraciones, Power Platform, analítica e inteligencia aplicada.",
  path: "/servicios"
});

export default function ServiciosPage() {
  return (
    <main>
      <PageHero
        description={servicesPage.description}
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
      >
        <Link
          className="inline-flex h-12 items-center justify-center gap-2 rounded bg-porcelain px-5 text-sm font-semibold text-ink transition hover:bg-white"
          href="/contacto"
        >
          Solicitar diagnóstico
          <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </PageHero>

      <FeatureGrid columns="two">
        {servicesPage.items.map((service, index) => (
          <ValueCard eyebrow={`Servicio 0${index + 1}`} key={service.title} title={service.title}>
            <div className="grid gap-4">
              <ServiceDetail label="Problema que resuelve" text={service.problem} />
              <ServiceDetail label="Qué entrega Cero y Uno" text={service.delivery} />
              <ServiceDetail label="Resultado esperado" text={service.outcome} />
            </div>
          </ValueCard>
        ))}
      </FeatureGrid>
    </main>
  );
}

function ServiceDetail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signal">{label}</p>
      <p className="mt-2 text-sm leading-7 text-steel">{text}</p>
    </div>
  );
}
