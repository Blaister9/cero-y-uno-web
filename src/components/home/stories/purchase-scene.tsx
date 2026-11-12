import Image from "next/image";
import {
  ArrowRight,
  Check,
  CheckCheck,
  ClipboardList,
  Send,
} from "lucide-react";
import type { CSSProperties } from "react";
import type { PurchaseDemo } from "@/content/project-stories";
import { purchaseScene as copy } from "@/content/story-scenes";
import { getPowerFrame } from "@/lib/power-journey";
import { SceneShell, type SceneProps } from "./scene-shell";

export function PurchaseScene({
  demo,
  stage,
  progress,
}: SceneProps & { demo: PurchaseDemo }) {
  const frame = getPowerFrame(progress);
  const pending = demo.pending - Number(frame.recorded);
  const approved = demo.approved + Number(frame.recorded);
  const variables = {
    "--power-camera": frame.camera,
    "--power-mobile-camera": frame.mobileCamera,
    "--power-departure": frame.departure,
    "--power-report": frame.report,
    "--power-paper": frame.paper,
    "--power-ink": frame.ink,
    "--power-stamp": frame.stamp,
    "--power-stamp-y": `${frame.stampY}px`,
    "--power-stamp-scale": frame.stampScale,
    "--power-transfer": frame.transfer,
  } as CSSProperties;
  return (
    <SceneShell
      name="purchase"
      label={copy.label}
      stage={stage}
      progress={progress}
      status={copy.states[stage]}
    >
      <div className="power-camera" style={variables}>
        <div className="power-world">
          <div className="power-office" aria-hidden="true">
            <Image
              src={copy.image}
              alt=""
              fill
              sizes="(max-width: 600px) 100vw, 800px"
            />
            <div className="power-office-caption">
              <span>{copy.team}</span>
              <strong>{copy.need}</strong>
            </div>
          </div>
          <div className="power-desk" aria-hidden="true" />
          <div className="power-flow" aria-hidden="true">
            <span>{copy.referenceLine}</span>
            <i />
            <ArrowRight size={18} />
          </div>
          <div className="power-tablet" aria-hidden={progress > 0.48}>
            <div className="power-tablet-camera" />
            <div className="power-appbar">
              <ClipboardList size={16} aria-hidden="true" />
              {copy.app}
              <span>01_</span>
            </div>
            <div className="power-form">
              <span className="story-overline">{copy.technologies[0]}</span>
              <h4>{copy.form}</h4>
              <dl>
                {[demo.item, demo.quantity, demo.team].map((value, index) => (
                  <div key={copy.labels[index]}>
                    <dt>{copy.labels[index]}</dt>
                    <dd>
                      <span>
                        {value.slice(
                          0,
                          Math.ceil(value.length * frame.fields[index]),
                        )}
                      </span>
                      <Check
                        size={14}
                        aria-hidden="true"
                        style={{ opacity: frame.fields[index] }}
                      />
                    </dd>
                  </div>
                ))}
              </dl>
              <div
                className="power-submit"
                style={{ opacity: frame.fields[2] }}
              >
                <Send size={14} aria-hidden="true" />
                {copy.submitted}
              </div>
              <span className="power-form-reference">{demo.reference}</span>
            </div>
          </div>
          <div className="power-inbox-label" aria-hidden="true">
            <span className="story-overline">{copy.technologies[1]}</span>
            <strong>{copy.approval}</strong>
          </div>
          <div className="power-paper" aria-hidden={progress < 0.2}>
            <div className="power-paper-top">
              <ClipboardList size={18} aria-hidden="true" />
              <span>{copy.request}</span>
            </div>
            <span className="power-paper-reference">{demo.reference}</span>
            <h4>{demo.item}</h4>
            <div className="power-paper-detail">
              <strong>{demo.quantity}</strong>
              <span>{demo.team}</span>
            </div>
            <div className="power-paper-rules" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="power-signature">
              <span>{copy.reviewer}</span>
              <svg viewBox="0 0 160 36" aria-hidden="true">
                <path
                  d="M8 26 Q24 4 32 12 T45 22 Q58 1 65 14 T79 22 Q85 8 92 18 T107 20 L151 17"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={1 - frame.ink}
                />
              </svg>
            </div>
            <span className="power-impression" aria-hidden={!frame.approved}>
              <Check size={20} aria-hidden="true" />
              {copy.approved}
            </span>
            <span className="power-paper-state">
              {frame.approved ? copy.decision : copy.pending}
            </span>
            <Image
              className="power-rubber-stamp"
              src={copy.stampImage}
              alt=""
              width={480}
              height={320}
              sizes="160px"
              aria-hidden="true"
            />
          </div>
          <div className="power-report" aria-hidden={progress < 0.72}>
            <span className="story-overline">
              {copy.technologies[3]} / {copy.report}
            </span>
            <h4>{copy.reportHeading}</h4>
            <div className="power-report-counts">
              <div>
                <strong>{pending.toString().padStart(2, "0")}</strong>
                <span>{copy.pendingLabel}</span>
              </div>
              <ArrowRight size={22} aria-hidden="true" />
              <div>
                <strong>{approved.toString().padStart(2, "0")}</strong>
                <span>{copy.approvedLabel}</span>
              </div>
            </div>
            <svg
              className="power-report-chart"
              viewBox="0 0 520 140"
              preserveAspectRatio="xMinYMid meet"
              role="img"
              aria-label={`${pending} ${copy.pendingLabel.toLowerCase()}, ${approved} ${copy.approvedLabel.toLowerCase()}`}
            >
              <path d="M16 35H504M16 110H504" stroke="#ffffff20" fill="none" />
              <path
                d="M150 35C260 35 260 110 330 110"
                fill="none"
                stroke="#b3ca9d"
                strokeDasharray="4 8"
                opacity=".35"
              />
              {[30, 90].map((x) => (
                <circle key={x} cx={x} cy="35" r="13" fill="#c5b5d6" />
              ))}
              {[30, 90, 150, 210, 270].map((x) => (
                <circle key={x} cx={x} cy="110" r="13" fill="#688d69" />
              ))}
              <circle
                className="power-report-entry"
                cx={frame.entryX}
                cy={frame.entryY}
                r="14"
                fill="#e2edc6"
                stroke="#fff"
                strokeWidth="2"
              />
            </svg>
            <div
              className="power-report-record"
              style={{ opacity: frame.transfer }}
            >
              <CheckCheck size={18} aria-hidden="true" />
              <strong>{demo.reference}</strong>
              <span>{copy.approved}</span>
            </div>
            <p>{copy.reportNote}</p>
          </div>
        </div>
        <div className="power-route" aria-hidden="true">
          {copy.technologies.map((name, index) => (
            <span key={name} data-current={stage === index}>
              <i />
              {name}
            </span>
          ))}
        </div>
      </div>
    </SceneShell>
  );
}
