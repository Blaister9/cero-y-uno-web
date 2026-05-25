import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { differential } from "@/content/site";

export function DifferentialSection() {
  return (
    <section className="border-y border-white/10 bg-coal py-24" id="diferencial">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="text-sm font-medium text-signal">{differential.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-porcelain md:text-5xl">
                {differential.title}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {differential.pillars.map((pillar, index) => (
              <Reveal delay={index * 0.06} key={pillar.title}>
                <article className="group rounded border border-white/10 bg-ink/70 p-6 shadow-inner-line transition hover:border-ember/45">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-xs text-ember">0{index + 1}</p>
                      <h3 className="mt-4 text-xl font-semibold text-porcelain">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-steel">{pillar.description}</p>
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
