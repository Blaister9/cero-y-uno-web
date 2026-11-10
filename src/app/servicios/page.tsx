import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ServiceExplorer } from "@/components/services/service-explorer";
import { siteConfig } from "@/config/site";
import { servicesPage } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Servicios | Cero y Uno",
  description:
    "Servicios de desarrollo de software a medida, automatización, integraciones, Power Platform, analítica e inteligencia aplicada.",
  path: "/servicios"
});

export default function ServiciosPage() {
  return (
    <main>
      <section className="services-hero overflow-hidden pb-14 pt-32 md:pb-20 md:pt-40" aria-labelledby="services-title">
        <Container>
          <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/15 pb-5 text-sm">
            <p className="font-medium text-matrix">{servicesPage.eyebrow}</p>
            <p className="text-right text-xs text-steel sm:text-sm">{servicesPage.disciplines}</p>
          </div>
          <div className="grid items-end gap-8 lg:grid-cols-[1.8fr_1fr] lg:gap-14">
            <h1 className="text-[clamp(2.8rem,6.7vw,6.25rem)] font-medium leading-[1.04] tracking-[-0.055em]" id="services-title">
              {servicesPage.title}
              <span className="block text-matrix">{servicesPage.titleAccent}</span>
            </h1>
            <div className="max-w-md lg:pb-1">
              <p className="text-base leading-8 text-steel md:text-lg">{servicesPage.description}</p>
              <a className="group mt-7 inline-flex min-h-12 items-center gap-5 rounded bg-matrix px-5 text-sm font-semibold text-ink transition hover:bg-porcelain" href="#explorar">
                {servicesPage.exploreLabel}
                <ArrowDown aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-y-1" size={18} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <ServiceExplorer />

      <section className="scroll-mt-24 border-t border-white/15 bg-ink py-16 md:py-24" id="hablemos" aria-labelledby="services-contact-title">
        <Container className="grid items-end gap-8 lg:grid-cols-[1.8fr_1fr] lg:gap-14">
          <div>
            <p className="text-sm font-medium text-matrix">{servicesPage.closing.eyebrow}</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight md:text-5xl" id="services-contact-title">
              {servicesPage.closing.title}
            </h2>
          </div>
          <div>
            <p className="max-w-md text-base leading-7 text-steel">{servicesPage.closing.description}</p>
            <Link className="mt-6 inline-flex min-h-12 items-center justify-center gap-5 rounded bg-matrix px-5 text-sm font-semibold text-ink transition hover:bg-porcelain" href={siteConfig.primaryContactHref}>
              {servicesPage.closing.action}
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
