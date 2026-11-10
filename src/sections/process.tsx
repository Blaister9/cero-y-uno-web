import { ProjectPicker } from "@/components/experience/project-picker";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { blockchainDemo } from "@/content/blockchain-demo";

export function ProcessSection() {
  return (
    <section className="scroll-mt-16 border-t border-white/10 bg-graphite py-24" id="proceso">
      <Container>
        <div className="scroll-mt-24" id="impacto">
          <SectionHeading eyebrow="Portafolio" title="Proyectos y ejemplos">
            Elige un proyecto o un ejemplo y sigue el flujo paso a paso.
          </SectionHeading>
        </div>

        <ProjectPicker blockchainDemo={blockchainDemo} />
      </Container>
    </section>
  );
}
