import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CompanyTeamReveal } from "@/components/company/company-team-reveal";
import { siteConfig } from "@/config/site";
import { companyPage } from "@/content/company";

export function CompanyIntro() {
  return (
    <section className="company-intro home-container" aria-labelledby="company-title">
      <div className="company-intro-top company-mono">
        <p>{companyPage.eyebrow}</p>
        <p>{companyPage.signature}</p>
      </div>
      <div className="company-intro-grid">
        <h1 id="company-title">
          {companyPage.title} <span>{companyPage.titleAccent}</span>
        </h1>
        <div className="company-intro-copy">
          <p className="company-lead">{companyPage.description}</p>
          <p>{companyPage.introduction}</p>
          <div className="company-intro-actions">
            <a className="company-button" href="#equipo">
              {companyPage.teamAction} <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a className="company-text-link" href="#como-trabajamos">
              {companyPage.approachAction}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CompanyTeam() {
  const { team } = companyPage;
  return (
    <section className="company-team" id="equipo" aria-labelledby="company-team-title">
      <div className="home-container">
        <div className="company-team-heading">
          <div>
            <p className="company-mono">{team.eyebrow}</p>
            <h2 id="company-team-title">{team.title}</h2>
          </div>
          <div className="company-team-summary">
            <p>{team.description}</p>
            <nav aria-label={team.navigationLabel}>
              {team.members.map((member, index) => (
                <a href={`#perfil-${member.id}`} key={member.id}>
                  <span className="company-mono">0{index + 1}</span>
                  {member.name}
                  <ArrowDown size={14} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
        </div>
        <CompanyTeamReveal>
          {team.members.map((member, index) => (
            <article className="company-person" key={member.id} aria-labelledby={`team-${member.id}`}>
              <div className="company-person-visual">
                <figure className="company-person-figure">
                  <div className="company-person-portrait">
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      width={960}
                      height={1200}
                      priority={index === 0}
                      sizes="(max-width: 700px) 100vw, (max-width: 1344px) 50vw, 624px"
                    />
                  </div>
                  <figcaption aria-hidden="true">
                    <span>{member.focus}</span>
                    <span className="company-mono">0{index + 1} / 02</span>
                  </figcaption>
                </figure>
              </div>
              <div className="company-person-profile" id={`perfil-${member.id}`}>
                <h3 id={`team-${member.id}`}>{member.name}</h3>
                <p className="company-person-role">{member.role}</p>
                {member.expertise.map((expertise) => <p key={expertise}>{expertise}</p>)}
              </div>
            </article>
          ))}
        </CompanyTeamReveal>
      </div>
    </section>
  );
}

export function CompanyClosing() {
  const { closing } = companyPage;
  return (
    <section className="company-closing home-container" aria-labelledby="company-contact-title">
      <p className="company-mono">{closing.eyebrow}</p>
      <div className="company-closing-grid">
        <h2 id="company-contact-title">{closing.title}</h2>
        <div>
          <p>{closing.description}</p>
          <Link className="company-button" href={siteConfig.primaryContactHref}>
            {closing.action} <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <Link className="company-text-link" href="/#portafolio">
            {closing.workAction} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
