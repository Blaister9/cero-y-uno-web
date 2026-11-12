"use client";

import { useEffect, type RefObject } from "react";

export function useHeaderCompact(headerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let frame = 0;
    let previousCompact: boolean | undefined;
    const update = () => {
      frame = 0;
      const compact = window.scrollY > 48;
      if (compact === previousCompact) return;
      previousCompact = compact;
      header.dataset.compact = String(compact);
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
    };
  }, [headerRef]);
}
