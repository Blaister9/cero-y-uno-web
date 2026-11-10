import { CaseStory } from "@/components/experience/case-story";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceCase } from "@/content/service-case";

export function ProcessSection() {
  return (
    <section className="scroll-mt-16 border-t border-white/10 bg-graphite py-24" id="proceso">
      <Container>
        <div className="scroll-mt-24" id="impacto">
          <SectionHeading eyebrow={serviceCase.eyebrow} title={serviceCase.title}>
            {serviceCase.description}
          </SectionHeading>
        </div>

        <CaseStory chapters={serviceCase.chapters} example={serviceCase.example} />
      </Container>
    </section>
  );
}
