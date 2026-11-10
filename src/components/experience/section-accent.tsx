"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionAccent() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="mt-6 h-px origin-left bg-gradient-to-r from-signal/65 via-signal/20 to-transparent motion-reduce:!transform-none"
      initial={reduceMotion ? false : { scaleX: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true }}
      whileInView={{ scaleX: 1 }}
    />
  );
}
