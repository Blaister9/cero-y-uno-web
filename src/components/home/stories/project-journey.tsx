"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";
import type { BlockchainDemo } from "@/content/blockchain-demo";
import { portfolioContent, type PortfolioId } from "@/content/portfolio";
import { projectStories } from "@/content/project-stories";
import {
  journeyCopy,
  purchaseScene as purchaseCopy,
  integrityScene as integrityCopy,
  inventoryScene as inventoryCopy,
} from "@/content/story-scenes";
import { useStoryProgress } from "@/lib/use-story-progress";
import { FinanceScene } from "./finance-scene";
import { ConversationScene } from "./conversation-scene";
import { PurchaseScene } from "./purchase-scene";
import { IntegrityScene } from "./integrity-scene";
import { InventoryScene } from "./inventory-scene";

export function ProjectJourney({
  id,
  blockchain,
  onExplore,
}: {
  id: PortfolioId;
  blockchain: BlockchainDemo;
  onExplore: (id: PortfolioId) => void;
}) {
  const story = projectStories.find((item) => item.id === id)!;
  const index = portfolioContent.items.findIndex((item) => item.id === id);
  const card = portfolioContent.items[index];
  const next =
    portfolioContent.items[(index + 1) % portfolioContent.items.length];
  const chapters =
    id === "rpa" ? portfolioContent.financialSteps : story.chapters;
  const track = useRef<HTMLDivElement>(null);
  const { progress, stage, linked, selectStage } = useStoryProgress(track, id);
  const advanceScene = (nextStage: number) => {
    selectStage(nextStage);
    requestAnimationFrame(() => {
      document
        .getElementById("journey-caption")
        ?.focus({ preventScroll: true });
    });
  };
  const sceneProps = {
    progress: linked ? progress : Math.min(1, (stage + 1) / 4),
    stage,
    onStage: advanceScene,
  };
  return (
    <article
      id="home-current-project"
      className="story-project"
      data-story={id}
      aria-labelledby="home-project-title"
    >
      <header className="home-project-heading">
        <p className="home-mono" id="home-project-context">
          {card.kind.toUpperCase()}
          <span>
            {" "}
            /{" "}
            {id === "rpa"
              ? "RECREACIÓN CON DATOS FICTICIOS"
              : id === "atencion"
                ? "RECREACIÓN DEL PROTOTIPO"
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
      </header>
      <p className="journey-instruction">
        <ArrowDown size={15} aria-hidden="true" />
        {linked
          ? id === "power-platform"
            ? purchaseCopy.scroll
            : id === "blockchain"
              ? integrityCopy.scroll
              : id === "integraciones"
                ? inventoryCopy.scroll
                : journeyCopy.scroll
          : journeyCopy.manual}
      </p>
      <div className="story-track" data-linked={linked} ref={track}>
        <div className="journey-dock">
          <div
            className="journey-chapters"
            role="group"
            aria-label={journeyCopy.chapterLabel}
          >
            {journeyCopy.stageNames[id].map((name, chapter) => (
              <button
                key={name}
                type="button"
                aria-pressed={chapter === stage}
                aria-controls="journey-scene journey-caption"
                onClick={() => selectStage(chapter)}
              >
                <span className="home-mono">0{chapter + 1}</span>
                <span>{name}</span>
                <i
                  aria-hidden="true"
                  style={{
                    transform: `scaleX(${Math.max(0, Math.min(1, progress * 4 - chapter))})`,
                  }}
                />
              </button>
            ))}
          </div>
          <div id="journey-scene">
            {id === "rpa" && story.financialDemo && (
              <FinanceScene {...sceneProps} demo={story.financialDemo} />
            )}
            {id === "atencion" && <ConversationScene {...sceneProps} />}
            {id === "power-platform" && story.purchaseDemo && (
              <PurchaseScene
                {...sceneProps}
                progress={linked ? progress : [0.16, 0.43, 0.68, 1][stage]}
                demo={story.purchaseDemo}
              />
            )}
            {id === "blockchain" && (
              <IntegrityScene
                {...sceneProps}
                progress={linked ? progress : [0.2, 0.45, 0.7, 1][stage]}
                demo={blockchain}
              />
            )}
            {id === "integraciones" && story.integrationDemo && (
              <InventoryScene
                {...sceneProps}
                progress={linked ? progress : [0.12, 0.36, 0.7, 1][stage]}
                demo={story.integrationDemo}
              />
            )}
          </div>
          <div
            className="journey-caption"
            id="journey-caption"
            tabIndex={-1}
            aria-live={linked ? "off" : "polite"}
            aria-atomic="true"
          >
            <div className="journey-caption-title">
              <span className="home-mono">0{stage + 1} / 04</span>
              <h4>{chapters[stage].title}</h4>
            </div>
            <p>{chapters[stage].body}</p>
            <div className="journey-arrows">
              <button
                type="button"
                aria-label="Etapa anterior"
                disabled={stage === 0}
                onClick={() => selectStage(stage - 1)}
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Etapa siguiente"
                disabled={stage === 3}
                onClick={() => selectStage(stage + 1)}
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="journey-after">
        <p>{journeyCopy.mediaNote}</p>
        <details className="journey-transcript">
          <summary>{journeyCopy.readAll}</summary>
          <ol>
            {chapters.map((chapter) => (
              <li key={chapter.title}>
                <h4>{chapter.title}</h4>
                <p>{chapter.body}</p>
                {chapter.detail && <p>{chapter.detail}</p>}
              </li>
            ))}
          </ol>
        </details>
      </div>
      <nav className="journey-next" aria-label="Continuar explorando proyectos">
        <a href="#portafolio">
          <ArrowUp size={16} aria-hidden="true" />
          {journeyCopy.back}
        </a>
        <button type="button" onClick={() => onExplore(next.id)}>
          <span>
            <small>{journeyCopy.next}</small>
            {next.label}
          </span>
          <ArrowRight size={24} aria-hidden="true" />
        </button>
      </nav>
    </article>
  );
}
