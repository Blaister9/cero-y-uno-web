import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";

import { solutionsPage } from "@/content/solutions";
import { SolutionSelector } from "./solution-selector";
import { SolutionExample } from "./solution-example";

export function SolutionExplorer() {
  const { explorer, scenarios } = solutionsPage;
  return (
    <section
      className="solutions-explore"
      id="escenarios"
      aria-labelledby="solutions-explorer-title"
    >
      <div className="home-container">
        <div className="solutions-explore-heading">
          <div>
            <p className="solutions-mono">{explorer.eyebrow}</p>
            <h2 id="solutions-explorer-title">{explorer.title}</h2>
          </div>
          <p>{explorer.description}</p>
        </div>
        <SolutionSelector>
          <div className="solution-choice-list">
            {scenarios.map((scenario, index) => (
              <label className="solution-choice" key={scenario.id}>
                <input
                  className="sr-only"
                  type="radio"
                  name="solution"
                  value={scenario.id}
                  id={`choose-${scenario.id}`}
                  defaultChecked={index === 0}
                  aria-controls={`scenario-${scenario.id}`}
                />
                <span>
                  <span className="solutions-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong>{scenario.choice}</strong>
                    <small>{scenario.category}</small>
                  </span>
                  <ArrowRight aria-hidden="true" size={16} />
                </span>
              </label>
            ))}
          </div>
          <div className="solution-panels">
            {scenarios.map((scenario, index) => (
              <article
                className={`solution-panel solution-${scenario.id}`}
                id={`scenario-${scenario.id}`}
                aria-labelledby={`title-${scenario.id}`}
                key={scenario.id}
              >
                <div className="solution-panel-top solutions-mono">
                  <span>{scenario.category}</span>
                  <span>{String(index + 1).padStart(2, "0")} / 06</span>
                </div>
                <h3 id={`title-${scenario.id}`}>{scenario.title}</h3>
                <SolutionExample scenario={scenario} />
                <div className="solution-change">
                  <div>
                    <h4>{explorer.beforeLabel}</h4>
                    <p>{scenario.problem}</p>
                  </div>
                  <div>
                    <h4>{explorer.afterLabel}</h4>
                    <p>{scenario.outcome}</p>
                  </div>
                </div>
                <div className="solution-includes">
                  <h4>{explorer.includesLabel}</h4>
                  <ul>
                    {scenario.includes.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="solution-panel-links">
                  <Link
                    className="solutions-text-link"
                    href={scenario.serviceHref}
                  >
                    {explorer.serviceLabel}
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </Link>
                  <a
                    className="solution-share"
                    href={`#scenario-${scenario.id}`}
                  >
                    <LinkIcon aria-hidden="true" size={14} />
                    {explorer.shareLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </SolutionSelector>
      </div>
    </section>
  );
}
