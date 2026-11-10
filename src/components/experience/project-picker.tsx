"use client";

import { ArrowUpRight, Blocks, Bot, LayoutGrid, MessagesSquare, Plug } from "lucide-react";
import { useState } from "react";

import type { BlockchainDemo } from "@/content/blockchain-demo";
import { projectStories } from "@/content/project-stories";

import { CaseStory } from "./case-story";

const icons = [MessagesSquare, Bot, LayoutGrid, Blocks, Plug];

export function ProjectPicker({ blockchainDemo }: { blockchainDemo: BlockchainDemo }) {
  const [selected, setSelected] = useState(0);
  const story = projectStories[selected];

  return (
    <>
      <div aria-label="Elegir un proyecto o ejemplo" className="-mx-2 mt-8 flex gap-3 overflow-x-auto px-2 pb-4 lg:grid lg:grid-cols-5" role="group">
        {projectStories.map(({ id, kind, label }, index) => {
          const Icon = icons[index];
          return (
            <button
              aria-controls="proyecto-actual"
              aria-pressed={index === selected}
              className="glass-panel glass-interactive relative flex min-h-28 w-44 shrink-0 flex-col items-start justify-between gap-4 overflow-hidden rounded-xl border border-white/15 p-4 text-left transition hover:border-signal/50 aria-pressed:border-signal/60 lg:w-auto"
              key={id}
              onClick={() => setSelected(index)}
              type="button"
            >
              <span className="flex w-full items-center justify-between gap-2 text-xs text-steel">
                <Icon aria-hidden="true" className="text-signal" size={18} />
                {kind}
              </span>
              <span className="flex w-full items-center justify-between gap-2 text-sm font-medium text-porcelain">
                {label}
                <ArrowUpRight aria-hidden="true" className="shrink-0 text-signal" size={14} />
              </span>
            </button>
          );
        })}
      </div>

      <article aria-labelledby="proyecto-titulo" className="mt-9 border-t border-white/10 pt-9" id="proyecto-actual">
        <p className="text-sm text-signal">{story.kind} · {story.label}</p>
        <h3 className="mt-3 text-balance text-3xl font-semibold leading-tight text-porcelain md:text-5xl" id="proyecto-titulo">{story.title}</h3>
        <p className="mt-4 max-w-3xl text-base leading-7 text-steel md:text-lg">{story.description}</p>
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
