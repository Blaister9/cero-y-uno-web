import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

const ogImageUrl = new URL("/opengraph-image", siteConfig.url).toString();

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: {
      absolute: title
    },
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_CO",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Cero y Uno - Desarrollo de software, automatización e inteligencia aplicada"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl]
    }
  };
}
