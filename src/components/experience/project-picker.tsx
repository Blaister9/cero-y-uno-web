"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import type { BlockchainDemo } from "@/content/blockchain-demo";
import { projectStories } from "@/content/project-stories";
import { portfolioContent } from "@/content/site";

import { CaseStory } from "./case-story";

export function ProjectPicker({ blockchainDemo }: { blockchainDemo: BlockchainDemo }) {
  const [selected, setSelected] = useState(0);
  const story = projectStories[selected];

  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-4 text-xs text-steel">
        <p id="recorridos-label">{portfolioContent.selectionLabel}</p>
        <span aria-hidden="true" className="tabular-nums">0{selected + 1} / 0{projectStories.length}</span>
      </div>
      <div aria-labelledby="recorridos-label" className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0" role="group">
        {projectStories.map(({ id, kind, label, summary }, index) => {
          const isSelected = index === selected;
          const Arrow = isSelected ? ArrowDown : ArrowUpRight;
          return (
            <button
              aria-controls="proyecto-actual"
              aria-pressed={isSelected}
              className="portfolio-choice relative flex min-h-20 items-center gap-4 border border-white/15 bg-white/[0.015] p-4 text-left text-porcelain hover:border-matrix/60 hover:bg-white/[0.05] focus-visible:z-10 sm:min-h-36 sm:flex-col sm:items-start sm:gap-0 sm:last:col-span-2 lg:min-h-52 lg:p-5 lg:last:col-span-1"
              key={id}
              onClick={() => setSelected(index)}
              type="button"
            >
              <span className="portfolio-choice-detail flex w-12 shrink-0 flex-col items-start gap-1 text-xs text-steel sm:w-full sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                <span className="font-semibold tabular-nums">0{index + 1}</span>
                <span>{kind}</span>
              </span>
              <span className="flex w-full items-center justify-between gap-2 sm:mt-6 sm:items-start lg:mt-8">
                <span className="text-sm font-semibold leading-snug tracking-[-0.02em] sm:max-w-[15ch] sm:text-base lg:text-lg">{label}</span>
                <Arrow aria-hidden="true" className="mt-0.5 shrink-0" size={17} strokeWidth={1.5} />
              </span>
              <span className="portfolio-choice-detail mt-3 hidden text-xs leading-5 text-steel lg:block">{summary}</span>
            </button>
          );
        })}
      </div>
      <p aria-live="polite" aria-atomic="true" className="sr-only">{portfolioContent.storyLabel}: {story.label}.</p>

      <article aria-labelledby="proyecto-titulo" className="mt-12 scroll-mt-24 md:mt-16" id="proyecto-actual">
        <div className="grid gap-5 border-t border-white/15 pt-7 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10 md:pt-9">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-steel">{story.kind} <span className="ml-1 text-matrix">/ 0{selected + 1}</span></p>
            <p className="mt-2 text-sm font-medium text-matrix">{story.label}</p>
          </div>
          <div>
            <h3 className="max-w-[26ch] text-balance text-3xl font-semibold leading-[1.12] text-porcelain md:text-[2.75rem]" id="proyecto-titulo">{story.title}</h3>
            <p className="mt-5 max-w-3xl text-base leading-7 text-steel md:text-lg md:leading-8">{story.description}</p>
          </div>
        </div>
        <CaseStory
          blockchainDemo={story.id === "blockchain" ? blockchainDemo : undefined}
          chapters={story.chapters}
          example={story.example}
          financialDemo={story.financialDemo}
          integrationDemo={story.integrationDemo}
          key={story.id}
          purchaseDemo={story.purchaseDemo}
        />
      </article>
    </>
  );
}
