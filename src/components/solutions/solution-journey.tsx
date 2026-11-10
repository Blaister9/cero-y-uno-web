import { Check, CornerDownRight } from "lucide-react";

import { solutionsPage } from "@/content/solutions";

export function SolutionJourney() {
  const example = solutionsPage.heroExample;

  return (
    <figure className="solution-journey relative rounded-2xl border border-matrix/20 bg-graphite/70 p-6 sm:p-8">
      <figcaption className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
        <span className="text-xs font-medium text-steel">{example.label}</span>
        <span className="text-sm font-medium text-matrix">{example.title}</span>
      </figcaption>
      <ol className="relative grid gap-7">
        {example.steps.map((step, index) => (
          <li className="relative flex items-start gap-4" key={step.title}>
            {index < 2 && <span aria-hidden="true" className="absolute bottom-[-28px] left-[19px] top-10 w-px bg-matrix/25" />}
            <span aria-hidden="true" className={`relative grid size-10 shrink-0 place-items-center rounded-full border text-sm ${index === 2 ? "border-matrix bg-matrix text-ink" : "border-matrix/35 bg-ink text-matrix"}`}>
              {index === 2 ? <Check size={18} /> : `0${index + 1}`}
            </span>
            <div className="pt-1">
              <p className="text-lg font-medium tracking-[-0.025em]">{step.title}</p>
              <p className="mt-1 text-sm leading-6 text-steel">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <CornerDownRight aria-hidden="true" className="absolute -bottom-5 right-8 size-10 rounded-xl border border-matrix/30 bg-ink p-2 text-matrix" />
    </figure>
  );
}
