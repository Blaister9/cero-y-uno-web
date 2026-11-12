import { CompanyPrinciples } from "@/components/company/company-principles";
import { companyPage } from "@/content/company";
import { createPageMetadata } from "@/lib/metadata";
import { CompanyClosing, CompanyIntro, CompanyTeam } from "@/sections/company";

export const metadata = createPageMetadata({
  title: "Nosotros | Cero y Uno",
  description:
    "Conoce a Weso y Santensor, el equipo desarrollador de Cero y Uno, y nuestro enfoque de arquitectura, software a medida e integración de sistemas.",
  path: "/nosotros"
});

export default function NosotrosPage() {
  return (
    <main className="company-page" id="contenido" tabIndex={-1}>
      <CompanyIntro />
      <CompanyTeam />
      <CompanyPrinciples content={companyPage.approach} />
      <CompanyClosing />
    </main>
  );
}
