import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.navItems.map(({ href }) => ({
    url: new URL(href, siteConfig.url).toString()
  }));
}
