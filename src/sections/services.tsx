import {
  BrainCircuit,
  Building2,
  Code2,
  Layers3,
  PlugZap,
  Workflow
} from "lucide-react";

import { ScrollReveal } from "@/components/experience/scroll-reveal";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/content/site";

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
    <section className="bg-ink py-24" id="servicios">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Capacidades técnicas para convertir procesos en sistemas."
          >
            Diseñamos y construimos soluciones que conectan operación, datos y decisión sin agregar complejidad innecesaria.
          </SectionHeading>
        </ScrollReveal>

        <div className="mt-6 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">
          <span className="h-px flex-1 bg-gradient-to-r from-signal/45 to-transparent" />
          <span>modules.ready</span>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal delay={index * 0.045} distance={26} key={service.title}>
              <ServiceCard
                description={service.description}
                icon={iconMap[service.icon as keyof typeof iconMap]}
                signal={service.signal}
                title={service.title}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
