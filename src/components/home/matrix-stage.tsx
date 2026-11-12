"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";

import { BinaryCanvas } from "@/components/experience/binary-canvas";
import { useHeroRain } from "@/lib/use-hero-rain";

export function MatrixStage({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const rainRef = useRef<HTMLDivElement>(null);
  useHeroRain(heroRef, rainRef);
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
          aria-label={
            paused ? "Reanudar animación Matrix" : "Pausar animación Matrix"
          }
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? (
            <Play size={16} aria-hidden="true" />
          ) : (
            <Pause size={16} aria-hidden="true" />
          )}
          <span>{paused ? "Reanudar" : "Pausar"}</span>
        </button>
        <p className="home-motion-note">Movimiento reducido · fondo estático</p>
      </div>
      {children}
    </section>
  );
}
