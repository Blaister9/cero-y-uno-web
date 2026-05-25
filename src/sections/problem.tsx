import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { operatingSignals } from "@/content/site";

export function ProblemSection() {
  return (
    <section className="border-y border-white/10 bg-graphite py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-medium text-ember">El punto de partida</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-porcelain md:text-5xl">
                El software correcto aparece cuando se entiende el proceso completo.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {operatingSignals.map((signal) => (
                <div
                  className="flex min-h-24 items-start gap-3 rounded border border-white/10 bg-ink/55 p-4"
                  key={signal}
                >
                  <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-signal" size={18} />
                  <p className="text-sm leading-6 text-steel">{signal}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
