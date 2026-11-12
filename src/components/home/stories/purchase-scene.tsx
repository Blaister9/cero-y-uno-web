import {
  ArrowDownRight,
  Check,
  CheckCheck,
  ClipboardList,
  Send,
} from "lucide-react";
import type { PurchaseDemo } from "@/content/project-stories";
import { purchaseScene as copy } from "@/content/story-scenes";
import { SceneShell, type SceneProps } from "./scene-shell";

export function PurchaseScene({
  demo,
  stage,
  progress,
  onStage,
}: SceneProps & { demo: PurchaseDemo }) {
  return (
    <SceneShell
      name="purchase"
      label={copy.label}
      image={copy.image}
      stage={stage}
      progress={progress}
      status={copy.states[stage]}
    >
      <div className="purchase-tablet">
        <div className="tablet-camera" aria-hidden="true" />
        <div className="tablet-screen">
          <div className="purchase-appbar">
            <ClipboardList size={19} aria-hidden="true" />
            {copy.app}
            <span>01_</span>
          </div>
          {stage < 3 ? (
            <div className="purchase-form">
              <span className="story-overline">{demo.reference}</span>
              <h4>{stage === 2 ? copy.request : copy.form}</h4>
              <dl>
                {[demo.item, demo.quantity, demo.team].map((value, index) => (
                  <div key={value}>
                    <dt>{copy.labels[index]}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="purchase-submit" data-approved={stage === 2}>
                {stage === 2 ? (
                  <CheckCheck size={18} aria-hidden="true" />
                ) : (
                  <Send size={16} aria-hidden="true" />
                )}
                {stage === 2 ? copy.approved : copy.submitted}
              </div>
            </div>
          ) : (
            <div className="purchase-report">
              <span className="story-overline">{copy.technologies[3]}</span>
              <h4>{copy.report}</h4>
              <div className="report-bars">
                <div>
                  <strong>{demo.pending - 1}</strong>
                  <span style={{ height: "32%" }} />
                  <p>{copy.pendingLabel}</p>
                </div>
                <div>
                  <strong>{demo.approved + 1}</strong>
                  <span style={{ height: "85%" }} />
                  <p>{copy.approvedLabel}</p>
                </div>
              </div>
              <p className="report-note">
                <ArrowDownRight size={20} aria-hidden="true" />
                {copy.reportNote}
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        className="purchase-decision"
        data-visible={stage >= 1}
        aria-hidden={stage < 1}
      >
        <span className="story-overline">
          {stage === 1 ? copy.approval : copy.decision}
        </span>
        <h4>{demo.reference}</h4>
        <p>
          {demo.item} · {demo.quantity}
        </p>
        <p>{demo.team}</p>
        <div className="decision-signature">
          <span>{copy.reviewer}</span>
          {stage >= 2 ? (
            <strong>
              <Check size={20} aria-hidden="true" />
              {copy.approved}
            </strong>
          ) : (
            <strong>{copy.pending}</strong>
          )}
        </div>
        {stage === 1 && (
          <button
            type="button"
            className="story-action"
            onClick={() => onStage?.(2)}
          >
            {copy.action}
          </button>
        )}
        <span
          className="decision-stamp"
          data-visible={stage >= 2}
          aria-hidden={stage < 2}
        >
          {copy.approved}
        </span>
      </div>
      <div className="purchase-technology story-overline">
        {copy.technologies[stage]}
      </div>
    </SceneShell>
  );
}
