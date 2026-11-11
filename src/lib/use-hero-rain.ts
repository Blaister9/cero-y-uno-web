"use client";

import { useEffect, type RefObject } from "react";

// Fade only the decorative rain; the reading surface keeps its contrast.
export function useHeroRain(
  heroRef: RefObject<HTMLElement | null>,
  rainRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const hero = heroRef.current;
    const rain = rainRef.current;
    if (!hero || !rain) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previousProgress = -1;
    const update = () => {
      frame = 0;
      const bounds = hero.getBoundingClientRect();
      const progress = reducedMotion.matches
        ? 0
        : Math.max(0, Math.min(1, -bounds.top / (bounds.height * 0.78)));
      if (progress === previousProgress) return;
      previousProgress = progress;
      rain.style.opacity = String(1 - progress);
      rain.style.filter = progress ? `blur(${progress * 4}px)` : "none";
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
    };
  }, [heroRef, rainRef]);
}
