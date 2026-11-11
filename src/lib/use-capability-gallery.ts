"use client";

import { useEffect, useRef, useState } from "react";

export function useCapabilityGallery() {
  const trackRef = useRef<HTMLUListElement>(null);
  const stopEdgeRef = useRef<() => void>(() => {});
  const [view, setView] = useState({
    first: 0,
    last: 0,
    atStart: true,
    atEnd: false,
    ready: false,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const bounds = track.getBoundingClientRect();
      const cards = Array.from(track.children) as HTMLElement[];
      const visible = cards
        .map((card, index) => {
          const rect = card.getBoundingClientRect();
          const overlap =
            Math.min(rect.right, bounds.right) -
            Math.max(rect.left, bounds.left);
          return overlap >= rect.width / 2 ? index : -1;
        })
        .filter((index) => index >= 0);
      const next = {
        first: visible[0] ?? 0,
        last: visible[visible.length - 1] ?? 0,
        atStart: track.scrollLeft <= 2,
        atEnd: track.scrollWidth - track.clientWidth - track.scrollLeft <= 2,
        ready: true,
      };
      setView((current) =>
        Object.keys(next).every(
          (key) =>
            current[key as keyof typeof current] ===
            next[key as keyof typeof next],
        )
          ? current
          : next,
      );
    };
    const requestMeasure = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    const resize = new ResizeObserver(requestMeasure);
    resize.observe(track);
    measure();
    track.addEventListener("scroll", requestMeasure, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      track.removeEventListener("scroll", requestMeasure);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previousTime = 0;
    let velocity = 0;
    let targetVelocity = 0;
    let position = 0;

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      velocity = 0;
      targetVelocity = 0;
      delete track.dataset.edgeDirection;
    };
    stopEdgeRef.current = stop;

    const tick = (time: number) => {
      const elapsed = previousTime ? Math.min(32, time - previousTime) : 16;
      previousTime = time;
      velocity += (targetVelocity - velocity) * (1 - Math.exp(-elapsed / 70));
      const max = track.scrollWidth - track.clientWidth;
      position = Math.max(
        0,
        Math.min(max, position + (velocity * elapsed) / 1000),
      );
      track.scrollLeft = position;
      if (
        (velocity < 0 && position <= 0) ||
        (velocity > 0 && position >= max)
      ) {
        stop();
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const onPointer = (event: PointerEvent) => {
      if (
        event.pointerType !== "mouse" ||
        event.buttons !== 0 ||
        !finePointer.matches ||
        reducedMotion.matches
      ) {
        stop();
        if (event.pointerType !== "mouse") delete track.dataset.freeScroll;
        return;
      }
      const bounds = track.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const edge = Math.min(140, bounds.width * 0.18);
      const intensity =
        x < edge
          ? -(1 - x / edge)
          : x > bounds.width - edge
            ? 1 - (bounds.width - x) / edge
            : 0;
      if (!intensity) {
        stop();
        return;
      }
      targetVelocity =
        Math.sign(intensity) * Math.min(1, Math.abs(intensity)) ** 2 * 440;
      const max = track.scrollWidth - track.clientWidth;
      if (
        (targetVelocity < 0 && track.scrollLeft <= 0) ||
        (targetVelocity > 0 && track.scrollLeft >= max)
      ) {
        stop();
        return;
      }
      // Preserve the exact resting position when the pointer returns to the centre.
      // Explicit arrow/keyboard navigation restores snap; touch keeps native snap.
      track.dataset.freeScroll = "true";
      track.dataset.edgeDirection = intensity < 0 ? "previous" : "next";
      if (!frame) {
        position = track.scrollLeft;
        frame = requestAnimationFrame(tick);
      }
    };

    const onVisibility = () => {
      if (document.visibilityState !== "visible") stop();
    };
    track.addEventListener("pointermove", onPointer);
    track.addEventListener("pointerup", onPointer);
    track.addEventListener("pointerleave", stop);
    track.addEventListener("pointerdown", stop);
    track.addEventListener("focusin", stop);
    track.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("blur", stop);
    finePointer.addEventListener("change", stop);
    reducedMotion.addEventListener("change", stop);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      stopEdgeRef.current = () => {};
      track.removeEventListener("pointermove", onPointer);
      track.removeEventListener("pointerup", onPointer);
      track.removeEventListener("pointerleave", stop);
      track.removeEventListener("pointerdown", stop);
      track.removeEventListener("focusin", stop);
      track.removeEventListener("wheel", stop);
      window.removeEventListener("blur", stop);
      finePointer.removeEventListener("change", stop);
      reducedMotion.removeEventListener("change", stop);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    stopEdgeRef.current();
    delete track.dataset.freeScroll;
    const cards = Array.from(track.children) as HTMLElement[];
    const index = Math.max(
      0,
      Math.min(cards.length - 1, view.first + direction),
    );
    const destination = cards[index];
    if (!destination) return;
    const padding = Number.parseFloat(
      window.getComputedStyle(track).paddingLeft,
    );
    const left =
      track.scrollLeft +
      destination.getBoundingClientRect().left -
      track.getBoundingClientRect().left -
      padding;
    track.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  const boundary = (end: boolean) => {
    const track = trackRef.current;
    stopEdgeRef.current();
    if (track) delete track.dataset.freeScroll;
    track?.scrollTo({
      left: end ? track.scrollWidth : 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return { trackRef, view, move, boundary };
}
