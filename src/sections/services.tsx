import {
  BrainCircuit,
  Building2,
  Code2,
  Layers3,
  PlugZap,
  Workflow
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
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
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Capacidades técnicas para convertir procesos en sistemas."
          >
            Diseñamos y construimos soluciones que conectan operación, datos y decisión sin agregar complejidad innecesaria.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal delay={index * 0.035} key={service.title}>
              <ServiceCard
                description={service.description}
                icon={iconMap[service.icon as keyof typeof iconMap]}
                signal={service.signal}
                title={service.title}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
