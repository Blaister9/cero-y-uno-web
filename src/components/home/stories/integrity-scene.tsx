import { Check, Fingerprint, Link2, ShieldCheck, ShieldX } from "lucide-react";
import type { BlockchainDemo } from "@/content/blockchain-demo";
import { integrityScene as copy } from "@/content/story-scenes";
import { SceneShell, type SceneProps } from "./scene-shell";

export function IntegrityScene({
  demo,
  stage,
  progress,
  onStage,
}: SceneProps & { demo: BlockchainDemo }) {
  const hash = stage === 3 ? demo.changedHash : demo.originalHash;
  return (
    <SceneShell
      name="integrity"
      label={copy.label}
      image={copy.image}
      stage={stage}
      progress={progress}
      status={copy.states[stage]}
    >
      <div className="integrity-document">
        <span className="story-overline">{copy.reference}</span>
        <h4>{copy.document}</h4>
        <div className="paper-rule" />
        <p className="document-variant">
          {stage < 2 ? copy.original : stage === 2 ? copy.copy : copy.changed}
        </p>
        <p className="document-sentence">
          {demo.original.split(":")[0]}:{" "}
          {stage === 3 ? (
            <mark>{demo.changed.split(":")[1].trim()}</mark>
          ) : (
            <span>{demo.original.split(":")[1].trim()}</span>
          )}
        </p>
        <div className="document-fingerprint">
          <Fingerprint size={30} aria-hidden="true" />
          <span>
            {copy.hash}
            <code>{hash.slice(0, 16)}…</code>
          </span>
        </div>
      </div>
      <div className="integrity-proof">
        <span className="story-overline">{copy.record}</span>
        <div className="chain-records" aria-hidden="true">
          <span>001</span>
          <Link2 size={22} />
          <span className={stage >= 1 ? "chain-recorded" : ""}>002</span>
          <Link2 size={22} />
          <span>003</span>
        </div>
        <div className="hash-comparison">
          <p>{copy.savedHash}</p>
          <code>{stage >= 1 ? demo.originalHash : "—"}</code>
          {stage >= 2 && (
            <>
              <p>{copy.receivedHash}</p>
              <code data-changed={stage === 3}>
                {hash.split("").map((character, i) => (
                  <span
                    key={i}
                    data-different={character !== demo.originalHash[i]}
                  >
                    {character}
                  </span>
                ))}
              </code>
            </>
          )}
        </div>
        {stage >= 2 ? (
          <div className="integrity-verdict" data-changed={stage === 3}>
            {stage === 3 ? (
              <ShieldX size={28} aria-hidden="true" />
            ) : (
              <ShieldCheck size={28} aria-hidden="true" />
            )}
            <strong>{stage === 3 ? copy.mismatch : copy.match}</strong>
          </div>
        ) : (
          <p className="integrity-storage">
            <Check size={16} aria-hidden="true" />
            {copy.noRecord}
          </p>
        )}
        <p className="integrity-limit">{copy.limit}</p>
        {stage >= 2 && (
          <button
            type="button"
            className="story-action"
            onClick={() => onStage?.(stage === 3 ? 2 : 3)}
          >
            {stage === 3 ? copy.restoreAction : copy.changeAction}
          </button>
        )}
      </div>
    </SceneShell>
  );
}
