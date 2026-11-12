import Image from "next/image";
import { Check, Circle } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

export type SceneProps = {
  stage: number;
  progress: number;
  onStage?: (stage: number) => void;
};

export function SceneShell({
  name,
  label,
  stage,
  progress,
  image,
  children,
  status,
}: SceneProps & {
  name: string;
  label: string;
  image?: string;
  children: ReactNode;
  status: string;
}) {
  return (
    <figure
      className={`story-scene story-${name}`}
      data-stage={stage}
      aria-label={label}
      style={
        {
          "--story-progress": progress,
          "--chapter-progress": Math.min(1, (progress * 4) % 1),
          "--read-progress": Math.max(0, Math.min(1, (progress - 0.25) * 4)),
        } as CSSProperties
      }
    >
      {image && (
        <Image
          className="story-photo"
          src={image}
          alt=""
          fill
          sizes="(max-width: 1320px) 100vw, 1280px"
        />
      )}
      <div className="story-composition">{children}</div>
      <figcaption className="story-status">
        {stage === 3 ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Circle size={10} aria-hidden="true" />
        )}
        {status}
      </figcaption>
    </figure>
  );
}

export function WindowBar({ title }: { title: string }) {
  return (
    <div className="story-window-bar">
      <span className="story-window-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>{title}</span>
    </div>
  );
}
