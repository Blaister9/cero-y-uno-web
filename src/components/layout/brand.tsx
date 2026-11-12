import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Brand() {
  return (
    <Link className="home-brand" href="/" aria-label={`${siteConfig.name} inicio`}>
      <span className="home-brand-symbol" aria-hidden="true">
        01<span>_</span>
      </span>
      <span>
        {siteConfig.name}<span className="home-brand-dot">.</span>
      </span>
    </Link>
  );
}
