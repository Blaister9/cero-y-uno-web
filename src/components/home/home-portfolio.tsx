"use client";

import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { useRef, useState } from "react";

import type { BlockchainDemo } from "@/content/blockchain-demo";
import {
  portfolioContent,
  type PortfolioCard,
  type PortfolioId,
} from "@/content/portfolio";
import { projectStories } from "@/content/project-stories";
import { useStoryProgress } from "@/lib/use-story-progress";

import { ExampleDemo } from "./example-demo";
import { FinancialDemo } from "./financial-demo";
import { ProjectCover } from "./project-cover";

const orderedStories = portfolioContent.items.map(
  (card) => projectStories.find((story) => story.id === card.id)!,
);

export function HomePortfolio({ blockchain }: { blockchain: BlockchainDemo }) {
  const [selected, setSelected] = useState<PortfolioId>("rpa");
  const portfolio = portfolioContent;
  const explore = (id: PortfolioId) => {
    setSelected(id);
    requestAnimationFrame(() => {
      const article = document.getElementById("home-current-project");
      document
        .getElementById("home-project-title")
        ?.focus({ preventScroll: true });
      article?.scrollIntoView({
        block: "start",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    });
  };

  const projectButton = (
    card: PortfolioCard,
    index: number,
    compact = false,
  ) => (
    <button
      type="button"
      className={`home-project-choice${compact ? " home-project-choice-compact" : ""}`}
      key={card.id}
      aria-label={`${portfolio.exploreLabel}: ${card.label}. ${card.kind}.`}
      aria-controls="home-current-project"
      aria-pressed={selected === card.id}
      onClick={() => explore(card.id)}
    >
      <ProjectCover card={card} compact={compact} />
      <span className="home-project-card-meta home-mono">
        <span>
          {String(index + 1).padStart(2, "0")} / {card.kind.toUpperCase()}
        </span>
        {selected === card.id && (
          <span className="home-project-current">
            <Check size={12} aria-hidden="true" />
            {portfolio.activeLabel}
          </span>
        )}
      </span>
      <span className="home-project-card-title">
        {card.label}
        {selected === card.id ? (
          <ArrowDown size={22} aria-hidden="true" />
        ) : (
          <ArrowUpRight size={22} aria-hidden="true" />
        )}
      </span>
      {!compact && (
        <span className="home-project-card-summary">{card.summary}</span>
      )}
    </button>
  );
  return (
    <section
      className="home-portfolio"
      id="portafolio"
      aria-labelledby="portafolio-titulo"
    >
      <div className="home-container">
        <p className="home-mono home-eyebrow">{portfolio.eyebrow}</p>
        <div className="home-section-heading">
          <h2 id="portafolio-titulo">{portfolio.title}</h2>
          <p>{portfolio.description}</p>
        </div>
        <div
          className="home-primary-projects"
          role="group"
          aria-label="Proyectos para explorar"
        >
          {portfolio.items
            .slice(0, 2)
            .map((card, index) => projectButton(card, index))}
        </div>
        <p
          className="home-examples-label home-mono"
          id="portfolio-examples-label"
        >
          {portfolio.examplesLabel}
        </p>
        <div
          className="home-secondary-projects"
          role="group"
          aria-labelledby="portfolio-examples-label"
        >
          {portfolio.items
            .slice(2)
            .map((card, index) => projectButton(card, index + 2, true))}
        </div>
        <p className="home-portfolio-media-note">{portfolio.imageNote}</p>
        <ProjectJourney key={selected} id={selected} blockchain={blockchain} />
      </div>
    </section>
  );
}

function ProjectJourney({
  id,
  blockchain,
}: {
  id: string;
  blockchain: BlockchainDemo;
}) {
  const story = orderedStories.find((item) => item.id === id)!;
  const card = portfolioContent.items.find((item) => item.id === id)!;
  const chapters =
    id === "rpa" ? portfolioContent.financialSteps : story.chapters;
  const track = useRef<HTMLDivElement>(null);
  const { progress, stage, linked, selectStage } = useStoryProgress(track, id);
  return (
    <article
      id="home-current-project"
      className="home-project"
      aria-labelledby="home-project-title"
    >
      <div className="home-project-heading">
        <p className="home-mono" id="home-project-context">
          {card.kind.toUpperCase()}
          <span>
            {" "}
            /{" "}
            {id === "rpa"
              ? "RECREACIÓN CON DATOS FICTICIOS"
              : id === "atencion"
                ? "ATENCIÓN EN TIEMPO REAL"
                : "DATOS FICTICIOS"}
          </span>
        </p>
        <h3
          id="home-project-title"
          tabIndex={-1}
          aria-describedby="home-project-context"
        >
          {story.title}
        </h3>
        <p>{story.description}</p>
      </div>
      <div className="home-journey" ref={track} data-linked={linked}>
        <ol className="home-narrative">
          {chapters.map((chapter, index) => (
            <li
              key={chapter.title}
              id={`etapa-${id}-${index + 1}`}
              data-active={stage === index}
            >
              <span className="home-mono">0{index + 1} / 04</span>
              <h4>{chapter.title}</h4>
              <p>{chapter.body}</p>
              {chapter.detail && (
                <p className="home-chapter-detail">{chapter.detail}</p>
              )}
            </li>
          ))}
        </ol>
        <div className="home-demo-column">
          <div className="home-demo-dock">
            <div
              className="home-step-nav"
              role="group"
              aria-label="Etapas de la demostración"
            >
              {chapters.map((chapter, index) => (
                <button
                  type="button"
                  key={chapter.title}
                  aria-label={`Etapa ${index + 1}: ${chapter.title}`}
                  aria-pressed={stage === index}
                  aria-controls="home-demo-scene"
                  onClick={() => selectStage(index)}
                >
                  0{index + 1}
                </button>
              ))}
              <button
                className="home-result-button"
                type="button"
                onClick={() => selectStage(3)}
                aria-controls="home-demo-scene"
              >
                Ver resultado
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            </div>
            <div id="home-demo-scene">
              {story.financialDemo ? (
                <FinancialDemo
                  demo={story.financialDemo}
                  progress={progress}
                  linked={linked}
                />
              ) : (
                <ExampleDemo id={id} stage={stage} blockchain={blockchain} />
              )}
            </div>
            <p
              className="home-current-step"
              aria-live={linked ? "off" : "polite"}
            >
              <span className="home-mono">0{stage + 1}</span>
              {chapters[stage].title}
            </p>
            <p className="home-scroll-hint home-mono">
              {linked
                ? "AVANZA O VUELVE CON EL SCROLL"
                : "EXPLORA LAS CUATRO ETAPAS"}
            </p>
          </div>
        </div>
      </div>
      <noscript>
        <p>
          Resultado de la recreación: referencia DEMO-014, concepto Compra de
          insumos, importe 150.000 CLP. Registro completo con datos ficticios.
        </p>
      </noscript>
    </article>
  );
}
