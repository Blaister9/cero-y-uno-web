import { ArrowRight, CheckCircle2, MinusCircle } from "lucide-react";

import { ScrollReveal } from "@/components/experience/scroll-reveal";
import { Container } from "@/components/layout/container";
import { impact } from "@/content/site";

export function ImpactSection() {
  return (
    <section className="bg-ink py-24" id="impacto">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-ember">{impact.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-porcelain md:text-5xl">
              {impact.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <ScrollReveal distance={24}>
            <ImpactList icon="before" items={impact.before} title={impact.beforeTitle} />
          </ScrollReveal>

          <div className="flex items-center justify-center py-2 lg:px-2">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-signal/25 bg-deepblue/35 text-signal shadow-[0_0_34px_rgba(141,180,255,0.16)]">
              <ArrowRight aria-hidden="true" size={18} />
            </div>
          </div>

          <ScrollReveal delay={0.12} distance={24}>
            <ImpactList icon="after" items={impact.after} title={impact.afterTitle} />
          </ScrollReveal>
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
  const tone =
    icon === "after"
      ? "border-signal/25 bg-[linear-gradient(135deg,rgba(18,58,111,0.28),rgba(255,255,255,0.035))]"
      : "border-white/10 bg-white/[0.026]";

  return (
    <article className={`h-full rounded border p-6 shadow-inner-line ${tone}`}>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-porcelain">{title}</h3>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">
          {icon === "after" ? "output.clean" : "input.noisy"}
        </span>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            className="flex items-start gap-3 rounded border border-white/10 bg-ink/55 p-4 transition hover:border-signal/30"
            key={item}
            style={{ transitionDelay: `${index * 20}ms` }}
          >
            <Icon aria-hidden="true" className={`mt-0.5 shrink-0 ${iconClass}`} size={18} />
            <p className="text-sm leading-6 text-steel">{item}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
