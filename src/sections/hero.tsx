import { ArrowRight, Cpu, Workflow } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { BinaryField } from "@/components/visual/binary-field";
import { siteConfig } from "@/config/site";
import { heroHighlights } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-16">
      <BinaryField />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.45)_0%,rgba(5,5,5,0.18)_42%,rgba(5,5,5,1)_100%)]" />

      <Container className="relative z-10 py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-steel shadow-inner-line">
                <Cpu aria-hidden="true" size={16} className="text-signal" />
                Ingeniería de software, automatización e IA aplicada
              </div>

              <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] text-porcelain md:text-6xl">
                Lo que otros imaginan, nosotros lo convertimos en software.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel md:text-xl">
                Desarrollo de software, automatización e inteligencia aplicada para transformar procesos complejos en soluciones reales.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded bg-porcelain px-5 text-sm font-semibold text-ink transition hover:bg-white"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  Iniciar conversación
                  <ArrowRight aria-hidden="true" size={17} />
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded border border-white/15 bg-white/[0.035] px-5 text-sm font-semibold text-porcelain transition hover:border-signal/40 hover:bg-white/[0.055]"
                  href="#capacidades"
                >
                  Ver capacidades
                  <Workflow aria-hidden="true" size={17} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative rounded border border-white/10 bg-coal/70 p-5 shadow-inner-line backdrop-blur">
              <div className="border-b border-white/10 pb-4">
                <p className="font-mono text-sm text-signal">operación / software / inteligencia</p>
              </div>
              <div className="grid gap-3 pt-5">
                {heroHighlights.map((item, index) => (
                  <div
                    className="flex items-center justify-between rounded border border-white/10 bg-white/[0.03] px-4 py-4"
                    key={item}
                  >
                    <span className="text-sm font-medium text-porcelain">{item}</span>
                    <span className="font-mono text-sm text-ember">0{index + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded border border-signal/20 bg-signal/10 p-4">
                <p className="text-sm leading-6 text-signal">
                  De caos operativo a sistemas medibles, integrados y listos para crecer.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
