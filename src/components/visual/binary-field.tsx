"use client";

import { motion } from "framer-motion";

const streams = Array.from({ length: 22 }, (_, index) => ({
  left: 3 + index * 4.5,
  delay: (index % 6) * 0.35,
  duration: 11 + (index % 5) * 1.6,
  seed: index
}));

export function BinaryField() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.35)_48%,rgba(5,5,5,0.92)_100%)]" />

      {streams.map((stream) => (
        <motion.div
          animate={{
            opacity: [0.08, 0.32, 0.12],
            y: ["-18%", "16%", "-18%"]
          }}
          className="absolute top-0 flex flex-col gap-4 font-mono text-xs text-signal/35"
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
          {Array.from({ length: 18 }, (_, row) => (
            <span
              className={row % 5 === 0 ? "text-ember/45" : "text-signal/30"}
              key={`${stream.seed}-${row}`}
            >
              {(row + stream.seed) % 3 === 0 ? "1" : "0"}
            </span>
          ))}
        </motion.div>
      ))}

      <motion.div
        animate={{ x: ["-20%", "25%", "-20%"], opacity: [0.22, 0.42, 0.22] }}
        className="absolute left-1/4 top-1/3 h-px w-1/2 bg-gradient-to-r from-transparent via-signal/60 to-transparent"
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
