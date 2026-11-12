"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";

import { BinaryCanvas } from "@/components/experience/binary-canvas";
import { homeContent } from "@/content/home";
import { useHeroRain } from "@/lib/use-hero-rain";

export function MatrixStage({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const rainRef = useRef<HTMLDivElement>(null);
  useHeroRain(heroRef, rainRef);
  const motionLabel = paused
    ? homeContent.hero.motion.resume
    : homeContent.hero.motion.pause;
  return (
    <section
      className="home-hero"
      aria-labelledby="inicio-titulo"
      ref={heroRef}
    >
      <div className="home-hero-atmosphere" ref={rainRef} aria-hidden="true">
        <BinaryCanvas
          className="home-matrix-rain"
          background="#12171c"
          paused={paused}
        />
      </div>
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="home-hero-controls home-container">
        <button
          className="home-pause"
          type="button"
          aria-label={motionLabel}
          title={motionLabel}
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? (
            <Play size={16} aria-hidden="true" />
          ) : (
            <Pause size={16} aria-hidden="true" />
          )}
        </button>
        <p className="home-motion-note">{homeContent.hero.motion.reduced}</p>
      </div>
      {children}
    </section>
  );
}
