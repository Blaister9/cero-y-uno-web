"use client";

import { motion, useReducedMotion } from "framer-motion";

type BinaryWordmarkProps = {
  className?: string;
  compact?: boolean;
};

const word = "CERO Y UNO";

export function BinaryWordmark({ className, compact = false }: BinaryWordmarkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <span className="sr-only">{word}</span>
      <div aria-hidden="true" className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono font-semibold tracking-[0.22em] text-porcelain">
        {word.split("").map((letter, index) => (
          <motion.span
            className={compact ? "text-2xl md:text-4xl" : "text-4xl md:text-7xl"}
            initial={shouldReduceMotion ? false : { opacity: 0, y: -28, filter: "blur(8px)" }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.55 + index * 0.045, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            key={`${letter}-${index}`}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        aria-hidden="true"
        className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-signal/70 to-transparent"
        initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
      />
    </div>
  );
}
