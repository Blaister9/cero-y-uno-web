import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/site";

export function ProcessSection() {
  return (
    <section className="border-t border-white/10 bg-graphite py-24" id="proceso">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Proceso" title="De necesidad ambigua a software operando.">
            Un camino claro para entender, diseñar, construir y estabilizar soluciones sin perder el foco del negocio.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal delay={index * 0.05} key={step.label}>
              <article className="min-h-72 rounded border border-white/10 bg-ink/70 p-6 shadow-inner-line transition hover:border-signal/35">
                <span className="font-mono text-sm text-ember">{step.label}</span>
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
