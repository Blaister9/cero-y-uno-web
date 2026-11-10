import type { Variants } from "framer-motion";

export const financialScroll = {
  scan: [0.31, 0.54],
  transfer: [0.48, 0.72],
  confirmation: [0.75, 0.86]
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
