import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

import { BinaryCanvas } from "@/components/experience/binary-canvas";
import { CodeTerminal } from "@/components/experience/code-terminal";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/content/site";

export function HeroSection() {
  return (
    <section aria-labelledby="inicio-titulo" className="relative isolate flex min-h-[min(100svh,50rem)] items-center overflow-hidden bg-ink pt-16">
      <BinaryCanvas className="pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,7,0.93),rgba(5,9,7,0.70)_70%,rgba(5,9,7,0.48))] lg:bg-[linear-gradient(90deg,rgba(5,9,7,0.94),rgba(5,9,7,0.75)_44%,rgba(5,9,7,0.14)_100%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.5fr_0.75fr]">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.23em] text-matrix">
            {heroContent.kicker}
          </p>
          <h1
            className="mt-5 max-w-[18ch] text-balance text-[clamp(2.125rem,5.5vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.045em] text-porcelain"
            id="inicio-titulo"
          >
            {heroContent.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-steel sm:text-lg sm:leading-8">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-matrix px-5 py-3 text-sm font-semibold text-ink transition hover:bg-porcelain"
              href={siteConfig.primaryContactHref}
            >
              {heroContent.primaryCta}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-matrix/25 bg-ink/55 px-5 py-3 text-sm font-semibold text-porcelain transition hover:border-matrix/55 hover:bg-matrix/10"
              href="#proceso"
            >
              {heroContent.secondaryCta}
              <ArrowDown aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        <CodeTerminal className="hidden w-full max-w-xs justify-self-end lg:block" lines={heroContent.terminalLines} />
      </Container>
    </section>
  );
}
