import { Mail } from "lucide-react";

import { siteConfig } from "@/config/site";

import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <Container className="grid gap-8 md:grid-cols-[1.1fr_0.7fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-porcelain uppercase">Cero y Uno</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-steel">
            Convertimos ideas, procesos complejos y caos operativo en sistemas digitales reales.
          </p>
          <p className="mt-5 text-xs text-steel/80">© {year} Cero y Uno. Todos los derechos reservados.</p>
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
          <a
            className="mt-3 inline-flex w-fit items-center gap-2 text-sm text-steel transition hover:text-porcelain"
            href={`mailto:${siteConfig.contactEmail}`}
          >
            <Mail aria-hidden="true" size={16} />
            {siteConfig.contactEmail}
          </a>
        </div>
      </Container>
    </footer>
  );
}
