"use client";

import { motion, useReducedMotion } from "framer-motion";

type ProcessStep = {
  description: string;
  label: string;
  title: string;
};

type ProcessPipelineProps = {
  steps: ProcessStep[];
};

export function ProcessPipeline({ steps }: ProcessPipelineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mt-14">
      <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:block xl:left-0 xl:right-0 xl:top-10 xl:h-px xl:w-full">
        <motion.div
          className="h-full origin-top bg-gradient-to-b from-signal via-ember/60 to-transparent xl:h-px xl:origin-left xl:bg-gradient-to-r"
          initial={shouldReduceMotion ? false : { scaleX: 0, scaleY: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ amount: 0.35, once: true }}
          whileInView={shouldReduceMotion ? undefined : { scaleX: 1, scaleY: 1 }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {steps.map((step, index) => (
          <motion.article
            className="relative min-h-64 rounded border border-white/10 bg-ink/72 p-5 shadow-inner-line transition hover:-translate-y-1 hover:border-signal/35 hover:bg-white/[0.035]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            key={step.label}
            transition={{ delay: index * 0.055, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ amount: 0.3, once: true }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-ember">{step.label}</span>
              <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_18px_rgba(141,180,255,0.58)]" />
            </div>
            <h3 className="mt-8 text-lg font-semibold leading-6 text-porcelain">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-steel">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
