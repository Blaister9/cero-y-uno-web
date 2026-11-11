"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

import { siteConfig } from "@/config/site";

function Brand() {
  return (
    <Link className="home-brand" href="/" aria-label="Cero y Uno inicio">
      <span className="home-brand-symbol" aria-hidden="true">
        01<span>_</span>
      </span>
      <span>
        Cero y Uno<span className="home-brand-dot">.</span>
      </span>
    </Link>
  );
}

export function HomeHeader() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="home-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <a className="home-skip" href="#contenido">
        Saltar al contenido
      </a>
      <div className="home-container home-header-inner">
        <Brand />
        <nav className="home-desktop-nav" aria-label="Navegación principal">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === "/" ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="home-header-actions">
          <Link className="home-text-link" href="/contacto">
            Hablemos <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            className="home-menu-toggle"
            type="button"
            ref={trigger}
            aria-label={open ? "Cerrar navegación" : "Abrir navegación"}
            aria-expanded={open}
            aria-controls="home-mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="home-mobile-nav home-container"
          id="home-mobile-nav"
          aria-label="Navegación móvil"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={item.href === "/" ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function HomeFooter() {
  const { contact } = siteConfig;
  return (
    <footer className="home-footer">
      <div className="home-container">
        <div className="home-footer-grid">
          <div>
            <Brand />
            <p>Software real para lo que sigue.</p>
          </div>
          <nav aria-label="Navegación del pie">
            {siteConfig.navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <address>
            <a href={contact.emailHref}>{contact.email}</a>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={contact.mapHref}>{contact.address}</a>
          </address>
        </div>
        <div className="home-footer-bottom">
          <span>© {new Date().getFullYear()} Cero y Uno</span>
          <span>De 0 y 1, a tu próxima solución.</span>
        </div>
      </div>
    </footer>
  );
}
