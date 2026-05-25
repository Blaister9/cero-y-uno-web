import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { manifesto } from "@/content/site";

export function ManifestoSection() {
  return (
    <section className="border-y border-white/10 bg-graphite py-24" id="manifiesto">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-medium text-ember">{manifesto.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-porcelain md:text-5xl">
                {manifesto.title}
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-9 text-steel">{manifesto.body}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
