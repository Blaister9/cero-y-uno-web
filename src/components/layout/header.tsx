"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/config/site";

import { Container } from "./container";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Cero y Uno inicio">
          <span className="grid h-9 w-9 place-items-center rounded border border-white/15 bg-deepblue/35 font-mono text-sm text-signal shadow-inner-line">
            01
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-porcelain uppercase">
            Cero y Uno
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {siteConfig.navItems.map((item) => (
            <Link
              className="text-sm text-steel transition hover:text-porcelain"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            className="inline-flex h-10 items-center gap-2 rounded border border-signal/45 bg-signal/10 px-4 text-sm font-medium text-porcelain transition hover:border-signal/75 hover:bg-signal/15"
            href={siteConfig.primaryContactHref}
          >
            Diagnóstico
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar navegación" : "Abrir navegación"}
          className="grid h-10 w-10 place-items-center rounded border border-white/15 bg-white/[0.035] text-porcelain transition hover:border-signal/45 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-white/10 bg-ink/96 lg:hidden">
          <Container className="py-4">
            <nav className="grid gap-2" aria-label="Navegación móvil">
              {siteConfig.navItems.map((item) => (
                <Link
                  className="rounded border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-steel transition hover:border-signal/40 hover:text-porcelain"
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded bg-porcelain px-4 text-sm font-semibold text-ink"
                href={siteConfig.primaryContactHref}
                onClick={() => setIsOpen(false)}
              >
                Solicitar diagnóstico
                <ArrowRight aria-hidden="true" size={16} />
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
