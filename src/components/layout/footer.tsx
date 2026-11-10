import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();
  const { email, emailHref, phone, phoneHref, address, mapHref } = siteConfig.contact;

  return (
    <footer className="glass-panel border-t border-white/15 py-10">
      <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.1fr_0.65fr_0.75fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-porcelain uppercase">Cero y Uno</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-steel">
            Convertimos ideas, procesos complejos y caos operativo en sistemas digitales reales.
          </p>
          <p className="mt-5 text-xs text-steel/80">© {year} Cero y Uno. Todos los derechos reservados.</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-porcelain">Navegación</p>
          <ul className="mt-3 grid gap-2 text-sm text-steel">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-porcelain" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-porcelain">Servicios</p>
          <ul className="mt-3 grid gap-2 text-sm text-steel">
            {siteConfig.footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-porcelain">Contacto</p>
          <address className="mt-3 grid gap-2 text-sm not-italic leading-6 text-steel">
            <a className="w-fit max-w-full break-words transition hover:text-porcelain" href={emailHref}>
              {email}
            </a>
            <a className="w-fit transition hover:text-porcelain" href={phoneHref}>
              {phone}
            </a>
            <a className="w-fit transition hover:text-porcelain" href={mapHref}>
              {address}
            </a>
          </address>
        </div>
      </Container>
    </footer>
  );
}
