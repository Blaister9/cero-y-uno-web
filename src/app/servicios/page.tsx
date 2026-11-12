import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ServiceExplorer } from "@/components/services/service-explorer";
import { siteConfig } from "@/config/site";
import { servicesPage } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Servicios | Cero y Uno",
  description:
    "Servicios de desarrollo de software a medida, automatización, integraciones, Power Platform, analítica e inteligencia aplicada.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <main className="services-page" id="contenido" tabIndex={-1}>
      <section
        className="services-intro home-container"
        aria-labelledby="services-title"
      >
        <div className="services-intro-top services-mono">
          <p>{servicesPage.eyebrow}</p>
          <p>{servicesPage.disciplines}</p>
        </div>
        <div className="services-intro-grid">
          <div className="services-intro-copy">
            <h1 id="services-title">
              {servicesPage.title} <span>{servicesPage.titleAccent}</span>
            </h1>
            <p>{servicesPage.description}</p>
            <a className="services-button" href="#explorar">
              {servicesPage.exploreLabel}
              <ArrowDown aria-hidden="true" size={18} />
            </a>
          </div>
          <figure className="services-hero-photo">
            <Image
              src={servicesPage.heroImage.src}
              alt={servicesPage.heroImage.alt}
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
            <figcaption>
              <span>{servicesPage.heroImage.caption}</span>
              <small>{servicesPage.heroImage.disclosure}</small>
            </figcaption>
          </figure>
        </div>
        <nav className="services-index" aria-label="Índice de servicios">
          <p className="services-mono">{servicesPage.indexLabel}</p>
          <ol>
            {servicesPage.items.map((service, index) => (
              <li key={service.id}>
                <a href={`#${service.id}`}>
                  <span className="services-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {service.shortTitle}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>
      <ServiceExplorer />
      <section
        className="services-closing"
        id="hablemos"
        aria-labelledby="services-contact-title"
      >
        <div className="home-container">
          <p className="services-mono">{servicesPage.closing.eyebrow}</p>
          <div className="services-closing-grid">
            <h2 id="services-contact-title">{servicesPage.closing.title}</h2>
            <div>
              <p>{servicesPage.closing.description}</p>
              <Link
                className="services-button"
                href={siteConfig.primaryContactHref}
              >
                {servicesPage.closing.action}
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
