import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { MatrixStage } from "@/components/home/matrix-stage";
import { CapabilityGallery } from "@/components/home/capability-gallery";
import { capabilitiesContent } from "@/content/capabilities";
import { homeContent } from "@/content/home";

export function HomeIntro() {
  const { hero } = homeContent;
  return (
    <MatrixStage>
      <div className="home-container home-hero-inner">
        <div className="home-hero-copy">
          <p className="home-mono home-eyebrow">{hero.eyebrow}</p>
          <h1 id="inicio-titulo">
            <span>
              {hero.titleLead} <em>{hero.titleAccent}</em>,
            </span>
            {hero.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="home-hero-description">{hero.description}</p>
          <div className="home-hero-actions">
            <a className="home-button" href="#portafolio">
              {hero.primary}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <Link className="home-text-link" href="/contacto">
              {hero.secondary}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </MatrixStage>
  );
}

export function HomeCapabilities() {
  const capabilities = capabilitiesContent;
  return (
    <section
      className="home-capabilities home-container"
      id="servicios"
      aria-labelledby="capacidades-titulo"
    >
      <p className="home-mono home-eyebrow">{capabilities.eyebrow}</p>
      <h2 id="capacidades-titulo">{capabilities.title}</h2>
      <CapabilityGallery />
    </section>
  );
}

export function HomeClosing() {
  const { closing } = homeContent;
  return (
    <section className="home-closing" aria-labelledby="cierre-titulo">
      <div className="home-container">
        <div>
          <h2 id="cierre-titulo">{closing.title}</h2>
          <p>{closing.description}</p>
          <Link className="home-text-link home-team-link" href="/nosotros#equipo">
            {closing.teamAction}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <Link className="home-button" href="/contacto">
          {closing.action}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
