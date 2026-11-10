import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";

import "./globals.css";

const manrope = localFont({
  src: "./fonts/manrope-latin-variable.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
  fallback: ["Arial", "sans-serif"]
});

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
    <html className={manrope.variable} lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
