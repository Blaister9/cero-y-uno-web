import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { solutionAreas } from "@/content/site";

export function SolutionsSection() {
  return (
    <section className="border-y border-white/10 bg-coal py-24" id="soluciones">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Soluciones" title="Sistemas para operar mejor, no solo para verse modernos.">
              La tecnología se diseña alrededor del proceso: usuarios, reglas, datos, integraciones y decisiones.
            </SectionHeading>
          </Reveal>

          <div className="grid gap-4">
            {solutionAreas.map((area, index) => (
              <Reveal delay={index * 0.05} key={area.title}>
                <article className="group rounded border border-white/10 bg-ink/70 p-5 transition hover:border-ember/35">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-porcelain">{area.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-steel">{area.description}</p>
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="shrink-0 text-steel transition group-hover:text-ember"
                      size={20}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
