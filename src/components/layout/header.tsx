import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";

import { Container } from "./container";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Cero y Uno inicio">
          <span className="grid h-9 w-9 place-items-center rounded border border-white/15 bg-white/[0.03] font-mono text-sm text-signal shadow-inner-line">
            01
          </span>
          <span className="text-sm font-semibold text-porcelain">Cero y Uno</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {siteConfig.navItems.map((item) => (
            <a
              className="text-sm text-steel transition hover:text-porcelain"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex h-10 items-center gap-2 rounded border border-signal/40 bg-signal/10 px-4 text-sm font-medium text-porcelain transition hover:border-signal/70 hover:bg-signal/15"
          href={`mailto:${siteConfig.contactEmail}`}
        >
          Diagnóstico
          <ArrowRight aria-hidden="true" size={16} />
        </a>
      </Container>
    </header>
  );
}
