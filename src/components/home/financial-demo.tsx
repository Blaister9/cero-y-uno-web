import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCheck,
  FileText,
  ScanLine,
} from "lucide-react";
import type { CSSProperties } from "react";

import type { FinancialDemo as Demo } from "@/content/project-stories";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function FinancialDemo({
  demo,
  progress,
  linked,
}: {
  demo: Demo;
  progress: number;
  linked: boolean;
}) {
  const identified = demo.fields.map((_, i) =>
    linked
      ? clamp((progress - (0.25 + i / 12)) * 12)
      : Number(progress >= 0.25),
  );
  const transferred = demo.fields.map((_, i) =>
    linked ? clamp((progress - (0.5 + i / 12)) * 12) : Number(progress >= 0.5),
  );
  const completed = progress >= 0.75;
  return (
    <figure
      className="home-financial"
      aria-label="Documento y registro contable"
    >
      <figcaption className="home-demo-bar">
        <span>
          <FileText size={16} aria-hidden="true" />
          Del documento al registro
        </span>
        <span className="home-mono">RPA / 01</span>
      </figcaption>
      <div className="home-financial-workspace">
        <div className="home-document">
          <div className="home-document-heading">
            <span className="home-mono">DOCUMENTO DE COMPRA</span>
            <FileText size={24} strokeWidth={1.25} aria-hidden="true" />
          </div>
          <div className="home-document-lines" aria-hidden="true">
            <i />
            <i />
          </div>
          <dl>
            {demo.fields.map((field, i) => (
              <div
                className="home-source-field"
                data-identified={identified[i] > 0}
                key={field.label}
                style={{ "--identified": identified[i] } as CSSProperties}
              >
                <dt>{field.label}</dt>
                <dd>
                  {field.value}
                  {identified[i] >= 1 && <Check size={12} aria-hidden="true" />}
                </dd>
              </div>
            ))}
          </dl>
          <p className="home-document-note home-mono">DOCUMENTO FICTICIO</p>
        </div>
        <div className="home-transfer-lane" aria-hidden="true">
          <ArrowRight size={20} className="home-transfer-arrow" />
          <ArrowDown size={20} className="home-transfer-down" />
          {transferred.map((value, i) =>
            value > 0 && value < 1 && linked ? (
              <span
                className="home-data-packet home-mono"
                key={i}
                style={{
                  left: `${-450 + value * 1000}%`,
                  top: `${35 + i * 55}px`,
                }}
              >
                {demo.fields[i].value}
              </span>
            ) : null,
          )}
        </div>
        <div className="home-register">
          <p className="home-mono">REGISTRO CONTABLE</p>
          <div className="home-register-id">
            <span className="home-mono">NUEVO REGISTRO</span>
            <span className="home-mono">001</span>
          </div>
          <dl>
            {demo.fields.map((field, i) => (
              <div
                className="home-target-field"
                data-filled={transferred[i] >= 1}
                key={field.label}
              >
                <dt>{field.label}</dt>
                <dd>
                  <span
                    aria-hidden={transferred[i] < 1}
                    style={{
                      opacity: linked
                        ? transferred[i]
                        : Number(transferred[i] >= 1),
                    }}
                  >
                    {field.value}
                  </span>
                  {transferred[i] >= 1 ? (
                    <Check size={14} aria-hidden="true" />
                  ) : (
                    <span className="home-empty-field" aria-label="Campo vacío">
                      —
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="home-record-status" data-complete={completed}>
            {completed ? (
              <CheckCheck size={16} aria-hidden="true" />
            ) : (
              <ScanLine size={16} aria-hidden="true" />
            )}
            <span>
              {completed
                ? "Registro completo"
                : progress >= 0.5
                  ? "Registrando información"
                  : progress >= 0.25
                    ? "Identificando campos"
                    : "Pendiente de registro"}
            </span>
          </div>
        </div>
      </div>
      <div className="home-demo-footnote">
        <span className="home-mono">RECREACIÓN · DATOS FICTICIOS</span>
        <span className="home-demo-count home-mono">
          {transferred.filter((v) => v >= 1).length} / 3 campos
        </span>
      </div>
      <div className="home-scene-progress" aria-hidden="true">
        <span style={{ width: `${progress * 100}%` }} />
      </div>
    </figure>
  );
}
