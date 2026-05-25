export const siteConfig = {
  name: "Cero y Uno",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ceroyuno.co",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contacto@ceroyuno.co",
  description:
    "Desarrollo de software, automatización e inteligencia aplicada para transformar procesos complejos en soluciones reales.",
  navItems: [
    { label: "Capacidades", href: "#capacidades" },
    { label: "Método", href: "#metodo" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Contacto", href: "#contacto" }
  ]
};
