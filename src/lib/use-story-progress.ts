"use client";

import { useEffect, useState, type RefObject } from "react";

// Native, reversible scroll. Short viewports and reduced motion use selectable states.
export function useStoryProgress(
  track: RefObject<HTMLDivElement | null>,
  storyId: string,
) {
  const [progress, setProgress] = useState(0);
  const [linked, setLinked] = useState(false);
  useEffect(() => {
    const screen = window.matchMedia(
      "(min-width: 901px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!screen.matches || !track.current) return;
      const rect = track.current.getBoundingClientRect();
      const dock = track.current.firstElementChild as HTMLElement | null;
      const distance =
        rect.height - (dock?.offsetHeight ?? window.innerHeight - 104);
      setProgress(
        Math.max(0, Math.min(1, (104 - rect.top) / Math.max(1, distance))),
      );
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const configure = () => {
      setLinked(screen.matches);
      update();
    };
    configure();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", configure);
    screen.addEventListener("change", configure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", configure);
      screen.removeEventListener("change", configure);
    };
  }, [track, storyId]);
  function selectStage(index: number) {
    const value = index === 3 ? 1 : (index + 0.12) / 4;
    setProgress(value);
    if (linked && track.current) {
      const top =
        window.scrollY + track.current.getBoundingClientRect().top - 104;
      const dock = track.current.firstElementChild as HTMLElement | null;
      const distance =
        track.current.offsetHeight -
        (dock?.offsetHeight ?? window.innerHeight - 104);
      window.scrollTo({ top: top + distance * value, behavior: "instant" });
    }
  }
  return {
    progress,
    linked,
    selectStage,
    stage: Math.min(3, Math.floor(progress * 4)),
  };
}
