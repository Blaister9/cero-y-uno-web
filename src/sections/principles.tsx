import { TerminalSquare } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { principles } from "@/content/site";

export function PrinciplesSection() {
  return (
    <section className="bg-ink py-24">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded border border-white/10 bg-coal text-signal">
                <TerminalSquare aria-hidden="true" size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-signal">Criterio de construcción</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-porcelain md:text-5xl">
                  Pensamos como socios técnicos de la operación.
                </h2>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {principles.map((principle) => (
                <p
                  className="min-h-32 rounded border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-steel shadow-inner-line"
                  key={principle}
                >
                  {principle}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
