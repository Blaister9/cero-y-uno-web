"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  once?: boolean;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 34,
  once = true
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: distance }}
      transition={{ delay, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.28, once }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
