const productionUrl = "https://ceroyuno.com.co";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const contactEmail = "contacto@ceroyuno.com.co";
const contactPhone = "+57 305 328 8831";
const contactAddress = "Carrera 72BIS # 25B-50, Bogotá";

export const siteConfig = {
  name: "Cero y Uno",
  slogan: "Lo que otros imaginan, nosotros lo convertimos en software.",
  url: configuredSiteUrl || productionUrl,
  description:
    "Creamos software a medida, automatizaciones, integraciones y soluciones digitales para transformar procesos complejos en sistemas funcionales, escalables y mantenibles.",
  contact: {
    email: contactEmail,
    emailHref: `mailto:${contactEmail}`,
    phone: contactPhone,
    phoneHref: `tel:${contactPhone.replaceAll(" ", "")}`,
    address: contactAddress,
    mapHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddress)}`
  },
  primaryContactHref: "/contacto#canales",
  keywords: [
    "desarrollo de software",
    "automatización de procesos",
    "integraciones",
    "inteligencia aplicada",
    "software a medida",
    "Power Platform"
  ],
  navItems: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Soluciones", href: "/soluciones" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" }
  ]
};
