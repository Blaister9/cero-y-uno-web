import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCheck,
  Clock3,
  FileText,
  MessageSquare,
  Paperclip,
  Quote,
  UserRound,
} from "lucide-react";
import { solutionsPage } from "@/content/solutions";
import { solutionVisuals as visual } from "@/content/solution-visuals";

type Scenario = (typeof solutionsPage.scenarios)[number];
export function SolutionExample({ scenario }: { scenario: Scenario }) {
  return (
    <figure className="solution-example">
      <div className="solution-canvas" aria-hidden="true">
        {scenario.id === "plataformas-internas" && (
          <div className="solution-casefile">
            <div className="solution-case-head">
              <span>{visual.record.id}</span>
              <span>
                <UserRound size={13} />
                {visual.record.owner}
              </span>
            </div>
            <strong>{scenario.preview.subtitle}</strong>
            <p>{scenario.preview.rows[0].value}</p>
            <div className="solution-case-context">
              <span>
                <Paperclip size={16} />
                {visual.record.attached}
              </span>
              <span>
                <MessageSquare size={16} />
                {visual.record.discussion}
              </span>
            </div>
            <div className="solution-case-status">
              <span className="solution-status-dot" />
              {visual.record.status}
              <span>{scenario.preview.result}</span>
            </div>
          </div>
        )}
        {scenario.id === "portales-corporativos" && (
          <div className="solution-portal">
            <div className="solution-portal-sidebar">
              <FileText size={28} />
              <strong>{scenario.preview.title}</strong>
              <small>{visual.portal.note}</small>
            </div>
            <div className="solution-portal-main">
              <strong>{visual.portal.heading}</strong>
              <div className="solution-upload-done">
                <Check size={18} />
                <span>{visual.portal.received}</span>
              </div>
              <div className="solution-upload-missing">
                <Paperclip size={22} />
                <strong>{visual.portal.file}</strong>
                <span>{visual.portal.missing}</span>
              </div>
              <p>{visual.portal.next}</p>
            </div>
          </div>
        )}
        {scenario.id === "automatizacion-operativa" && (
          <div className="solution-routing">
            <div className="solution-route-start">
              <span>
                <FileText size={18} />
                {visual.approval.request}
              </span>
              <ArrowDown size={20} />
              <span>
                <UserRound size={18} />
                {visual.approval.owner}
              </span>
            </div>
            <div className="solution-route-branch">
              <span>
                <Clock3 size={15} />
                {visual.approval.unavailable}
              </span>
              <ArrowRight size={22} />
              <div>
                <strong>{visual.approval.substitute}</strong>
                <small>{visual.approval.caption}</small>
              </div>
            </div>
            <div className="solution-route-end">
              <CheckCheck size={18} />
              {visual.approval.result}
            </div>
          </div>
        )}
        {scenario.id === "integracion-de-sistemas" && (
          <div className="solution-exchange">
            <div className="solution-exchange-head">
              <span>{visual.integration.order}</span>
              <span>{visual.integration.id}</span>
              <ArrowRight size={18} />
              <span>{visual.integration.inventory}</span>
            </div>
            <ol>
              {visual.integration.events.map(([number, event, result]) => (
                <li key={number}>
                  <span>{number}</span>
                  <strong>{event}</strong>
                  <span>{result}</span>
                </li>
              ))}
            </ol>
            <div className="solution-exchange-result">
              <CheckCheck size={22} />
              <div>
                <strong>{visual.integration.confirmation}</strong>
                <small>{visual.integration.note}</small>
              </div>
              <span>{visual.integration.result}</span>
            </div>
          </div>
        )}
        {scenario.id === "tableros-gerenciales" && (
          <div className="solution-report">
            <div className="solution-report-heading">
              <strong>{visual.report.title}</strong>
              <small>{visual.report.updated}</small>
            </div>
            <div className="solution-report-table">
              <div className="solution-report-columns">
                {visual.report.columns.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              {visual.report.rows.map(([team, ready, pending]) => (
                <div key={team}>
                  <span>{team}</span>
                  <span className="solution-report-count">{ready}</span>
                  <span className="solution-report-alert">{pending}</span>
                </div>
              ))}
            </div>
            <div className="solution-report-detail">
              <span>{visual.report.detail}</span>
              <strong>{visual.report.record}</strong>
              <small>{visual.report.date}</small>
            </div>
            <p>{visual.report.source}</p>
          </div>
        )}
        {scenario.id === "ia-aplicada" && (
          <div className="solution-assistant">
            <div className="solution-answer">
              <p>
                <MessageSquare size={16} />
                {visual.assistant.question}
              </p>
              <div>
                <Quote size={23} />
                <strong>{visual.assistant.answer}</strong>
                <span className="solution-citation">
                  {visual.assistant.citation}
                </span>
              </div>
              <small>
                <UserRound size={13} />
                {visual.assistant.review}
              </small>
            </div>
            <div className="solution-source">
              <FileText size={20} />
              <small>{visual.assistant.title}</small>
              <strong>{visual.assistant.document}</strong>
              <p>{visual.assistant.excerpt}</p>
              <span>{visual.assistant.note}</span>
            </div>
          </div>
        )}
      </div>
      <figcaption>
        <span className="solutions-mono">
          {solutionsPage.explorer.exampleLabel}
        </span>
        <strong>{scenario.preview.result}</strong>
      </figcaption>
    </figure>
  );
}
