export const siteConfig = {
  name: "Cero y Uno",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contacto@ceroyuno.co",
  description:
    "Creamos software a medida, automatizaciones, integraciones y soluciones digitales para transformar procesos complejos en sistemas funcionales, escalables y mantenibles.",
  keywords: [
    "desarrollo de software",
    "automatización de procesos",
    "integraciones",
    "inteligencia aplicada",
    "software a medida",
    "Power Platform"
  ],
  navItems: [
    { label: "Manifiesto", href: "#manifiesto" },
    { label: "Servicios", href: "#servicios" },
    { label: "Diferencial", href: "#diferencial" },
    { label: "Impacto", href: "#impacto" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" }
  ],
  footerServices: [
    "Software a medida",
    "Automatización",
    "Integraciones",
    "Inteligencia aplicada"
  ]
};
