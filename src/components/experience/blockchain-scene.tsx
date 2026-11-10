"use client";

import { Box, Check, FileText, Fingerprint, Link2, LockKeyhole, ShieldAlert } from "lucide-react";
import { motion, useTransform, type MotionValue } from "framer-motion";

import type { BlockchainDemo } from "@/content/blockchain-demo";
import { blockchainScroll } from "@/lib/animations";

function shortHash(hash: string) {
  return `${hash.slice(0, 8)}…${hash.slice(-6)}`;
}

export function BlockchainScene({ demo, progress }: { demo: BlockchainDemo; progress: MotionValue<number> }) {
  const backdropY = useTransform(progress, [0, 1], [-30, 38]);
  const documentY = useTransform(progress, [0, 1], [7, -3]);
  const fingerprint = useTransform(progress, blockchainScroll.hash, [0, 1]);
  const recorded = useTransform(progress, blockchainScroll.record, [0, 1]);
  const compare = useTransform(progress, blockchainScroll.compare, [0, 1]);
  const changeAt = (blockchainScroll.change[0] + blockchainScroll.change[1]) / 2;
  const difference = useTransform(progress, [changeAt, blockchainScroll.change[1]], [0, 1]);
  const originalPattern = useTransform(difference, [0, 1], [1, 0]);
  const stillMatches = useTransform(progress, [blockchainScroll.change[0], changeAt], [1, 0]);
  const match = useTransform(() => compare.get() * stillMatches.get());
  const idle = useTransform(compare, [0, 1], [1, 0]);
  const documentColor = useTransform(difference, [0, 1], ["#f7f8f4", "#d7b56d"]);
  const document = useTransform(progress, (position): string => position < changeAt ? demo.original : demo.changed);
  const displayedHash = useTransform(progress, (position): string => shortHash(position < changeAt ? demo.originalHash : demo.changedHash));
  const documentLabel = useTransform(progress, (position): string => {
    if (position < blockchainScroll.compare[0]) return "Documento original";
    return position < changeAt ? "Copia recibida" : "Copia modificada";
  });

  return (
    <div className="sticky top-[clamp(5rem,12svh,7rem)]" data-blockchain-scene>
      <div className="glass-panel relative isolate overflow-hidden rounded-2xl border border-white/15 shadow-premium">
        <motion.div
          className="pointer-events-none absolute -inset-12 -z-10 bg-[radial-gradient(ellipse_at_27%_24%,rgba(18,58,111,0.5),transparent_60%),radial-gradient(ellipse_at_94%_85%,rgba(168,237,190,0.11),transparent_52%)]"
          style={{ y: backdropY }}
        />
        <header className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
          <p className="font-medium text-porcelain">Verificación de un documento</p>
          <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-xs text-steel">SHA-256</span>
        </header>

        <div className="grid grid-cols-2 gap-3 px-4 pt-4 xl:gap-4">
          <motion.div className="rounded-xl border border-white/15 bg-ink/80 px-3 py-3 sm:px-4" style={{ y: documentY }}>
            <p className="flex items-center gap-2 text-xs font-medium text-steel">
              <FileText className="shrink-0 text-signal" size={15} />
              <motion.span>{documentLabel}</motion.span>
            </p>
            <motion.p className="mt-3 min-h-12 text-base font-medium leading-6" data-blockchain-document style={{ color: documentColor }}>
              {document}
            </motion.p>
            <motion.p className="mt-2 text-xs text-ember" style={{ opacity: difference }}>Cambio detectado en el texto</motion.p>
          </motion.div>

          <div className="rounded-xl border border-white/15 bg-ink/80 px-3 py-3 sm:px-4">
            <p className="flex items-center gap-2 text-xs font-medium text-steel">
              <Fingerprint className="shrink-0 text-signal" size={15} /> Huella calculada
            </p>
            <motion.div className="relative mt-3 grid min-h-12 items-center" style={{ opacity: fingerprint }}>
              <motion.div className="col-start-1 row-start-1" style={{ opacity: originalPattern }}>
                <HashPattern hash={demo.originalHash} />
              </motion.div>
              <motion.div className="col-start-1 row-start-1" style={{ opacity: difference }}>
                <HashPattern changed hash={demo.changedHash} />
              </motion.div>
            </motion.div>
            <motion.p className="mt-2 break-all font-mono text-sm text-porcelain" data-blockchain-candidate style={{ opacity: fingerprint }}>{displayedHash}</motion.p>
          </div>
        </div>

        <div className="mx-4 my-4 rounded-xl border border-white/15 bg-ink/75 px-3 py-3">
          <p className="mb-2.5 flex items-center gap-2 text-xs font-medium text-steel"><Link2 className="text-signal" size={15} /> Registro compartido</p>
          <div className="relative grid grid-cols-[1fr_minmax(0,2fr)_1fr] items-center gap-2">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/15" />
            <motion.div className="absolute inset-x-0 top-1/2 h-px origin-left bg-signal" style={{ scaleX: recorded }} />
            <div className="relative flex min-w-0 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-graphite px-2 py-2.5 text-xs text-steel">
              <Box className="shrink-0 text-signal" size={14} /> Anterior
            </div>
            <div className="relative min-w-0 overflow-hidden rounded-lg border border-signal/30 bg-[#102136] px-2.5 py-2.5 text-center">
              <p className="flex items-center justify-center gap-1.5 text-xs text-steel"><LockKeyhole className="shrink-0 text-signal" size={13} /> Huella del registro</p>
              <motion.p className="mt-1 break-all font-mono text-xs text-porcelain" data-blockchain-record style={{ opacity: recorded }}>{shortHash(demo.originalHash)}</motion.p>
            </div>
            <div className="relative flex min-w-0 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-graphite px-2 py-2.5 text-xs text-steel">
              <Box className="shrink-0 text-signal" size={14} /> Siguiente
            </div>
          </div>
        </div>

        <div className="relative flex min-h-14 items-center border-t border-white/10 px-5 text-sm">
          <motion.p className="text-steel" style={{ opacity: idle }}>Esperando la copia para comparar</motion.p>
          <motion.p className="absolute inset-0 flex items-center gap-2 bg-[#10221b] px-5 font-medium text-matrix" data-blockchain-match style={{ opacity: match }}>
            <Check size={17} /> Las huellas coinciden
          </motion.p>
          <motion.p className="absolute inset-0 flex items-center gap-2 bg-[#241d16] px-5 font-medium text-ember" data-blockchain-mismatch style={{ opacity: difference }}>
            <ShieldAlert size={17} /> Las huellas son distintas
          </motion.p>
        </div>
        <p className="border-t border-white/10 px-5 py-2.5 text-xs text-steel">{demo.caption}</p>
        <motion.div className="h-0.5 origin-left bg-signal/70" style={{ scaleX: progress }} />
      </div>
    </div>
  );
}

function HashPattern({ changed = false, hash }: { changed?: boolean; hash: string }) {
  return (
    <div className="grid grid-cols-12 gap-1">
      {hash.slice(0, 24).split("").map((digit, index) => (
        <span className={`h-3 rounded-sm ${changed ? "bg-ember" : "bg-signal"}`} key={index} style={{ opacity: 0.18 + Number.parseInt(digit, 16) / 20 }} />
      ))}
    </div>
  );
}

export function BlockchainStill({ demo }: { demo: BlockchainDemo }) {
  return (
    <div className="lg:sr-only motion-reduce:lg:not-sr-only">
      <figure className="glass-panel mt-6 rounded-xl border border-white/15 p-4">
        <figcaption className="text-xs text-steel">{demo.caption}</figcaption>
        <dl className="mt-3 divide-y divide-white/10 text-sm">
          <div className="py-2">
            <dt className="font-medium text-porcelain">Copia que coincide</dt>
            <dd className="mt-1 text-steel">{demo.original} <code className="block text-xs text-signal">{shortHash(demo.originalHash)}</code></dd>
          </div>
          <div className="py-2">
            <dt className="font-medium text-porcelain">Copia con un cambio</dt>
            <dd className="mt-1 text-steel">{demo.changed} <code className="block text-xs text-ember">{shortHash(demo.changedHash)}</code></dd>
          </div>
        </dl>
      </figure>
    </div>
  );
}
