import { ArrowUpRight, Check, CircleDot } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { solutionsPage } from "@/content/solutions";

// Native radios preserve selection and arrow-key navigation without JavaScript.
// Browsers without :has show every scenario instead of hiding the content.
export function SolutionExplorer() {
  const { explorer, scenarios } = solutionsPage;

  return (
    <section className="scroll-mt-20 border-t border-white/15 bg-coal py-14 md:py-20" id="escenarios" aria-labelledby="solutions-explorer-title">
      <Container>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-medium text-matrix">{explorer.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl" id="solutions-explorer-title">{explorer.title}</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-steel">{explorer.description}</p>
        </div>

        <fieldset className="solution-explorer m-0 min-w-0 border-0 p-0">
          <legend className="sr-only">{explorer.choiceLabel}</legend>
          <div className="grid items-start gap-7 lg:grid-cols-[0.85fr_1.7fr] lg:gap-9">
            <div className="grid grid-cols-2 gap-2 lg:sticky lg:top-24 lg:grid-cols-1">
              {scenarios.map((scenario, index) => (
                <label className="solution-choice relative block cursor-pointer" key={scenario.id}>
                  <input
                    aria-controls={`scenario-${scenario.id}`}
                    className="peer sr-only"
                    defaultChecked={index === 0}
                    id={`choose-${scenario.id}`}
                    name="solution"
                    type="radio"
                    value={scenario.id}
                  />
                  <span className="flex h-full min-h-24 items-start gap-3 rounded-lg border border-white/15 px-3 py-4 transition-colors hover:border-matrix/50 peer-checked:border-matrix peer-checked:bg-matrix peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-matrix sm:px-4 lg:min-h-20">
                    <span aria-hidden="true" className="pt-0.5 text-xs opacity-65">{String(index + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-5">{scenario.choice}</span>
                      <span className="mt-1.5 hidden text-xs leading-5 opacity-75 sm:block">{scenario.category}</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="hidden shrink-0 sm:block" size={16} />
                  </span>
                </label>
              ))}
            </div>

            <div className="solution-panels min-w-0">
              {scenarios.map((scenario, index) => (
                <article aria-labelledby={`title-${scenario.id}`} className="solution-panel scroll-mt-24" id={`scenario-${scenario.id}`} key={scenario.id}>
                  <div className="mb-5 flex items-center justify-between gap-3 text-xs text-matrix">
                    <p className="font-medium">{scenario.category}</p>
                    <span aria-hidden="true" className="tabular-nums text-steel">0{index + 1} / 06</span>
                  </div>
                  <h3 className="max-w-2xl text-[1.75rem] font-medium leading-tight sm:text-4xl" id={`title-${scenario.id}`}>{scenario.title}</h3>
                  <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-7">
                    <div>
                      <h4 className="text-sm font-semibold text-steel">{explorer.beforeLabel}</h4>
                      <p className="mt-2 text-sm leading-7 text-steel">{scenario.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-matrix">{explorer.afterLabel}</h4>
                      <p className="mt-2 text-sm leading-7 text-porcelain/90">{scenario.outcome}</p>
                    </div>
                  </div>

                  <figure className="solution-example my-7 overflow-hidden rounded-xl border border-matrix/20 bg-ink shadow-premium">
                    <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-matrixdeep/20 px-5 py-3.5">
                      <span className="flex items-center gap-2 text-sm font-medium"><CircleDot aria-hidden="true" className="text-matrix" size={15} />{scenario.preview.title}</span>
                      <span className="text-xs text-steel">{explorer.exampleLabel}</span>
                    </figcaption>
                    <div className="px-5 py-5 sm:px-6">
                      <p className="mb-4 text-base font-medium">{scenario.preview.subtitle}</p>
                      <dl className="grid divide-y divide-white/10">
                        {scenario.preview.rows.map((row) => (
                          <div className="grid gap-1 py-3 sm:grid-cols-[1fr_1.4fr] sm:gap-4" key={row.label}>
                            <dt className="text-xs leading-6 text-steel">{row.label}</dt>
                            <dd className="text-sm leading-6">{row.value}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-4 flex items-start gap-2 border-t border-matrix/20 pt-4 text-xs leading-6 text-matrix"><Check aria-hidden="true" className="mt-1 shrink-0" size={15} />{scenario.preview.result}</p>
                    </div>
                  </figure>

                  <h4 className="text-sm font-semibold">{explorer.includesLabel}</h4>
                  <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {scenario.includes.map((item) => <li className="flex items-center gap-2 text-xs leading-6 text-steel" key={item}><span aria-hidden="true" className="size-1 rounded-full bg-matrix" />{item}</li>)}
                  </ul>
                  <Link className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-matrix transition hover:text-porcelain" href={scenario.serviceHref}>
                    {explorer.serviceLabel}<ArrowUpRight aria-hidden="true" size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </fieldset>
      </Container>
    </section>
  );
}
