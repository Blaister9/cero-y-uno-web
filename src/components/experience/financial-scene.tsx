"use client";

import { ArrowRight, BookOpen, Bot, Check, FileText, ScanLine } from "lucide-react";
import { motion, useTransform, type MotionValue } from "framer-motion";

import type { FinancialDemo } from "@/content/project-stories";
import { financialScroll } from "@/lib/animations";

const laneGrid = "grid grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)]";

export function FinancialScene({ demo, progress }: { demo: FinancialDemo; progress: MotionValue<number> }) {
  const backdropY = useTransform(progress, [0, 1], [-40, 42]);
  const backdropX = useTransform(progress, [0, 1], [-25, 30]);
  const botGlow = useTransform(progress, [0.2, 0.3, 0.77, 0.83], [0, 1, 1, 0]);
  const pending = useTransform(progress, [0.18, 0.23], [1, 0]);
  const reading = useTransform(progress, [0.23, 0.28, 0.47, 0.51], [0, 1, 1, 0]);
  const transferring = useTransform(progress, [0.51, 0.55, 0.77, 0.8], [0, 1, 1, 0]);
  const confirmed = useTransform(progress, financialScroll.confirmation, [0, 1]);
  const sealScale = useTransform(progress, financialScroll.confirmation, [0.86, 1]);
  const sealY = useTransform(progress, financialScroll.confirmation, [9, 0]);

  return (
    <div className="sticky top-[clamp(5rem,12svh,7rem)]" data-financial-scene>
      <div className="glass-panel relative isolate overflow-hidden rounded-2xl border border-white/15 shadow-premium">
        <motion.div
          className="pointer-events-none absolute -inset-14 -z-10 bg-[radial-gradient(ellipse_at_22%_28%,rgba(22,61,41,0.55),transparent_57%),radial-gradient(ellipse_at_92%_88%,rgba(168,237,190,0.14),transparent_45%)]"
          style={{ x: backdropX, y: backdropY }}
        />
        <header className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <p className="font-medium text-porcelain">Mesa de causación</p>
          <span className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-steel">Recreación</span>
        </header>

        <div className="px-4 pb-5 pt-5 xl:px-6">
          <div className={laneGrid}>
            <div className="flex items-center gap-2 rounded-t-xl border border-white/15 bg-ink/80 px-3 py-3 text-sm font-medium text-porcelain">
              <FileText className="shrink-0 text-matrix" size={17} />
              Documento de entrada
            </div>
            <div className="relative isolate mx-auto grid size-9 self-center place-items-center overflow-hidden rounded-full border border-matrix/30 bg-graphite text-matrix xl:size-11">
              <motion.div className="absolute inset-0 -z-10 bg-matrixdeep/80" style={{ opacity: botGlow }} />
              <Bot size={20} />
            </div>
            <div className="flex items-center gap-2 rounded-t-xl border border-white/15 bg-ink/80 px-3 py-3 text-sm font-medium text-porcelain">
              <BookOpen className="shrink-0 text-matrix" size={17} />
              Registro contable
            </div>
          </div>

          {demo.fields.map((field, index) => (
            <FinancialLane count={demo.fields.length} field={field} index={index} key={field.label} progress={progress} />
          ))}

          <div className={laneGrid}>
            <div className="rounded-b-xl border-x border-b border-white/15 bg-ink/80 px-3 py-2 text-xs text-steel">Documento de ejemplo</div>
            <span className="self-center text-center text-[0.65rem] font-semibold tracking-wide text-matrix">RPA</span>
            <div className="relative overflow-hidden rounded-b-xl border-x border-b border-white/15 bg-ink/80 px-3 py-2 text-xs text-steel">
              <motion.span style={{ opacity: pending }}>Pendiente de registro</motion.span>
              <motion.span className="absolute inset-x-3 top-2 text-matrix" style={{ opacity: reading }}>Leyendo el documento</motion.span>
              <motion.span className="absolute inset-x-3 top-2 text-matrix" style={{ opacity: transferring }}>Completando el registro</motion.span>
              <motion.span className="absolute inset-x-3 top-2 flex items-center gap-1.5 font-medium text-matrix" style={{ opacity: confirmed }}>
                <Check className="shrink-0" size={13} /> Registro completo
              </motion.span>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-16 items-center border-t border-white/10 px-5 py-3">
          <p className="text-xs leading-5 text-steel">{demo.caption}</p>
          <motion.div
            className="absolute inset-0 flex items-center justify-between gap-3 border-t border-matrix/20 bg-[#11241c] px-5"
            data-financial-confirmation
            style={{ opacity: confirmed, y: sealY }}
          >
            <div className="flex items-center gap-3">
              <motion.span className="grid size-8 shrink-0 place-items-center rounded-full border border-matrix/35 bg-matrix/10 text-matrix" style={{ scale: sealScale }}>
                <Check size={17} />
              </motion.span>
              <span className="text-sm font-medium text-porcelain">Causación registrada</span>
            </div>
            <span className="text-xs text-steel">Datos de ejemplo</span>
          </motion.div>
        </div>
        <motion.div className="h-0.5 origin-left bg-matrix/70" style={{ scaleX: progress }} />
      </div>
    </div>
  );
}

function FinancialLane({ field, index, count, progress }: { field: FinancialDemo["fields"][number]; index: number; count: number; progress: MotionValue<number> }) {
  const readWidth = (financialScroll.scan[1] - financialScroll.scan[0]) / count;
  const readStart = financialScroll.scan[0] + index * readWidth;
  const readEnd = readStart + readWidth;
  const sendWidth = (financialScroll.transfer[1] - financialScroll.transfer[0]) / count;
  const sendStart = financialScroll.transfer[0] + index * sendWidth;
  const sendEnd = sendStart + sendWidth;
  const arrival = sendEnd - sendWidth * 0.2;
  const scan = useTransform(progress, [readStart, readStart + readWidth * 0.16, readEnd - readWidth * 0.15, readEnd], [0, 1, 1, 0]);
  const readCheck = useTransform(progress, [readEnd - readWidth * 0.18, readEnd], [0, 1]);
  const scanY = useTransform(progress, [readStart, readEnd], ["0%", "100%"]);
  const packetX = useTransform(progress, [sendStart, sendEnd], ["0%", "100%"]);
  const packetOpacity = useTransform(progress, [sendStart, sendStart + sendWidth * 0.18, arrival, sendEnd], [0, 1, 1, 0]);
  const fill = useTransform(progress, [sendStart, sendEnd], [0, 1]);
  const value = useTransform(progress, [arrival, sendEnd], [0, 1]);
  const placeholder = useTransform(progress, [arrival, sendEnd], [1, 0]);

  return (
    <div className={laneGrid}>
      <div className="relative isolate min-w-0 overflow-hidden border-x border-b border-white/15 bg-ink/80 px-3 py-2.5">
        <motion.div className="pointer-events-none absolute inset-0 -z-10 bg-matrixdeep/60" style={{ opacity: scan }} />
        <motion.div className="pointer-events-none absolute inset-x-0 h-px bg-matrix shadow-[0_0_12px_#A8EDBE]" data-financial-scan style={{ opacity: scan, top: scanY }} />
        <div className="flex items-center justify-between gap-2 text-xs text-steel">
          {field.label}
          <motion.span className="text-matrix" style={{ opacity: readCheck }}><ScanLine size={13} /></motion.span>
        </div>
        <p className="mt-0.5 break-words text-sm font-medium tabular-nums text-porcelain">{field.value}</p>
      </div>

      <div className="relative z-10 self-center">
        <div className="h-px bg-white/15" />
        <motion.div className="absolute inset-x-0 top-0 h-px origin-left bg-matrix" style={{ scaleX: fill }} />
        <motion.span
          className="absolute top-1/2 w-max max-w-36 -translate-x-1/2 -translate-y-1/2 truncate rounded-full border border-matrix/60 bg-[#152B20] px-2.5 py-1 text-[0.65rem] font-medium text-porcelain shadow-[0_0_16px_#285E3D]"
          data-financial-packet
          style={{ left: packetX, opacity: packetOpacity }}
        >
          {field.value}
        </motion.span>
      </div>

      <div className="relative isolate min-w-0 border-x border-b border-white/15 bg-ink/80 px-3 py-2.5">
        <motion.div className="pointer-events-none absolute inset-0 -z-10 bg-matrix/[0.045]" style={{ opacity: value }} />
        <div className="flex items-center justify-between gap-2 text-xs text-steel">
          {field.label}
          <motion.span className="text-matrix" style={{ opacity: value }}><Check size={13} /></motion.span>
        </div>
        <div className="relative mt-0.5 text-sm font-medium tabular-nums text-porcelain">
          <motion.span className="absolute inset-0 text-steel" style={{ opacity: placeholder }}>—</motion.span>
          <motion.span className="block break-words" data-financial-value style={{ opacity: value }}>{field.value}</motion.span>
        </div>
      </div>
    </div>
  );
}

export function FinancialStill({ demo }: { demo: FinancialDemo }) {
  return (
    <div className="lg:sr-only motion-reduce:lg:not-sr-only">
      <figure className="glass-panel mt-6 rounded-xl border border-white/15 p-4">
        <figcaption className="text-xs text-steel">{demo.caption}</figcaption>
        <p className="mt-3 flex flex-wrap items-center gap-2 text-sm font-medium text-porcelain">
          Documento <ArrowRight aria-hidden="true" className="text-matrix" size={14} /> Bot RPA <ArrowRight aria-hidden="true" className="text-matrix" size={14} /> Causación registrada
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
