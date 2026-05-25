import { ArrowRight, Cpu, Layers3 } from "lucide-react";
import Link from "next/link";

import { BinaryCanvas } from "@/components/experience/binary-canvas";
import { BinaryWordmark } from "@/components/experience/binary-wordmark";
import { CodeTerminal } from "@/components/experience/code-terminal";
import { InteractiveGlow } from "@/components/experience/interactive-glow";
import { ScrollReveal } from "@/components/experience/scroll-reveal";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/content/site";

export function HeroSection() {
  return (
    <InteractiveGlow className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-16">
      <section className="relative flex min-h-screen w-full items-center overflow-hidden">
        <BinaryCanvas className="absolute inset-0 h-full w-full opacity-80" density="low" mode="ambient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(18,58,111,0.28),transparent_34%),linear-gradient(180deg,rgba(5,5,5,0.62)_0%,rgba(5,5,5,0.38)_42%,rgba(5,5,5,1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

        <Container className="relative z-10 py-24 md:py-32 lg:py-36">
          <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] xl:gap-20">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-steel shadow-inner-line backdrop-blur">
                  <Cpu aria-hidden="true" size={16} className="text-signal" />
                  {heroContent.kicker}
                </div>

                <p className="mt-8 font-mono text-sm uppercase tracking-[0.34em] text-ember">
                  {heroContent.brand}
                </p>
                <BinaryWordmark className="mt-5" compact />
                <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] text-porcelain md:text-6xl xl:text-7xl">
                  {heroContent.title}
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-steel md:text-xl md:leading-9">
                  {heroContent.subtitle}
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
            </ScrollReveal>

            <ScrollReveal delay={0.2} distance={28}>
              <div className="grid gap-5 lg:pt-12">
                <CodeTerminal className="opacity-85 lg:scale-[0.96]" />
                <div className="relative rounded border border-white/10 bg-coal/68 p-5 shadow-premium backdrop-blur">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <p className="font-mono text-sm text-signal">sistema / proceso / decisión</p>
                    <span className="h-2 w-2 rounded-full bg-ember" />
                  </div>
                  <div className="grid gap-3 pt-5">
                    {heroContent.signals.map((item, index) => (
                      <div
                        className="flex items-center justify-between rounded border border-white/10 bg-white/[0.028] px-4 py-4 transition hover:border-signal/35"
                        key={item}
                      >
                        <span className="text-sm font-medium text-porcelain">{item}</span>
                        <span className="font-mono text-sm text-ember">0{index + 1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded border border-signal/20 bg-deepblue/22 p-4">
                    <p className="text-sm leading-6 text-steel">
                      Del proceso disperso a una operación conectada, medible y lista para crecer.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </InteractiveGlow>
  );
}
