import { ArrowUpRight, Check, FileText } from "lucide-react";
import Image from "next/image";

import { solutionsPage } from "@/content/solutions";

export function SolutionJourney() {
  const example = solutionsPage.heroExample;
  return (
    <figure className="solution-journey">
      <div className="solution-desk">
        <Image
          src={example.image}
          alt=""
          fill
          sizes="(max-width: 1400px) 100vw, 1280px"
          priority
        />
        <div className="solution-desk-paper" aria-hidden="true">
          <span className="solutions-mono">{example.documentLabel}</span>
          <FileText size={24} />
          <strong>{example.subject}</strong>
          <ul>
            {example.fields.map((field) => (
              <li key={field}>
                <Check size={14} />
                {field}
              </li>
            ))}
          </ul>
          <span className="solution-paper-status">
            {example.status}
            <ArrowUpRight size={16} />
          </span>
        </div>
        <div className="solution-desk-copy">
          <p className="solutions-mono">{example.label}</p>
          <strong>{example.title}</strong>
          <p>{example.note}</p>
        </div>
      </div>
      <figcaption>
        <span>{example.connection}</span>
        <small>{example.disclosure}</small>
      </figcaption>
    </figure>
  );
}
