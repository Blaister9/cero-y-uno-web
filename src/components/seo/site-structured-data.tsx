import { siteConfig } from "@/config/site";

export function SiteStructuredData() {
  const url = new URL("/", siteConfig.url).toString();
  const organizationId = `${url}#organization`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url,
        description: siteConfig.description,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phoneHref.slice("tel:".length)
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        name: siteConfig.name,
        url,
        inLanguage: "es-CO",
        publisher: { "@id": organizationId }
      }
    ]
  };

  return (
    <script
      id="site-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c")
      }}
    />
  );
}
