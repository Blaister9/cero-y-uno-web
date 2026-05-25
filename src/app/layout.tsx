import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";

import "./globals.css";

const ogImageUrl = new URL("/opengraph-image", siteConfig.url).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Cero y Uno | Desarrollo de software, automatización e inteligencia aplicada",
    template: "%s | Cero y Uno"
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/icon.svg"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Cero y Uno | Desarrollo de software, automatización e inteligencia aplicada",
    description: siteConfig.description,
    url: siteConfig.url,
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
    title: "Cero y Uno | Desarrollo de software, automatización e inteligencia aplicada",
    description: siteConfig.description,
    images: [ogImageUrl]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
