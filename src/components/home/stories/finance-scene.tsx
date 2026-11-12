import { Check, CheckCheck, ScanLine } from "lucide-react";
import type { CSSProperties } from "react";

import type { FinancialDemo } from "@/content/project-stories";
import { financeScene as copy } from "@/content/story-scenes";
import { SceneShell, WindowBar, type SceneProps } from "./scene-shell";

export function FinanceScene({
  demo,
  stage,
  progress,
  onStage,
}: SceneProps & { demo: FinancialDemo }) {
  const read = stage >= 1;
  // Each field arrives within the third chapter, so scrolling back restores its empty state.
  const fields = demo.fields.map((field, index) => ({
    ...field,
    amount: Math.max(0, Math.min(1, (progress - 0.5) * 12 - index)),
  }));
  const count = fields.filter((field) => field.amount === 1).length;
  return (
    <SceneShell
      name="finance"
      label={copy.label}
      stage={stage}
      progress={progress}
      image={copy.image}
      status={copy.states[stage]}
    >
      <div className="finance-paper">
        <span className="story-overline">{copy.original}</span>
        <h4>{copy.invoice}</h4>
        <div className="paper-rule" />
        <span className="paper-small">{copy.detail}</span>
        <dl>
          {demo.fields.map((field, index) => (
            <div key={field.label} className="invoice-field" data-read={read}>
              <dt>{field.label}</dt>
              <dd>
                {field.value}
                {read && <Check size={15} aria-hidden="true" />}
              </dd>
              <span className="scan-corner" aria-hidden="true" />
              {fields[index].amount > 0 && fields[index].amount < 1 && (
                <span
                  className="field-travel"
                  style={{ "--travel": fields[index].amount } as CSSProperties}
                  aria-hidden="true"
                >
                  {field.value}
                </span>
              )}
            </div>
          ))}
        </dl>
        <div className="invoice-total">
          <span>{copy.subtotal}</span>
          <strong>{demo.fields[2].value}</strong>
        </div>
        {stage === 1 && (
          <span
            className="invoice-scanner"
            aria-hidden="true"
            style={{ top: `${23 + (progress - 0.25) * 210}%` } as CSSProperties}
          />
        )}
      </div>
      <div className="finance-software">
        <WindowBar title={copy.software} />
        <div className="finance-toolbar">
          <span>{copy.breadcrumb}</span>
          <span className="story-overline">01_</span>
        </div>
        <div className="finance-form">
          <h4>{copy.account}</h4>
          <dl>
            {fields.map((field) => (
              <div
                className="account-field"
                key={field.label}
                data-filled={field.amount === 1}
              >
                <dt>{field.label}</dt>
                <dd>
                  {field.amount > 0 ? (
                    <span>
                      {field.value.slice(
                        0,
                        Math.ceil(field.value.length * field.amount),
                      )}
                      {field.amount < 1 && (
                        <i className="typing-caret" aria-hidden="true" />
                      )}
                    </span>
                  ) : (
                    <span className="empty-input">—</span>
                  )}
                  {field.amount === 1 && <Check size={16} aria-hidden="true" />}
                </dd>
              </div>
            ))}
          </dl>
          <p className="finance-count">
            <ScanLine size={16} aria-hidden="true" />
            {count} / 3 {copy.fieldsCount}
          </p>
          {stage === 0 && (
            <button
              type="button"
              className="story-action"
              onClick={() => onStage?.(1)}
            >
              {copy.action}
            </button>
          )}
          {stage === 3 && (
            <div className="finance-saved">
              <CheckCheck size={22} aria-hidden="true" />
              <div>
                <strong>{copy.saved}</strong>
                <span>{copy.matched}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="finance-keyboard" aria-hidden="true">
        {Array.from({ length: 30 }, (_, index) => (
          <i
            key={index}
            data-pressed={
              stage === 2 && index === Math.floor(progress * 180) % 30
            }
          />
        ))}
      </div>
    </SceneShell>
  );
}
