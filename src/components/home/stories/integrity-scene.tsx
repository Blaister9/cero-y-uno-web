import Image from "next/image";
import {
  Check,
  FileText,
  Fingerprint,
  ShieldCheck,
  ShieldX,
} from "lucide-react";
import type { CSSProperties } from "react";
import type { BlockchainDemo } from "@/content/blockchain-demo";
import { integrityScene as copy } from "@/content/story-scenes";
import { getIntegrityFrame, integrityRange } from "@/lib/integrity-journey";
import { SceneShell, type SceneProps } from "./scene-shell";

function HashLine({
  hash,
  original,
  changed = false,
  progress,
}: {
  hash: string;
  original: string;
  changed?: boolean;
  progress: number;
}) {
  return (
    <code className="ledger-hash" data-hash={hash} data-changed={changed}>
      {hash.split("").map((character, index) => {
        const different = changed && character !== original[index];
        const arrival = integrityRange(
          progress,
          0.8 + (index % 16) * 0.004,
          0.87 + (index % 16) * 0.004,
        );
        return (
          <span
            key={index}
            data-different={different}
            style={
              different
                ? {
                    transform: `translateY(${(1 - arrival) * -6}px)`,
                    opacity: 0.3 + arrival * 0.7,
                  }
                : undefined
            }
          >
            {character}
          </span>
        );
      })}
    </code>
  );
}

export function IntegrityScene({
  demo,
  stage,
  progress,
}: SceneProps & { demo: BlockchainDemo }) {
  const frame = getIntegrityFrame(progress);
  const originalDay = demo.original.split(":")[1].trim();
  const currentText = frame.changed ? demo.changed : demo.original;
  const currentHash = frame.changed ? demo.changedHash : demo.originalHash;
  const variables = {
    "--ledger-read": frame.read,
    "--ledger-register": frame.register,
    "--ledger-connect": frame.connect,
    "--ledger-compare": frame.compare,
  } as CSSProperties;
  return (
    <SceneShell
      name="integrity"
      label={copy.label}
      stage={stage}
      progress={progress}
      status={copy.states[stage]}
    >
      <div
        className="ledger-stage"
        style={variables}
        data-changed={frame.changed}
      >
        <div className="ledger-atmosphere" aria-hidden="true">
          <Image
            src={copy.image}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 1200px"
          />
        </div>
        <div className="ledger-light" aria-hidden="true" />
        <div className="ledger-source" aria-hidden={frame.register > 0.9}>
          <div className="ledger-paper-top">
            <FileText size={17} aria-hidden="true" />
            <span>{copy.reference}</span>
          </div>
          <h4>{copy.document}</h4>
          <p className="ledger-source-label">{demo.original.split(":")[0]}:</p>
          <strong className="ledger-source-day">{originalDay}</strong>
          <div className="ledger-paper-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span className="ledger-source-note">{copy.source}</span>
          <div className="ledger-reader" aria-hidden="true" />
        </div>
        <div className="ledger-extraction" aria-hidden={frame.register > 0.9}>
          <span className="story-overline">
            <Fingerprint size={15} aria-hidden="true" />
            {copy.hash}
          </span>
          <code>
            {demo.originalHash.slice(
              0,
              Math.ceil(demo.originalHash.length * frame.read),
            )}
          </code>
          <span className="ledger-extraction-rule" aria-hidden="true" />
        </div>
        <div className="ledger-vault" aria-hidden="true">
          <div className="ledger-rail">
            <i />
            <i />
            <i />
          </div>
          <div className="ledger-neighbor ledger-neighbor-left">
            <Image
              src={copy.glassImage}
              alt=""
              width={480}
              height={480}
              sizes="250px"
            />
            <span>001</span>
          </div>
          <div className="ledger-neighbor ledger-neighbor-right">
            <Image
              src={copy.glassImage}
              alt=""
              width={480}
              height={480}
              sizes="250px"
            />
            <span>003</span>
          </div>
          <div className="ledger-block">
            <Image
              src={copy.glassImage}
              alt=""
              width={480}
              height={480}
              sizes="(max-width: 600px) 270px, 480px"
            />
            <div className="ledger-pattern">
              {demo.originalHash.split("").map((value, index) => (
                <i
                  key={index}
                  style={{
                    opacity: integrityRange(
                      progress,
                      0.06 + index * 0.002,
                      0.12 + index * 0.002,
                    ),
                    backgroundColor: `rgba(190, 222, 246, ${0.2 + parseInt(value, 16) / 19})`,
                  }}
                />
              ))}
            </div>
            <span className="ledger-block-id">002</span>
          </div>
          <div className="ledger-vault-caption">
            <span className="story-overline">
              {frame.register > 0.8 ? copy.registered : copy.read}
            </span>
            <code>{demo.originalHash.slice(0, 16)}…</code>
            <span>{copy.chainNote}</span>
          </div>
        </div>
        <div className="ledger-comparison" aria-hidden={frame.compare < 0.5}>
          <div className="ledger-reference">
            <span className="story-overline">{copy.original}</span>
            <p className="ledger-compare-sentence">
              <span>{demo.original.split(":")[0]}:</span>
              <strong>{originalDay}</strong>
            </p>
            <div className="ledger-hash-group">
              <span>{copy.savedHash}</span>
              <HashLine
                hash={demo.originalHash}
                original={demo.originalHash}
                progress={progress}
              />
            </div>
            <p className="ledger-original-note">
              <Check size={13} aria-hidden="true" />
              {copy.unchanged}
            </p>
          </div>
          <div className="ledger-copy" data-changed={frame.changed}>
            <span className="story-overline">
              {frame.changed ? copy.changed : copy.copy}
            </span>
            <p className="ledger-compare-sentence">
              <span>{currentText.split(":")[0]}:</span>
              <strong
                style={{
                  opacity: frame.word,
                  transform: `translateY(${(1 - frame.word) * 9}px)`,
                }}
              >
                {currentText.split(":")[1].trim()}
              </strong>
            </p>
            <div className="ledger-hash-group">
              <span>{copy.receivedHash}</span>
              <HashLine
                hash={currentHash}
                original={demo.originalHash}
                changed={frame.changed}
                progress={progress}
              />
            </div>
          </div>
        </div>
        <div
          className="ledger-verdict ledger-verdict-match"
          style={{ opacity: frame.match }}
          aria-hidden={frame.match < 0.5}
        >
          <ShieldCheck size={22} aria-hidden="true" />
          <div>
            <strong>{copy.match}</strong>
            <span>{copy.comparison}</span>
          </div>
        </div>
        <div
          className="ledger-verdict ledger-verdict-changed"
          style={{ opacity: frame.verdict }}
          aria-hidden={frame.verdict < 0.5}
        >
          <ShieldX size={22} aria-hidden="true" />
          <div>
            <strong>{copy.mismatch}</strong>
            <span>{copy.difference}</span>
          </div>
        </div>
        <p className="ledger-footnote">
          {frame.compare < 0.5 ? copy.noRecord : copy.limit}
        </p>
      </div>
    </SceneShell>
  );
}
