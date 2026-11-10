import type { Variants } from "framer-motion";

export const financialScroll = {
  scan: [0.22, 0.49],
  transfer: [0.49, 0.78],
  confirmation: [0.8, 0.88]
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};
