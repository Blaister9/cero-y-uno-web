import { Mail } from "lucide-react";

import { siteConfig } from "@/config/site";

import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-porcelain">Cero y Uno</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-steel">
            Software, automatización e inteligencia aplicada para transformar operación en sistemas reales.
          </p>
        </div>

        <a
          className="inline-flex w-fit items-center gap-2 text-sm text-steel transition hover:text-porcelain"
          href={`mailto:${siteConfig.contactEmail}`}
        >
          <Mail aria-hidden="true" size={16} />
          {siteConfig.contactEmail}
        </a>
      </Container>
    </footer>
  );
}
