import { CheckCircle2, MinusCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { impact } from "@/content/site";

export function ImpactSection() {
  return (
    <section className="bg-ink py-24" id="impacto">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-ember">{impact.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-porcelain md:text-5xl">
              {impact.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <ImpactList
              icon="before"
              items={impact.before}
              title={impact.beforeTitle}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ImpactList
              icon="after"
              items={impact.after}
              title={impact.afterTitle}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ImpactList({
  icon,
  items,
  title
}: {
  icon: "before" | "after";
  items: string[];
  title: string;
}) {
  const Icon = icon === "after" ? CheckCircle2 : MinusCircle;
  const iconClass = icon === "after" ? "text-signal" : "text-steel";

  return (
    <article className="rounded border border-white/10 bg-white/[0.035] p-6 shadow-inner-line">
      <h3 className="text-xl font-semibold text-porcelain">{title}</h3>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div className="flex items-start gap-3 rounded border border-white/10 bg-ink/55 p-4" key={item}>
            <Icon aria-hidden="true" className={`mt-0.5 shrink-0 ${iconClass}`} size={18} />
            <p className="text-sm leading-6 text-steel">{item}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
