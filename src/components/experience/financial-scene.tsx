"use client";

import { ArrowRight, BookOpen, Bot, Check, FileText } from "lucide-react";
import { motion, useTransform, type MotionValue } from "framer-motion";

import type { FinancialDemo } from "@/content/project-stories";
import { financialScroll } from "@/lib/animations";

export function FinancialScene({ demo, progress }: { demo: FinancialDemo; progress: MotionValue<number> }) {
  const backdropY = useTransform(progress, [0, 1], [-24, 36]);
  const documentY = useTransform(progress, [0, 1], [5, -8]);
  const ledgerY = useTransform(progress, [0, 1], [14, 0]);
  const scanY = useTransform(progress, financialScroll.scan, ["-100%", "4%"]);
  const scanOpacity = useTransform(progress, [0.27, 0.34, 0.52, 0.58], [0, 1, 1, 0]);
  const route = useTransform(progress, financialScroll.transfer, [0, 1]);
  const packetX = useTransform(progress, financialScroll.transfer, ["0%", "100%"]);
  const packetOpacity = useTransform(progress, [0.47, 0.52, 0.7, 0.74], [0, 1, 1, 0]);
  const botGlow = useTransform(progress, [0.24, 0.38, 0.63, 0.79], [0, 1, 1, 0]);
  const confirmed = useTransform(progress, financialScroll.confirmation, [0, 1]);
  const confirmationY = useTransform(progress, financialScroll.confirmation, [9, 0]);
  const pending = useTransform(progress, [0.31, 0.38], [1, 0]);
  const working = useTransform(progress, [0.34, 0.42, 0.7, 0.76], [0, 1, 1, 0]);

  return (
    <div className="sticky top-[clamp(5rem,12svh,7rem)]" data-financial-scene>
      <div className="glass-panel relative isolate overflow-hidden rounded-2xl border border-white/15 shadow-premium">
        <motion.div className="pointer-events-none absolute -inset-y-12 inset-x-0 -z-10 bg-[radial-gradient(ellipse_at_22%_25%,rgba(18,58,111,0.44),transparent_60%),radial-gradient(ellipse_at_90%_88%,rgba(168,237,190,0.10),transparent_50%)]" style={{ y: backdropY }} />
        <header className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <p className="font-medium text-porcelain">Mesa de causación</p>
          <span className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-steel">Recreación</span>
        </header>

        <div className="grid grid-cols-2 items-start gap-3 px-4 pb-3 pt-5 xl:gap-5 xl:px-6">
          <motion.div className="overflow-hidden rounded-lg border border-white/15 bg-ink/[0.88]" style={{ y: documentY }}>
            <div className="flex items-center gap-2 border-b border-dashed border-white/20 px-3 py-3 text-sm font-medium text-porcelain xl:px-4">
              <FileText className="shrink-0 text-signal" size={17} />
              Documento de entrada
            </div>
            <div className="relative overflow-hidden">
              <dl className="divide-y divide-white/10 px-3 xl:px-4">
                {demo.fields.map(({ label, value }) => (
                  <div className="py-2.5" key={label}>
                    <dt className="text-xs text-steel">{label}</dt>
                    <dd className="mt-0.5 text-sm font-medium tabular-nums text-porcelain">{value}</dd>
                  </div>
                ))}
              </dl>
              <motion.div className="pointer-events-none absolute inset-0 border-b-2 border-signal/80 bg-gradient-to-b from-transparent to-signal/20" data-financial-scan style={{ opacity: scanOpacity, y: scanY }} />
            </div>
          </motion.div>

          <motion.div className="overflow-hidden rounded-lg border border-white/15 bg-ink/[0.88]" style={{ y: ledgerY }}>
            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-3 text-sm font-medium text-porcelain xl:px-4">
              <BookOpen className="shrink-0 text-signal" size={17} />
              Registro contable
            </div>
            <dl className="divide-y divide-white/10 px-3 xl:px-4">
              {demo.fields.map((field, index) => <LedgerField field={field} index={index} key={field.label} progress={progress} />)}
            </dl>
          </motion.div>
        </div>

        <div className="relative mx-6 my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/15" />
          <motion.div className="absolute inset-x-0 top-1/2 h-px origin-left bg-signal" style={{ scaleX: route }} />
          <motion.span className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_14px_#8db4ff]" style={{ left: packetX, opacity: packetOpacity }} />
          <ArrowRight className="relative justify-self-start rounded-full bg-graphite p-0.5 text-steel" size={16} />
          <div className="relative isolate flex items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-graphite px-4 py-2 text-sm font-medium text-porcelain">
            <motion.div className="absolute inset-0 -z-10 bg-deepblue/70" style={{ opacity: botGlow }} />
            <Bot className="text-signal" size={18} />
            Bot RPA
          </div>
          <ArrowRight className="relative justify-self-end rounded-full bg-graphite p-0.5 text-signal" size={16} />
        </div>

        <div className="flex min-h-14 items-center justify-between gap-3 border-t border-white/10 px-5 py-3">
          <p className="max-w-[50%] text-xs leading-5 text-steel">{demo.caption}</p>
          <div className="relative h-5 min-w-40 text-right text-xs leading-5">
            <motion.span className="absolute inset-0 text-ember" style={{ opacity: pending }}>Pendiente de registro</motion.span>
            <motion.span className="absolute inset-0 text-signal" style={{ opacity: working }}>Bot en ejecución</motion.span>
            <motion.span className="absolute inset-0 flex items-center justify-end gap-1.5 font-medium text-matrix" data-financial-confirmation style={{ opacity: confirmed, y: confirmationY }}>
              <Check size={15} /> Causación registrada
            </motion.span>
          </div>
        </div>
        <motion.div className="h-0.5 origin-left bg-signal/70" style={{ scaleX: progress }} />
      </div>
    </div>
  );
}

function LedgerField({ field, index, progress }: { field: FinancialDemo["fields"][number]; index: number; progress: MotionValue<number> }) {
  const start = 0.56 + index * 0.05;
  const valueOpacity = useTransform(progress, [start, start + 0.08], [0, 1]);
  const placeholderOpacity = useTransform(progress, [start, start + 0.08], [1, 0]);
  const valueY = useTransform(progress, [start, start + 0.08], [6, 0]);

  return (
    <div className="py-2.5">
      <dt className="text-xs text-steel">{field.label}</dt>
      <dd className="relative mt-0.5 text-sm font-medium tabular-nums text-porcelain">
        <motion.span className="absolute inset-0 text-steel" style={{ opacity: placeholderOpacity }}>—</motion.span>
        <motion.span className="block" data-financial-value style={{ opacity: valueOpacity, y: valueY }}>{field.value}</motion.span>
      </dd>
    </div>
  );
}

export function FinancialStill({ demo }: { demo: FinancialDemo }) {
  return (
    <div className="lg:sr-only motion-reduce:lg:not-sr-only">
      <figure className="glass-panel mt-6 rounded-xl border border-white/15 p-4">
        <figcaption className="text-xs text-steel">{demo.caption}</figcaption>
        <p className="mt-3 flex flex-wrap items-center gap-2 text-sm font-medium text-porcelain">
          Documento <ArrowRight aria-hidden="true" className="text-signal" size={14} /> Bot RPA <ArrowRight aria-hidden="true" className="text-signal" size={14} /> Causación registrada
        </p>
        <dl className="mt-3 divide-y divide-white/10">
          {demo.fields.map(({ label, value }) => (
            <div className="flex items-start justify-between gap-3 py-2 text-sm" key={label}>
              <dt className="text-steel">{label}</dt>
              <dd className="text-right tabular-nums text-porcelain">{value}</dd>
            </div>
          ))}
        </dl>
      </figure>
    </div>
  );
}
