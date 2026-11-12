"use client";

import { ArrowUpRight, PanelLeft, PanelLeftClose } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import { siteConfig } from "@/config/site";
import { chromeContent } from "@/content/chrome";
import { useHeaderCompact } from "@/lib/use-header-compact";
import { Brand } from "./brand";

export function Header() {
  const pathname = usePathname();
  // Reset the disclosure on every route change, including browser history.
  return <HeaderNavigation key={pathname} pathname={pathname} />;
}

function HeaderNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  useHeaderCompact(headerRef);

  return (
    <header
      className="home-header"
      data-menu-open={open}
      ref={headerRef}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <a className="home-skip" href="#contenido" onClick={() => setOpen(false)}>
        {chromeContent.skipLabel}
      </a>
      <div className="home-container home-header-inner">
        <Brand />
        <nav className="home-desktop-nav" aria-label={chromeContent.mainNavigationLabel}>
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === pathname ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="home-header-actions">
          <Link className="home-text-link" href={siteConfig.primaryContactHref} onClick={() => setOpen(false)}>
            {chromeContent.contactLabel} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            className="home-menu-toggle"
            type="button"
            ref={trigger}
            aria-label={
              open ? chromeContent.closeNavigation : chromeContent.openNavigation
            }
            aria-expanded={open}
            aria-controls="site-mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <PanelLeftClose size={22} strokeWidth={1.6} aria-hidden="true" />
            ) : (
              <PanelLeft size={22} strokeWidth={1.6} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <nav
        className="home-mobile-nav home-container"
        id="site-mobile-nav"
        aria-label={chromeContent.panelNavigationLabel}
        hidden={!open}
      >
        {siteConfig.navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            aria-current={item.href === pathname ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
