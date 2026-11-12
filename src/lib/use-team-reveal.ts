"use client";

import { useEffect, useRef } from "react";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const ease = (value: number) => value * value * (3 - 2 * value);

export function useTeamReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const media = window.matchMedia(
      "(min-width: 701px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    let previous = "";

    const reset = () => {
      root.removeAttribute("data-reveal-ready");
      root.style.removeProperty("--team-open-a");
      root.style.removeProperty("--team-open-b");
      previous = "";
    };

    const update = () => {
      frame = 0;
      if (!media.matches) {
        reset();
        return;
      }
      if (document.hidden) return;

      const top = root.getBoundingClientRect().top;
      const start = window.innerHeight * 0.9;
      const progress = clamp((start - top) / (start - 104 + 220));
      const first = ease(clamp(progress / 0.92)).toFixed(4);
      const second = ease(clamp((progress - 0.08) / 0.92)).toFixed(4);
      const state = `${first}:${second}`;

      if (state !== previous) {
        root.style.setProperty("--team-open-a", first);
        root.style.setProperty("--team-open-b", second);
        previous = state;
      }
      if (!root.hasAttribute("data-reveal-ready")) {
        root.setAttribute("data-reveal-ready", "true");
      }
    };

    const requestUpdate = () => {
      if (!media.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        if (previous) reset();
        return;
      }
      if (!frame && !document.hidden) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    media.addEventListener("change", requestUpdate);
    document.addEventListener("visibilitychange", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      media.removeEventListener("change", requestUpdate);
      document.removeEventListener("visibilitychange", requestUpdate);
      reset();
    };
  }, []);

  return ref;
}
