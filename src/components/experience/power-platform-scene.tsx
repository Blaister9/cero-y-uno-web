"use client";

import { ArrowRight, ChartNoAxesColumn, Check, ClipboardCheck, Database, LayoutGrid } from "lucide-react";
import { motion, useTransform, type MotionValue } from "framer-motion";

import type { PurchaseDemo } from "@/content/project-stories";
import { purchaseScroll } from "@/lib/animations";

export function PowerPlatformScene({ demo, progress }: { demo: PurchaseDemo; progress: MotionValue<number> }) {
  const backdropY = useTransform(progress, [0, 1], [-28, 36]);
  const formY = useTransform(progress, [0, 1], [6, -2]);
  const form = useTransform(progress, purchaseScroll.form, [0, 1]);
  const emptyForm = useTransform(form, [0, 0.45], [1, 0]);
  const handoff = useTransform(progress, purchaseScroll.handoff, [0, 1]);
  const emptyInbox = useTransform(handoff, [0, 0.35], [1, 0]);
  const ticketX = useTransform(progress, purchaseScroll.handoff, [-15, 0]);
  const packetX = useTransform(progress, purchaseScroll.handoff, ["0%", "100%"]);
  const packetOpacity = useTransform(progress, [0.28, 0.32, 0.43, 0.47], [0, 1, 1, 0]);
  const decision = useTransform(progress, purchaseScroll.decision, [0, 1]);
  const status = useTransform(progress, (position): string => {
    if (position < purchaseScroll.form[1]) return "Sin registrar";
    return position < purchaseScroll.decision[1] ? "En revisión" : "Aprobada";
  });

  return (
    <div className="sticky top-[clamp(5rem,12svh,7rem)]" data-purchase-scene>
      <div className="glass-panel relative isolate overflow-hidden rounded-2xl border border-white/15 shadow-premium">
        <motion.div
          className="pointer-events-none absolute -inset-12 -z-10 bg-[radial-gradient(ellipse_at_18%_26%,rgba(18,58,111,0.48),transparent_62%),radial-gradient(ellipse_at_90%_88%,rgba(168,237,190,0.12),transparent_53%)]"
          style={{ y: backdropY }}
        />
        <header className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
          <p className="font-medium text-porcelain">Solicitudes de compra</p>
          <span className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-steel">Ejemplo</span>
        </header>

        <div className="grid grid-cols-[minmax(0,1fr)_1.75rem_minmax(0,1fr)] items-start px-4 pt-4 xl:grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)]">
          <motion.div className="rounded-xl border border-white/15 bg-ink/[0.88]" style={{ y: formY }}>
            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5 text-sm font-medium text-porcelain">
              <LayoutGrid className="shrink-0 text-signal" size={16} />
              Power Apps
            </div>
            <div className="px-3 py-3">
              <p className="text-xs text-steel">Solicitud de compra</p>
              <div className="relative mt-2 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-2">
                <motion.span className="absolute inset-x-2.5 top-2 text-xs text-steel" style={{ opacity: emptyForm }}>Artículo y cantidad</motion.span>
                <motion.p className="relative text-sm font-medium leading-5 text-porcelain" style={{ opacity: form }}>
                  {demo.item}
                  <span className="block text-xs font-normal text-steel">{demo.quantity} · {demo.team}</span>
                </motion.p>
              </div>
              <motion.p className="mt-2 font-mono text-xs text-signal" style={{ opacity: form }}>{demo.reference}</motion.p>
            </div>
          </motion.div>

          <div className="relative mt-24 h-px bg-white/15">
            <motion.div className="absolute inset-0 origin-left bg-signal" style={{ scaleX: handoff }} />
            <motion.span className="absolute top-1/2 z-10 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_12px_#8db4ff]" style={{ left: packetX, opacity: packetOpacity }} />
          </div>

          <div className="overflow-hidden rounded-xl border border-white/15 bg-ink/[0.88]">
            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5 text-sm font-medium text-porcelain">
              <ClipboardCheck className="shrink-0 text-signal" size={16} />
              Power Automate
            </div>
            <div className="relative px-3 py-3">
              <p className="text-xs text-steel">Bandeja de Compras</p>
              <motion.p className="absolute inset-x-3 top-10 text-xs text-steel" style={{ opacity: emptyInbox }}>A la espera de una solicitud</motion.p>
              <motion.div className="relative mt-2 rounded-lg border border-signal/25 bg-[#102136] px-2.5 py-2" data-purchase-inbox style={{ opacity: handoff, x: ticketX }}>
                <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 text-xs">
                  <p className="font-mono text-signal">{demo.reference}</p>
                  <span className="text-steel">{demo.quantity}</span>
                </div>
                <p className="mt-1 text-sm font-medium leading-5 text-porcelain">{demo.item}</p>
                <div className="relative mt-1 h-4 text-xs">
                  <span className="text-ember">Por aprobar</span>
                  <motion.span className="absolute inset-0 flex items-center gap-1 bg-[#102136] font-medium text-matrix" data-purchase-approval style={{ opacity: decision }}>
                    <Check size={13} /> Aprobada
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mx-4 mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2.5 text-xs">
          <p className="flex items-center gap-2 text-steel"><Database className="text-signal" size={14} /> Dataverse</p>
          <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1">
            <motion.span className="font-mono text-steel" style={{ opacity: form }}>{demo.reference}</motion.span>
            <motion.span className="font-medium text-porcelain" data-purchase-status>{status}</motion.span>
          </div>
        </div>

        <PurchaseReport demo={demo} progress={progress} />

        <p className="border-t border-white/10 px-5 py-3 text-xs text-steel">{demo.caption}</p>
        <motion.div className="h-0.5 origin-left bg-signal/70" style={{ scaleX: progress }} />
      </div>
    </div>
  );
}

function PurchaseReport({ demo, progress }: { demo: PurchaseDemo; progress: MotionValue<number> }) {
  const report = useTransform(progress, purchaseScroll.report, [0, 1]);
  const total = demo.pending + demo.approved;
  const pendingBar = useTransform(report, (change) => (demo.pending - change) / total);
  const approvedBar = useTransform(report, (change) => (demo.approved + change) / total);
  const pending = useTransform(report, (change) => demo.pending - Math.round(change));
  const approved = useTransform(report, (change) => demo.approved + Math.round(change));
  const reportStatus = useTransform(progress, (position): string => position < purchaseScroll.report[1] ? "Vista anterior" : "Informe actualizado");

  return (
    <div className="mx-4 my-4 rounded-xl border border-white/15 bg-ink/[0.85] px-3 py-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <p className="flex items-center gap-2 font-medium text-porcelain"><ChartNoAxesColumn className="text-signal" size={15} /> Power BI</p>
        <motion.span className="text-steel" data-purchase-report>{reportStatus}</motion.span>
      </div>
      <div className="mt-2.5 grid gap-2">
        <div className="grid grid-cols-[5rem_1fr_1.25rem] items-center gap-2 text-xs text-steel">
          <span>Pendientes</span>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full origin-left rounded-full bg-ember" style={{ scaleX: pendingBar }} />
          </div>
          <motion.span className="text-right font-medium tabular-nums text-porcelain" data-purchase-pending>{pending}</motion.span>
        </div>
        <div className="grid grid-cols-[5rem_1fr_1.25rem] items-center gap-2 text-xs text-steel">
          <span>Aprobadas</span>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full origin-left rounded-full bg-matrix" style={{ scaleX: approvedBar }} />
          </div>
          <motion.span className="text-right font-medium tabular-nums text-porcelain" data-purchase-approved>{approved}</motion.span>
        </div>
      </div>
    </div>
  );
}

export function PowerPlatformStill({ demo }: { demo: PurchaseDemo }) {
  return (
    <div className="lg:sr-only motion-reduce:lg:not-sr-only">
      <figure className="glass-panel mt-6 rounded-xl border border-white/15 p-4">
        <figcaption className="text-xs text-steel">{demo.caption}</figcaption>
        <p className="mt-3 text-sm font-medium text-porcelain">{demo.reference} · {demo.item} · {demo.quantity}</p>
        <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-steel">
          Solicitud <ArrowRight aria-hidden="true" className="text-signal" size={14} /> Aprobación <ArrowRight aria-hidden="true" className="text-signal" size={14} /> Informe actualizado
        </p>
        <dl className="mt-3 divide-y divide-white/10 text-sm">
          <div className="flex justify-between gap-2 py-2"><dt className="text-steel">Pendientes</dt><dd className="text-porcelain">De {demo.pending} a {demo.pending - 1}</dd></div>
          <div className="flex justify-between gap-2 py-2"><dt className="text-steel">Aprobadas</dt><dd className="text-porcelain">De {demo.approved} a {demo.approved + 1}</dd></div>
        </dl>
      </figure>
    </div>
  );
}
