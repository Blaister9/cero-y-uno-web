"use client";

import { motion, useReducedMotion } from "framer-motion";

const streams = Array.from({ length: 16 }, (_, index) => ({
  left: 4 + index * 5.8,
  delay: (index % 6) * 0.35,
  duration: 16 + (index % 5) * 1.8,
  seed: index
}));

export function BinaryField() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_34%,rgba(22,61,41,0.30)_0%,rgba(11,13,14,0.20)_38%,rgba(11,13,14,0.92)_100%)]" />

      {streams.map((stream) => (
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 0.14, y: "-8%" }
              : {
                  opacity: [0.05, 0.24, 0.08],
                  y: ["-14%", "12%", "-14%"]
                }
          }
          className="absolute top-0 flex flex-col gap-5 font-mono text-xs text-matrix/25"
          initial={{ opacity: 0.08, y: "-18%" }}
          key={stream.seed}
          style={{ left: `${stream.left}%` }}
          transition={{
            delay: stream.delay,
            duration: stream.duration,
            ease: "easeInOut",
            repeat: Infinity
          }}
        >
          {Array.from({ length: 14 }, (_, row) => (
            <span
              className={row % 6 === 0 ? "text-matrix/40" : "text-matrix/25"}
              key={`${stream.seed}-${row}`}
            >
              {(row + stream.seed) % 3 === 0 ? "1" : "0"}
            </span>
          ))}
        </motion.div>
      ))}

      {!shouldReduceMotion ? (
        <motion.div
          animate={{ x: ["-18%", "18%", "-18%"], opacity: [0.16, 0.34, 0.16] }}
          className="absolute left-1/4 top-1/3 h-px w-1/2 bg-gradient-to-r from-transparent via-matrix/55 to-transparent"
          transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        />
      ) : null}
    </div>
  );
}
