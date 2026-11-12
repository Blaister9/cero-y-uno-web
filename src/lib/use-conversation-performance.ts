"use client";

import { useEffect, useState } from "react";

const SPEAKING_DURATION = 5400;
const DELIVERY_DELAY = 440;
const END = SPEAKING_DURATION + DELIVERY_DELAY;

// One clock drives the portrait, its speech bubble and the receiving phone.
// Entering the response chapter starts a finite performance; leaving resets it.
export function useConversationPerformance(stage: number, response: string) {
  const [elapsed, setElapsed] = useState(0);
  const [take, setTake] = useState(0);

  useEffect(() => {
    if (stage !== 2) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = 0;
    let clock = 0;
    let published = -100;
    const tick = (now: number) => {
      if (previous && !document.hidden) clock += Math.min(now - previous, 80);
      previous = now;
      if (clock - published >= 45 || clock >= END) {
        setElapsed(Math.min(clock, END));
        published = clock;
      }
      if (clock < END) frame = requestAnimationFrame(tick);
    };
    const configure = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      clock = 0;
      published = -100;
      setElapsed(preference.matches ? END : 0);
      if (!preference.matches) frame = requestAnimationFrame(tick);
    };
    configure();
    preference.addEventListener("change", configure);
    return () => {
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", configure);
    };
  }, [stage, take]);

  const time = stage === 3 ? END : stage === 2 ? elapsed : 0;
  const count = Math.min(
    response.length,
    Math.floor((time / SPEAKING_DURATION) * response.length),
  );
  const receivedCount = Math.min(
    response.length,
    Math.floor(
      (Math.max(0, time - DELIVERY_DELAY) / SPEAKING_DURATION) *
        response.length,
    ),
  );
  const speaking = stage === 2 && count > 0 && count < response.length;
  const letter = response[Math.max(0, count - 1)].toLowerCase();
  // Closed lips for pauses and labial consonants; two photographic vowel poses.
  const pose =
    !speaking || /[\s.,mbp]/.test(letter) || Math.floor(time / 95) % 4 === 0
      ? "rest"
      : /[ouóú]/.test(letter)
        ? "round"
        : "open";

  return {
    spoken: response.slice(0, count),
    received: response.slice(0, receivedCount),
    speaking,
    pose,
    delivered: receivedCount === response.length,
    replay: () => {
      setElapsed(0);
      setTake((value) => value + 1);
    },
  };
}
