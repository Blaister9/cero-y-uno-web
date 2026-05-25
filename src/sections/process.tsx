import { ProcessPipeline } from "@/components/experience/process-pipeline";
import { ScrollReveal } from "@/components/experience/scroll-reveal";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/site";

export function ProcessSection() {
  return (
    <section className="border-t border-white/10 bg-graphite py-24" id="proceso">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="Proceso" title="De necesidad ambigua a software operando.">
            Un pipeline claro para diagnosticar, diseñar, construir, probar, desplegar y evolucionar soluciones sin perder el foco del negocio.
          </SectionHeading>
        </ScrollReveal>

        <ProcessPipeline steps={processSteps} />
      </Container>
    </section>
  );
}
