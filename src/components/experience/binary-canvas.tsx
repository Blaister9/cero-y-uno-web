"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type BinaryCanvasProps = {
  className?: string;
  density?: "low" | "medium" | "high";
  mode?: "ambient" | "intro";
};

const densityMap = {
  low: 42,
  medium: 32,
  high: 24
};

export function BinaryCanvas({ className, density = "medium", mode = "ambient" }: BinaryCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let columns: number[] = [];
    let lastFrame = 0;
    let isRunning = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mobile = width < 640;
      const fontSize = mobile ? densityMap[density] + 6 : densityMap[density];
      const columnCount = Math.ceil(width / fontSize);
      columns = Array.from({ length: columnCount }, () => Math.random() * -height);
      context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
    };

    const drawStatic = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(5, 5, 5, 0.88)";
      context.fillRect(0, 0, width, height);
      context.fillStyle = "rgba(141, 180, 255, 0.18)";
      columns.forEach((_, index) => {
        for (let row = 0; row < 8; row += 1) {
          context.fillText((index + row) % 3 === 0 ? "1" : "0", index * densityMap[density], row * 46 + 24);
        }
      });
    };

    const draw = (time: number) => {
      if (!isRunning) return;

      const frameGap = mode === "intro" ? 46 : 74;
      if (time - lastFrame < frameGap) {
        animationFrame = requestAnimationFrame(draw);
        return;
      }
      lastFrame = time;

      context.fillStyle = mode === "intro" ? "rgba(5, 5, 5, 0.2)" : "rgba(5, 5, 5, 0.16)";
      context.fillRect(0, 0, width, height);
      context.font = `${width < 640 ? densityMap[density] + 6 : densityMap[density]}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;

      const step = width < 640 ? densityMap[density] + 8 : densityMap[density];
      columns.forEach((y, index) => {
        const x = index * step;
        const char = Math.random() > 0.5 ? "1" : "0";
        const highlight = Math.random() > 0.92;
        context.fillStyle = highlight ? "rgba(215, 181, 109, 0.58)" : "rgba(141, 180, 255, 0.28)";
        context.fillText(char, x, y);
        columns[index] = y > height + Math.random() * 180 ? Math.random() * -160 : y + (mode === "intro" ? 18 : 8);
      });

      animationFrame = requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      isRunning = document.visibilityState === "visible";
      if (isRunning && !shouldReduceMotion) {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(draw);
      }
    };

    resize();

    if (shouldReduceMotion) {
      drawStatic();
    } else {
      animationFrame = requestAnimationFrame(draw);
      document.addEventListener("visibilitychange", handleVisibility);
    }

    window.addEventListener("resize", resize);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [density, mode, shouldReduceMotion]);

  return <canvas aria-hidden="true" className={className} ref={canvasRef} />;
}
