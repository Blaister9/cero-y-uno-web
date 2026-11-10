"use client";

import { ArrowRight, Check, MessageSquare, Monitor, Radio, Send } from "lucide-react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

import type { BlockchainDemo } from "@/content/blockchain-demo";
import type { FinancialDemo, PurchaseDemo, StoryChapter, WorkflowBeat } from "@/content/project-stories";
import type { serviceCase } from "@/content/service-case";

import { BlockchainScene, BlockchainStill } from "./blockchain-scene";
import { FinancialScene, FinancialStill } from "./financial-scene";
import { PowerPlatformScene, PowerPlatformStill } from "./power-platform-scene";

type CaseExample = typeof serviceCase.example;
type CaseStoryProps = {
  blockchainDemo?: BlockchainDemo;
  chapters: StoryChapter[];
  example?: CaseExample;
  financialDemo?: FinancialDemo;
  purchaseDemo?: PurchaseDemo;
  workflow?: WorkflowBeat[];
};

export function CaseStory({ blockchainDemo, chapters, example, financialDemo, purchaseDemo, workflow }: CaseStoryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", financialDemo || purchaseDemo || blockchainDemo ? "end 76%" : "end center"]
  });

  return (
    <div className="mt-12 lg:grid lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:gap-12 motion-reduce:lg:block" ref={trackRef}>
      <ol className="max-w-2xl divide-y divide-white/10 lg:divide-y-0 motion-reduce:lg:divide-y">
        {chapters.map((chapter, index) => (
          <li
            className="py-7 lg:flex lg:min-h-[55svh] lg:items-center lg:py-10 motion-reduce:lg:min-h-0 motion-reduce:lg:py-7"
            key={chapter.title}
          >
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.22em] text-signal" aria-hidden="true">0{index + 1}</p>
              <h4 className="text-balance text-2xl font-semibold leading-tight text-porcelain sm:text-3xl">
                {chapter.title}
              </h4>
              <p className="mt-4 text-base leading-7 text-steel lg:text-lg lg:leading-8">{chapter.body}</p>
              {chapter.detail && <p className="mt-4 text-sm leading-6 text-steel">{chapter.detail}</p>}
              {chapter.showExample && example && <ConversationExample example={example} />}
              {chapter.showExample && financialDemo && <FinancialStill demo={financialDemo} />}
              {chapter.showExample && purchaseDemo && <PowerPlatformStill demo={purchaseDemo} />}
              {chapter.showExample && blockchainDemo && <BlockchainStill demo={blockchainDemo} />}
              {workflow?.[index] && (
                <p className="glass-panel mt-4 rounded-lg border border-white/10 px-4 py-3 text-sm text-steel lg:hidden motion-reduce:lg:block">
                  <span className="block font-medium text-porcelain">{workflow[index].title}</span>
                  {workflow[index].detail}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div aria-hidden="true" className="hidden lg:block motion-reduce:lg:hidden">
        {example && <CaseScene example={example} progress={scrollYProgress} />}
        {financialDemo && <FinancialScene demo={financialDemo} progress={scrollYProgress} />}
        {purchaseDemo && <PowerPlatformScene demo={purchaseDemo} progress={scrollYProgress} />}
        {blockchainDemo && <BlockchainScene demo={blockchainDemo} progress={scrollYProgress} />}
        {workflow && <WorkflowScene beats={workflow} progress={scrollYProgress} />}
      </div>
    </div>
  );
}

function WorkflowScene({ beats, progress }: { beats: WorkflowBeat[]; progress: MotionValue<number> }) {
  const backdropY = useTransform(progress, [0, 1], [-22, 28]);
  return (
    <div className="sticky top-28">
      <div className="glass-panel relative isolate overflow-hidden rounded-2xl border border-white/15 p-6 shadow-premium xl:p-8">
        <motion.div className="pointer-events-none absolute -inset-y-8 inset-x-0 -z-10 bg-[radial-gradient(ellipse_at_30%_30%,rgba(18,58,111,0.34),transparent_70%)]" style={{ y: backdropY }} />
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-signal">Flujo ilustrado</p>
        <div className="relative grid gap-3">
          {beats.map((beat, index) => <WorkflowNode beat={beat} index={index} key={beat.title} progress={progress} />)}
        </div>
        <div className="mt-6 h-0.5 rounded-full bg-white/10">
          <motion.div className="h-full origin-left rounded-full bg-signal" style={{ scaleX: progress }} />
        </div>
      </div>
    </div>
  );
}

function WorkflowNode({ beat, index, progress }: { beat: WorkflowBeat; index: number; progress: MotionValue<number> }) {
  const start = index * 0.31;
  const opacity = useTransform(progress, [start, start + 0.14], [0.35, 1]);
  const x = useTransform(progress, [start, start + 0.14], [12, 0]);
  return (
    <motion.div className="flex items-center gap-4 rounded-xl border border-signal/20 bg-ink/70 p-4" style={{ opacity, x }}>
      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-signal/25 bg-deepblue/35 font-mono text-xs text-signal">0{index + 1}</span>
      <div>
        <p className="text-base font-medium text-porcelain">{beat.title}</p>
        <p className="mt-1 text-sm leading-6 text-steel">{beat.detail}</p>
      </div>
    </motion.div>
  );
}

function ConversationExample({ example }: { example: CaseExample }) {
  return (
    <figure className="mt-6 rounded-lg border border-white/10 bg-ink p-4 lg:sr-only motion-reduce:lg:not-sr-only">
      <figcaption className="mb-4 text-xs text-steel">{example.caption}</figcaption>
      <div className="grid gap-3">
        <ChatBubble label="Visitante" text={example.visitor} visitor />
        <ChatBubble label="Agente" text={example.agent} />
      </div>
    </figure>
  );
}

function ChatBubble({ label, text, visitor = false }: { label: string; text: string; visitor?: boolean }) {
  return (
    <div className={visitor ? "ml-auto w-fit max-w-[94%] rounded-lg border border-signal/25 bg-deepblue/35 px-3 py-2" : "mr-auto w-fit max-w-[94%] rounded-lg border border-white/10 bg-white/5 px-3 py-2"}>
      <p className="text-xs font-medium text-signal">{label}</p>
      <p className="mt-1 text-sm leading-5 text-porcelain">{text}</p>
    </div>
  );
}

function CaseScene({ example, progress }: { example: CaseExample; progress: MotionValue<number> }) {
  const backdropY = useTransform(progress, [0, 1], [-32, 38]);
  const visitorY = useTransform(progress, [0, 1], [15, -9]);
  const deskY = useTransform(progress, [0, 1], [-7, 12]);
  const deskOpacity = useTransform(progress, [0.07, 0.29], [0.32, 1]);
  const externalOpacity = useTransform(progress, [0.12, 0.29], [1, 0]);
  const request = useTransform(progress, [0.18, 0.34], [0, 1]);
  const requestX = useTransform(progress, [0.17, 0.32], [-12, 13]);
  const requestDot = useTransform(progress, [0.16, 0.2, 0.3, 0.35], [0, 1, 1, 0]);
  const response = useTransform(progress, [0.46, 0.61], [0, 1]);
  const responseY = useTransform(progress, [0.46, 0.61], [15, 0]);
  const responseX = useTransform(progress, [0.43, 0.58], [13, -12]);
  const responseDot = useTransform(progress, [0.42, 0.47, 0.57, 0.62], [0, 1, 1, 0]);
  const closed = useTransform(progress, [0.72, 0.88], [0, 1]);
  const closedY = useTransform(progress, [0.72, 0.88], [12, 0]);
  const waiting = useTransform(progress, [0.43, 0.53], [1, 0]);
  const active = useTransform(progress, [0.46, 0.57, 0.72, 0.85], [0, 1, 1, 0]);

  return (
    <div className="sticky top-[clamp(5rem,13svh,8rem)]">
      <div className="glass-panel relative isolate overflow-hidden rounded-xl border border-white/15 shadow-premium">
        <motion.div
          className="pointer-events-none absolute -inset-y-12 inset-x-0 -z-10 bg-[radial-gradient(ellipse_at_26%_38%,rgba(18,58,111,0.4),transparent_65%),radial-gradient(ellipse_at_88%_76%,rgba(141,180,255,0.12),transparent_55%)]"
          style={{ y: backdropY }}
        />
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <p className="text-sm font-medium text-porcelain">Atención en tiempo real</p>
          <span className="text-xs text-steel">Demo</span>
        </div>

        <div className="relative grid grid-cols-[minmax(0,1fr)_1.75rem_minmax(0,1fr)] items-start px-4 pb-7 pt-8 xl:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] xl:px-6">
          <motion.div className="rounded-lg border border-white/15 bg-ink/[0.92] shadow-premium" style={{ y: visitorY }}>
            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-3 text-sm text-porcelain">
              <MessageSquare className="shrink-0 text-signal" size={15} />
              Chat del portal
            </div>
            <div className="grid gap-3 p-3 xl:p-4">
              <ChatBubble label="Visitante" text={example.visitor} visitor />
              <motion.div style={{ opacity: response, y: responseY }}>
                <ChatBubble label="Agente" text={example.agent} />
              </motion.div>
              <motion.div className="flex items-start gap-2 border-t border-white/10 pt-3 text-xs leading-5 text-steel" style={{ opacity: closed, y: closedY }}>
                <Check className="mt-0.5 shrink-0 text-matrix" size={14} />
                <span><span className="block text-porcelain">Conversación cerrada</span>Transcripción disponible</span>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative mt-28 grid h-10 place-items-center text-signal/45">
            <ArrowRight size={16} />
            <motion.div className="absolute top-3 h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_10px_#8db4ff]" style={{ x: requestX, opacity: requestDot }} />
            <motion.div className="absolute bottom-2 h-1.5 w-1.5 rounded-full bg-matrix shadow-[0_0_10px_#a8edbe]" style={{ x: responseX, opacity: responseDot }} />
          </div>

          <div className="relative">
            <motion.div className="rounded-lg border border-white/15 bg-ink/[0.92] shadow-premium" style={{ opacity: deskOpacity, y: deskY }}>
              <div className="flex items-center gap-2 border-b border-white/10 px-3 py-3 text-sm text-porcelain">
                <Monitor className="shrink-0 text-signal" size={15} />
                Consola del agente
              </div>
              <div className="grid gap-3 p-3 xl:p-4">
                <p className="text-xs text-steel">Cola de consultas</p>
                <motion.div className="rounded border border-signal/25 bg-deepblue/30 p-3" style={{ opacity: request }}>
                  <p className="text-sm font-medium leading-5 text-porcelain">{example.topic}</p>
                  <div className="relative mt-2 h-5 text-xs leading-5">
                    <motion.span className="absolute inset-0 text-ember" style={{ opacity: waiting }}>En espera</motion.span>
                    <motion.span className="absolute inset-0 text-signal" style={{ opacity: active }}>En atención</motion.span>
                    <motion.span className="absolute inset-0 text-matrix" style={{ opacity: closed }}>Cerrada</motion.span>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-2 text-xs leading-5 text-steel" style={{ opacity: response }}>
                  <Send className="mt-0.5 shrink-0 text-signal" size={13} />
                  Respuesta enviada al portal
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="absolute inset-x-0 top-20 rounded-lg border border-white/15 bg-ink p-3 text-xs leading-5 text-steel" style={{ opacity: externalOpacity }}>
              <span className="block font-medium text-porcelain">Chat de terceros</span>
              Historial en la plataforma del proveedor
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-3">
          <p className="flex items-center gap-2 text-xs text-steel"><Radio className="text-signal" size={13} />{example.caption}</p>
        </div>
        <motion.div className="h-0.5 origin-left bg-signal/70" style={{ scaleX: progress }} />
      </div>
    </div>
  );
}
