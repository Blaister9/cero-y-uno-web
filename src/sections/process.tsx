import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/site";

export function ProcessSection() {
  return (
    <section className="bg-ink py-24" id="metodo">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Método" title="De ambigüedad a ejecución técnica controlada.">
            El proceso está diseñado para reducir incertidumbre, construir con foco y dejar capacidades instaladas.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal delay={index * 0.05} key={step.label}>
              <article className="min-h-72 rounded border border-white/10 bg-white/[0.035] p-6 shadow-inner-line">
                <span className="font-mono text-sm text-signal">{step.label}</span>
                <h3 className="mt-8 text-xl font-semibold leading-7 text-porcelain">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
