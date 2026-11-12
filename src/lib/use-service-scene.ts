"use client";

import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function useServiceScene() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center 45%"],
  });
  const travel = useTransform(scrollYProgress, [0, 1], [-28, 0]);
  const reveal = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, -3]);
  return {
    ref,
    travel: reduced ? 0 : travel,
    reveal: reduced ? 1 : reveal,
    rotate: reduced ? -3 : rotate,
    progress: reduced ? 1 : scrollYProgress,
  };
}
