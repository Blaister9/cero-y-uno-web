import { ArrowRight, Cpu, Layers3 } from "lucide-react";
import Link from "next/link";

import { BinaryCanvas } from "@/components/experience/binary-canvas";
import { BinaryWordmark } from "@/components/experience/binary-wordmark";
import { CodeTerminal } from "@/components/experience/code-terminal";
import { InteractiveGlow } from "@/components/experience/interactive-glow";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/content/site";

export function HeroSection() {
  return (
    <InteractiveGlow className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-16">
      <section className="relative flex min-h-screen w-full items-center overflow-hidden">
        <BinaryCanvas className="absolute inset-0 h-full w-full" density="medium" mode="ambient" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.40)_0%,rgba(5,5,5,0.28)_42%,rgba(5,5,5,1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

        <Container className="relative z-10 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-steel shadow-inner-line backdrop-blur">
                  <Cpu aria-hidden="true" size={16} className="text-signal" />
                  {heroContent.kicker}
                </div>

                <p className="mt-7 font-mono text-sm tracking-[0.34em] text-ember uppercase">
                  {heroContent.brand}
                </p>
                <BinaryWordmark className="mt-4" compact />
                <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] text-porcelain md:text-6xl xl:text-7xl">
                  {heroContent.title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-steel md:text-xl">
                  {heroContent.subtitle}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex h-12 items-center justify-center gap-2 rounded bg-porcelain px-5 text-sm font-semibold text-ink shadow-[0_0_34px_rgba(141,180,255,0.16)] transition hover:-translate-y-0.5 hover:bg-white"
                    href={siteConfig.primaryContactHref}
                  >
                    {heroContent.primaryCta}
                    <ArrowRight aria-hidden="true" size={17} />
                  </a>
                  <Link
                    className="inline-flex h-12 items-center justify-center gap-2 rounded border border-white/15 bg-white/[0.035] px-5 text-sm font-semibold text-porcelain transition hover:-translate-y-0.5 hover:border-signal/45 hover:bg-white/[0.055]"
                    href="/soluciones"
                  >
                    {heroContent.secondaryCta}
                    <Layers3 aria-hidden="true" size={17} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid gap-4">
                <CodeTerminal />
                <div className="relative rounded border border-white/10 bg-coal/72 p-5 shadow-premium backdrop-blur">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <p className="font-mono text-sm text-signal">sistema / proceso / decisión</p>
                    <span className="h-2 w-2 rounded-full bg-ember" />
                  </div>
                  <div className="grid gap-3 pt-5">
                    {heroContent.signals.map((item, index) => (
                      <div
                        className="flex items-center justify-between rounded border border-white/10 bg-white/[0.03] px-4 py-4"
                        key={item}
                      >
                        <span className="text-sm font-medium text-porcelain">{item}</span>
                        <span className="font-mono text-sm text-ember">0{index + 1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded border border-signal/20 bg-deepblue/25 p-4">
                    <p className="text-sm leading-6 text-steel">
                      Del proceso disperso a una operación conectada, medible y lista para crecer.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </InteractiveGlow>
  );
}
