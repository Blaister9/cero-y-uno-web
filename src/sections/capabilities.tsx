import { BrainCircuit, Code2, Layers3, Workflow } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { CapabilityCard } from "@/components/ui/capability-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/content/site";

const iconMap = {
  brain: BrainCircuit,
  code: Code2,
  layers: Layers3,
  workflow: Workflow
};

export function CapabilitiesSection() {
  return (
    <section className="bg-ink py-24" id="capacidades">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capacidades"
            title="Construimos tecnología que ordena operación, datos y decisión."
          >
            Cero y Uno trabaja donde las ideas necesitan convertirse en sistemas útiles, integrados y mantenibles.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <Reveal delay={index * 0.04} key={capability.title}>
              <CapabilityCard
                description={capability.description}
                icon={iconMap[capability.icon as keyof typeof iconMap]}
                title={capability.title}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
