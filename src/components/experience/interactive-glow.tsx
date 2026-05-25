"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

type InteractiveGlowProps = {
  children: ReactNode;
  className?: string;
};

export function InteractiveGlow({ children, className }: InteractiveGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") return;
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      className={className}
      onPointerMove={handlePointerMove}
      ref={ref}
      style={
        {
          "--glow-x": "72%",
          "--glow-y": "28%"
        } as CSSProperties
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(480px circle at var(--glow-x) var(--glow-y), rgba(141, 180, 255, 0.16), transparent 58%)"
        }}
      />
      {children}
    </div>
  );
}
