"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { BinaryCanvas } from "./binary-canvas";
import { BinaryWordmark } from "./binary-wordmark";

const storageKey = "cero-y-uno:intro-seen:v1";

export function BinaryIntro() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(storageKey)) {
        return;
      }
      window.sessionStorage.setItem(storageKey, "true");
    } catch {
      // Session storage can be blocked; the intro still behaves safely.
    }

    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, shouldReduceMotion ? 1100 : 3300);

    return () => {
      clearTimeout(timer);
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!isExiting) return;
    const timer = setTimeout(() => setIsVisible(false), 520);
    return () => clearTimeout(timer);
  }, [isExiting]);

  if (!isVisible) return null;

  const skipIntro = () => {
    setIsExiting(true);
  };

  return (
    <motion.div
      animate={{ opacity: isExiting ? 0 : 1 }}
      aria-label="Introducción visual de Cero y Uno"
      className="fixed inset-0 z-[80] grid place-items-center overflow-hidden bg-ink"
      initial={{ opacity: 1 }}
      role="dialog"
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {!shouldReduceMotion ? (
        <BinaryCanvas className="absolute inset-0 h-full w-full" density="medium" mode="intro" />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,58,111,0.35),rgba(5,5,5,1)_68%)]" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.26),rgba(5,5,5,0.92))]" />

      <button
        className="absolute right-5 top-5 rounded border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-porcelain transition hover:border-signal/50 hover:bg-white/[0.08]"
        onClick={skipIntro}
        type="button"
      >
        Saltar intro
      </button>

      <div className="relative z-10 mx-auto grid max-w-5xl gap-10 px-5 text-center">
        <div className="mx-auto grid w-full max-w-xl gap-2 rounded border border-white/10 bg-ink/70 p-4 text-left font-mono text-xs text-steel shadow-premium backdrop-blur">
          {[
            "> booting cero_y_uno.system",
            "> reading ideas...",
            "> compiling architecture...",
            "> transforming complexity...",
            "> deploying software..."
          ].map((line, index) => (
            <motion.p
              animate={{ opacity: 1, x: 0 }}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
              key={line}
              transition={{ delay: 0.18 + index * 0.2, duration: 0.42 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <BinaryWordmark />
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-lg leading-8 text-steel md:text-2xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          transition={{ delay: 1.7, duration: 0.72 }}
        >
          Lo que otros imaginan, nosotros lo convertimos en software.
        </motion.p>
      </div>
    </motion.div>
  );
}
