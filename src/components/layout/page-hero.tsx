import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(18,58,111,0.34),rgba(5,5,5,0.20)_35%,rgba(5,5,5,1)_76%)]" />

      <Container className="relative z-10 py-16 md:py-24">
        <Reveal>
          <div className="max-w-4xl">
            <p className="font-mono text-sm tracking-[0.28em] text-ember uppercase">{eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-porcelain md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel md:text-xl">{description}</p>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
