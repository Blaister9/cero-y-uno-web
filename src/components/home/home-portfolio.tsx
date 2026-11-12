"use client";

import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

import type { BlockchainDemo } from "@/content/blockchain-demo";
import {
  portfolioContent,
  type PortfolioCard,
  type PortfolioId,
} from "@/content/portfolio";

import { ProjectJourney } from "./stories/project-journey";
import { ProjectCover } from "./project-cover";

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
        behavior:
          id !== selected ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
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
        <ProjectJourney
          key={selected}
          id={selected}
          blockchain={blockchain}
          onExplore={explore}
        />
      </div>
    </section>
  );
}
