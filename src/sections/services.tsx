import {
  BrainCircuit,
  Building2,
  Code2,
  Layers3,
  PlugZap,
  Workflow
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionAccent } from "@/components/experience/section-accent";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { servicesPage } from "@/content/services";

const iconMap = {
  brain: BrainCircuit,
  building: Building2,
  code: Code2,
  layers: Layers3,
  plug: PlugZap,
  workflow: Workflow
};

export function ServicesSection() {
  return (
    <section className="scroll-mt-16 bg-ink bg-[radial-gradient(ellipse_at_80%_35%,rgba(22,61,41,0.22),transparent_65%)] py-20 md:py-24" id="servicios">
      <Container>
        <SectionHeading eyebrow="Servicios" title="¿Qué necesita resolver tu equipo?">
          Explora los servicios según el trabajo que necesitas hacer.
        </SectionHeading>
        <SectionAccent />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {servicesPage.items.map((service) => (
            <ServiceCard
              description={service.summary}
              href={`/servicios#${service.id}`}
              icon={iconMap[service.icon]}
              key={service.id}
              title={service.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
