import { ArrowDown, ArrowUpRight, Blocks, GitBranch, ScanLine } from "lucide-react";
import type { CSSProperties } from "react";

import type { companyPage } from "@/content/company";

type Approach = typeof companyPage.approach;
const principleIcons = [ScanLine, Blocks, GitBranch];

export function CompanyPrinciples({ content }: { content: Approach }) {
  return (
    <section className="company-approach" id="como-trabajamos" aria-labelledby="company-approach-title">
      <div className="home-container company-approach-grid">
        <div className="company-approach-intro">
          <p className="company-mono">{content.eyebrow}</p>
          <h2 id="company-approach-title">{content.title}</h2>
          <p>{content.description}</p>
          <nav aria-label={content.navigationLabel}>
            {content.cards.map((card, index) => (
              <a key={card.id} href={`#${card.id}`}>
                <span className="company-mono">0{index + 1}</span>
                {card.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
        <ol className="company-card-stack">
          {content.cards.map((card, index) => {
            const Icon = principleIcons[index];
            return (
              <li className={`company-principle company-principle-${card.id}`} id={card.id} key={card.id}
                style={{ "--card-index": index } as CSSProperties}>
                <article aria-labelledby={`principle-${card.id}`}>
                  <div className="company-card-label company-mono">
                    <span>0{index + 1} / {card.principle}</span>
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <h3 id={`principle-${card.id}`}>{card.title}</h3>
                  <p className="company-card-description">{card.description}</p>
                  <figure className={`company-principle-diagram company-diagram-${card.id}`}>
                    <div aria-hidden="true">
                      <div className="company-diagram-nodes">
                        {card.diagram.map((label, node) => (
                          <span key={label}><i className="company-diagram-mark">0{node + 1}</i>{label}</span>
                        ))}
                      </div>
                      <div className="company-diagram-join"><ArrowDown size={18} /></div>
                      <div className="company-diagram-result"><Icon size={18} /> {card.diagramResult}</div>
                    </div>
                    <figcaption className="sr-only">{card.diagramCaption}</figcaption>
                  </figure>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
