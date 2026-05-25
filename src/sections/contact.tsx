import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { contactContent } from "@/content/site";

export function ContactSection() {
  const hasEmail = Boolean(siteConfig.contact.email);
  const hasWhatsapp = Boolean(siteConfig.contact.whatsappUrl);
  const primaryHref = siteConfig.hasDirectContact ? siteConfig.primaryContactHref : "#canales";

  return (
    <section className="bg-ink py-24" id="contacto">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded border border-white/10 bg-[linear-gradient(135deg,rgba(18,58,111,0.42),rgba(255,255,255,0.035)_48%,rgba(215,181,109,0.14))] p-6 shadow-premium md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
              <div>
                <p className="text-sm font-medium text-ember">{contactContent.eyebrow}</p>
                <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-porcelain md:text-5xl">
                  {contactContent.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-steel md:text-lg">
                  {contactContent.body}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded bg-porcelain px-5 text-sm font-semibold text-ink transition hover:bg-white"
                  href={primaryHref}
                >
                  {contactContent.primaryCta}
                  {hasWhatsapp && !hasEmail ? (
                    <MessageCircle aria-hidden="true" size={17} />
                  ) : (
                    <Mail aria-hidden="true" size={17} />
                  )}
                </a>
                <Link
                  className="inline-flex h-12 items-center justify-center gap-2 rounded border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-porcelain transition hover:border-signal/45 hover:bg-white/[0.07]"
                  href="/servicios"
                >
                  {contactContent.secondaryCta}
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </div>

              <div className="rounded border border-white/10 bg-ink/55 p-4 lg:col-span-2" id="canales">
                <p className="text-sm font-medium text-porcelain">Canal comercial</p>
                {siteConfig.hasDirectContact ? (
                  <div className="mt-3 grid gap-2 text-sm leading-6 text-steel">
                    {siteConfig.contact.email ? (
                      <a
                        className="w-fit transition hover:text-porcelain"
                        href={`mailto:${siteConfig.contact.email}`}
                      >
                        {siteConfig.contact.email}
                      </a>
                    ) : null}
                    {siteConfig.contact.whatsappUrl ? (
                      <a
                        className="w-fit transition hover:text-porcelain"
                        href={siteConfig.contact.whatsappUrl}
                      >
                        WhatsApp configurado
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <p className="mt-3 text-sm leading-6 text-steel">
                    El sitio está listo para activar correo o WhatsApp cuando el canal comercial quede definido. Por ahora, esta sección funciona como punto de referencia para el contacto futuro sin simular formularios ni envíos.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
