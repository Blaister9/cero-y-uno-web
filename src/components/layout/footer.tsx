import Link from "next/link";

import { siteConfig } from "@/config/site";
import { chromeContent } from "@/content/chrome";
import { servicesPage } from "@/content/services";
import { Brand } from "./brand";

export function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="home-footer">
      <div className="home-container">
        <div className="home-footer-grid">
          <div className="home-footer-brand">
            <Brand />
            <p>{chromeContent.footerDescription}</p>
          </div>
          <nav aria-label="Navegación del pie">
            <h2 className="home-footer-heading">{chromeContent.navigationLabel}</h2>
            {siteConfig.navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Servicios del pie">
            <h2 className="home-footer-heading">{chromeContent.servicesLabel}</h2>
            {servicesPage.items.map((service) => (
              <Link href={`/servicios#${service.id}`} key={service.id}>
                {service.shortTitle}
              </Link>
            ))}
          </nav>
          <div className="home-footer-contact">
            <h2 className="home-footer-heading">{chromeContent.contactHeading}</h2>
            <address>
              <a href={contact.emailHref}>{contact.email}</a>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={contact.mapHref}>{contact.address}</a>
            </address>
          </div>
        </div>
        <div className="home-footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>{chromeContent.footerClosing}</span>
        </div>
      </div>
    </footer>
  );
}
