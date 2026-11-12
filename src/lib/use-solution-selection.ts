"use client";

import { useEffect, useRef, type ChangeEvent } from "react";

// Native radios remain usable before hydration. The URL is progressive enhancement.
export function useSolutionSelection() {
  const ref = useRef<HTMLFieldSetElement>(null);
  useEffect(() => {
    let frame = 0;
    const restore = () => {
      const id = window.location.hash.slice(1);
      const radios = Array.from(
        ref.current?.querySelectorAll<HTMLInputElement>(
          'input[type="radio"]',
        ) ?? [],
      );
      const chosen = radios.find((input) => `scenario-${input.value}` === id);
      if (!chosen) {
        if ((!id || id === "escenarios") && radios[0]) radios[0].checked = true;
        return;
      }
      chosen.checked = true;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        document
          .getElementById(id)
          ?.scrollIntoView({ block: "start", behavior: "instant" }),
      );
    };
    restore();
    window.addEventListener("hashchange", restore);
    window.addEventListener("popstate", restore);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", restore);
      window.removeEventListener("popstate", restore);
    };
  }, []);

  function onChange(event: ChangeEvent<HTMLFieldSetElement>) {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.type !== "radio") return;
    const url = new URL(window.location.href);
    url.hash = `scenario-${input.value}`;
    // Arrow-key exploration should not add one browser-history entry per choice.
    window.history.replaceState(window.history.state, "", url);
  }
  return { ref, onChange };
}
