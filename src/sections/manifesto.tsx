import { SectionAccent } from "@/components/experience/section-accent";
import { Container } from "@/components/layout/container";
import { manifesto } from "@/content/site";

export function ManifestoSection() {
  return (
    <section className="relative scroll-mt-16 overflow-hidden border-y border-white/10 bg-graphite bg-[radial-gradient(ellipse_at_12%_0%,rgba(18,58,111,0.38),transparent_68%)] py-16 md:py-24" id="manifiesto">
      <Container>
        <div className="glass-panel relative grid items-center gap-6 rounded-2xl border border-white/15 p-6 sm:p-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <div>
            <p className="text-sm font-medium text-ember">{manifesto.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-porcelain md:text-5xl">
              {manifesto.title}
            </h2>
            <SectionAccent />
          </div>
          <p className="max-w-3xl text-base leading-7 text-steel sm:text-lg sm:leading-8">{manifesto.body}</p>
        </div>
      </Container>
    </section>
  );
}
