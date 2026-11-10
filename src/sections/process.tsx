import { ArrowDownRight } from "lucide-react";

import { ProjectPicker } from "@/components/experience/project-picker";
import { Container } from "@/components/layout/container";
import { blockchainDemo } from "@/content/blockchain-demo";
import { projectStories } from "@/content/project-stories";
import { portfolioContent } from "@/content/site";

export function ProcessSection() {
  const projects = projectStories.filter((story) => story.kind === "Proyecto").length;
  const examples = projectStories.length - projects;

  return (
    <section aria-labelledby="portafolio-titulo" className="scroll-mt-16 border-t border-white/10 bg-coal pb-20 md:pb-28" id="proceso">
      <div className="portfolio-intro">
        <Container className="pb-9 pt-14 md:pb-12 md:pt-20">
          <div className="scroll-mt-24" id="impacto">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-matrix">
              <span aria-hidden="true" className="h-px w-8 bg-matrix" />
              {portfolioContent.eyebrow}
            </p>
            <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
              <h2 className="text-[clamp(2.75rem,7.3vw,6.25rem)] font-medium leading-[1.02] tracking-[-0.065em] text-porcelain" id="portafolio-titulo">
                {portfolioContent.title}
                <span className="block text-matrix">{portfolioContent.titleAccent}</span>
              </h2>
              <div className="max-w-md lg:pb-1">
                <p className="text-base leading-7 text-steel md:text-lg md:leading-8">{portfolioContent.description}</p>
                <div className="mt-7 flex items-center gap-5 border-t border-white/15 pt-5 text-sm text-steel">
                  <p><span className="mr-1.5 font-semibold tabular-nums text-porcelain">{String(projects).padStart(2, "0")}</span> proyectos</p>
                  <span aria-hidden="true" className="h-4 w-px bg-white/15" />
                  <p><span className="mr-1.5 font-semibold tabular-nums text-porcelain">{String(examples).padStart(2, "0")}</span> ejemplos</p>
                  <ArrowDownRight aria-hidden="true" className="ml-auto text-matrix" size={24} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <ProjectPicker blockchainDemo={blockchainDemo} />
      </Container>
    </section>
  );
}
