import { PageHero } from "@/components/layout/page-hero";
import { siteConfig } from "@/config/site";
import { contactContent } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { ContactSection } from "@/sections/contact";

export const metadata = createPageMetadata({
  title: "Contacto | Cero y Uno",
  description:
    "Contacto de Cero y Uno para iniciar una conversación comercial sobre software, automatización e inteligencia aplicada.",
  path: "/contacto"
});

export default function ContactoPage() {
  return (
    <main>
      <PageHero
        description="Iniciemos una conversación sobre el proceso que quieres ordenar, automatizar o convertir en software. Sin formulario falso y sin envío simulado."
        eyebrow="Contacto"
        title={contactContent.title}
      >
        <p className="max-w-2xl text-sm leading-7 text-steel">
          {siteConfig.hasDirectContact
            ? "Usa el canal directo configurado para iniciar el diagnóstico."
            : "Los canales directos se habilitarán cuando exista correo o WhatsApp oficial configurado."}
        </p>
      </PageHero>
      <ContactSection />
    </main>
  );
}
