import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { contactPageContent } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contacto | Cero y Uno",
  description:
    "Escríbenos o llámanos para conversar sobre el proceso que quieres mejorar con software, automatización o integraciones.",
  path: "/contacto"
});

export default function ContactoPage() {
  const { email, emailHref, phone, phoneHref, address, mapHref } = siteConfig.contact;
  const { eyebrow, title, description, emailAction, phoneAction, mapAction } = contactPageContent;
  const channels = [
    { label: emailAction, detail: email, href: emailHref, icon: Mail },
    { label: phoneAction, detail: phone, href: phoneHref, icon: Phone },
    { label: mapAction, detail: address, href: mapHref, icon: MapPin }
  ];

  return (
    <main className="bg-ink bg-[radial-gradient(ellipse_at_72%_12%,rgba(18,58,111,0.32),transparent_65%)] pb-16 pt-28 md:pb-24 md:pt-36">
      <Container>
        <section aria-labelledby="contacto-titulo" className="scroll-mt-24" id="canales">
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-ember">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-porcelain md:text-6xl" id="contacto-titulo">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-steel md:text-lg">{description}</p>

          <ul className="mt-8 grid max-w-5xl gap-3 md:grid-cols-3">
            {channels.map(({ label, detail, href, icon: Icon }) => (
              <li key={href}>
                <a
                  className="flex h-full items-start gap-3 rounded border border-white/15 bg-white/[0.04] p-4 transition hover:border-signal/45 hover:bg-white/[0.07]"
                  href={href}
                >
                  <Icon aria-hidden="true" className="mt-0.5 shrink-0 text-signal" size={18} />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-porcelain">{label}</span>
                    <span className="mt-1 block break-words text-sm leading-6 text-steel">{detail}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
