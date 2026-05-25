const productionUrl = "https://cero-y-uno-web.vercel.app";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const configuredContactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
const configuredWhatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim();

const contactEmail = configuredContactEmail || null;
const whatsappUrl = configuredWhatsappUrl || null;

export const siteConfig = {
  name: "Cero y Uno",
  slogan: "Lo que otros imaginan, nosotros lo convertimos en software.",
  url: configuredSiteUrl || productionUrl,
  productionUrl,
  description:
    "Creamos software a medida, automatizaciones, integraciones y soluciones digitales para transformar procesos complejos en sistemas funcionales, escalables y mantenibles.",
  contact: {
    email: contactEmail,
    whatsappUrl,
    socialLinks: [] as Array<{ label: string; href: string }>
  },
  contactEmail,
  whatsappUrl,
  hasDirectContact: Boolean(contactEmail || whatsappUrl),
  primaryContactHref: contactEmail ? `mailto:${contactEmail}` : whatsappUrl || "/contacto",
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
  ],
  footerServices: [
    "Software a medida",
    "Automatización",
    "Integraciones",
    "Inteligencia aplicada"
  ]
};
