import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { ValueCard } from "@/components/ui/value-card";
import { companyPage } from "@/content/company";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Nosotros | Cero y Uno",
  description:
    "Conoce el enfoque de Cero y Uno: estrategia, arquitectura y ejecución para convertir ideas y procesos en sistemas reales.",
  path: "/nosotros"
});

export default function NosotrosPage() {
  return (
    <main>
      <PageHero
        description={companyPage.description}
        eyebrow={companyPage.eyebrow}
        title={companyPage.title}
      />

      <Container className="grid gap-4 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <ValueCard eyebrow="Filosofía" title={companyPage.philosophy.title}>
          <p>{companyPage.philosophy.body}</p>
        </ValueCard>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {companyPage.approach.map((item, index) => (
            <ValueCard eyebrow={`Enfoque 0${index + 1}`} key={item.title} title={item.title}>
              <p>{item.description}</p>
            </ValueCard>
          ))}
        </div>
      </Container>
    </main>
  );
}
