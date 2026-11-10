"use client";

import { useEffect, useId, useRef } from "react";

type Stream = {
  x: number;
  head: number;
  speed: number;
  length: number;
  offset: number;
};

const rowHeight = 19;
const frameInterval = 50;
const digits = "010011010100101";
const stillStreams = [
  { x: 16, y: 12, bits: "0100110" },
  { x: 51, y: 101, bits: "101101" },
  { x: 83, y: 39, bits: "00101010" },
  { x: 117, y: 147, bits: "01001" },
  { x: 151, y: 23, bits: "10110011" },
  { x: 183, y: 111, bits: "0010101" },
  { x: 215, y: 65, bits: "010110" }
];

export function BinaryCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const patternId = useId();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let streams: Stream[] = [];
    let inViewport = false;
    let frameId: number | null = null;
    let lastFrame = 0;

    const draw = () => {
      context.globalAlpha = 1;
      context.fillStyle = "#0B0D0E";
      context.fillRect(0, 0, width, height);

      for (const stream of streams) {
        const headRow = Math.floor(stream.head / rowHeight);
        for (let tail = 0; tail < stream.length; tail += 1) {
          const row = headRow - tail;
          const y = row * rowHeight;
          if (y < 0 || y > height + rowHeight) continue;

          context.fillStyle = tail === 0 ? "#c7f9d7" : "#68da8f";
          context.globalAlpha = tail === 0 ? 0.88 : 0.69 * (1 - tail / stream.length) ** 1.7;
          context.fillText(digits[(row + stream.offset) % digits.length], stream.x, y);
        }
      }
    };

    const resize = () => {
      if (reducedMotion.matches) return;
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      if (!width || !height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.font = "15px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

      const spacing = width < 640 ? 34 : 30;
      streams = Array.from({ length: Math.ceil(width / spacing) }, (_, column) => ({
        x: column * spacing + 8,
        head: Math.random() * (height + 160),
        speed: 55 + Math.random() * 95,
        length: 6 + Math.floor(Math.random() * 9),
        offset: Math.floor(Math.random() * digits.length)
      }));
      draw();
    };

    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);
      if (time - lastFrame < frameInterval) return;

      const seconds = lastFrame ? Math.min(time - lastFrame, 100) / 1000 : 0;
      lastFrame = time;
      for (const stream of streams) {
        stream.head += stream.speed * seconds;
        if (stream.head > height + stream.length * rowHeight) stream.head = -Math.random() * 180;
      }
      draw();
    };

    const updateAnimation = () => {
      const shouldAnimate = inViewport && !reducedMotion.matches && document.visibilityState === "visible";
      if (shouldAnimate && frameId === null) {
        lastFrame = 0;
        frameId = requestAnimationFrame(animate);
      } else if (!shouldAnimate && frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const intersection = new IntersectionObserver(([entry]) => {
      inViewport = entry.isIntersecting;
      updateAnimation();
    });
    const size = new ResizeObserver(resize);
    const updateMotion = () => {
      resize();
      updateAnimation();
    };

    resize();
    intersection.observe(canvas);
    size.observe(canvas);
    reducedMotion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateAnimation);

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      intersection.disconnect();
      size.disconnect();
      reducedMotion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateAnimation);
    };
  }, []);

  return (
    <div aria-hidden="true" className={className}>
      <svg className="absolute inset-0 size-full bg-[#0B0D0E] font-mono" focusable="false">
        <defs>
          <pattern height="268" id={patternId} patternUnits="userSpaceOnUse" width="242">
            {stillStreams.map(({ x, y, bits }) => (
              <text fill="#68da8f" fontSize="15" key={x} x={x} y={y}>
                {Array.from(bits, (bit, index) => (
                  <tspan
                    dy={index === 0 ? 0 : rowHeight}
                    key={index}
                    opacity={0.12 + (index / bits.length) * 0.58}
                    x={x}
                  >
                    {bit}
                  </tspan>
                ))}
              </text>
            ))}
          </pattern>
        </defs>
        <rect fill={`url(#${patternId})`} height="100%" width="100%" />
      </svg>
      <canvas className="absolute inset-0 size-full motion-reduce:hidden" ref={canvasRef} />
    </div>
  );
}
