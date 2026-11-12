import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { servicesPage } from "@/content/services";
import { ServiceScene } from "./service-scene";

export function ServiceExplorer() {
  return (
    <section
      className="services-catalogue"
      id="explorar"
      aria-labelledby="service-explorer-title"
    >
      <div className="home-container services-catalogue-heading">
        <p className="services-mono">{servicesPage.explorer.eyebrow}</p>
        <h2 id="service-explorer-title">{servicesPage.explorer.title}</h2>
        <p>{servicesPage.explorer.description}</p>
      </div>
      {servicesPage.items.map((service, index) => (
        <article
          className={`service-chapter service-chapter-${service.id}`}
          id={service.id}
          key={service.id}
          aria-labelledby={`${service.id}-title`}
        >
          <div className="home-container service-chapter-grid">
            <div className="service-chapter-copy">
              <p className="services-mono service-number">
                {String(index + 1).padStart(2, "0")} / {servicesPage.eyebrow}
              </p>
              <h3 id={`${service.id}-title`}>{service.shortTitle}</h3>
              <p className="service-summary-copy">{service.summary}</p>
              <details className="service-scope">
                <summary>
                  {servicesPage.scopeLabel}
                  <Plus aria-hidden="true" size={18} />
                </summary>
                <div>
                  <h4>{servicesPage.explorer.problemLabel}</h4>
                  <p>{service.problem}</p>
                  <h4>{servicesPage.explorer.deliveryLabel}</h4>
                  <p>{service.delivery}</p>
                  <h4>{servicesPage.explorer.outcomeLabel}</h4>
                  <p>{service.outcome}</p>
                </div>
              </details>
              <Link
                className="service-contact"
                href={siteConfig.primaryContactHref}
              >
                {servicesPage.explorer.contactLabel}
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <ServiceScene service={service} />
          </div>
        </article>
      ))}
    </section>
  );
}
