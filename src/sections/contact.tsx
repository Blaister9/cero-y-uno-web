import { ArrowRight, Mail } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section className="bg-graphite py-24" id="contacto">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="text-sm font-medium text-signal">Contacto</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-porcelain md:text-5xl">
                Si el proceso ya existe en la cabeza del equipo, podemos convertirlo en software.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-steel md:text-lg">
                Hablemos del flujo, los usuarios, la información y las decisiones que hoy frenan la operación.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded bg-porcelain px-5 text-sm font-semibold text-ink transition hover:bg-white"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                Escribir a Cero y Uno
                <Mail aria-hidden="true" size={17} />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded border border-white/15 bg-white/[0.035] px-5 text-sm font-semibold text-porcelain transition hover:border-signal/40 hover:bg-white/[0.055]"
                href="#capacidades"
              >
                Revisar capacidades
                <ArrowRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
