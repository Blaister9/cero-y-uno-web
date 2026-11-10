"use client";

import { Activity, ArrowRight, Cable, Store, Warehouse } from "lucide-react";
import { motion, useTransform, type MotionValue } from "framer-motion";

import type { IntegrationDemo } from "@/content/project-stories";
import { integrationScroll } from "@/lib/animations";

const { webhook, request, lost, retry, response } = integrationScroll;

export function IntegrationScene({ demo, progress }: { demo: IntegrationDemo; progress: MotionValue<number> }) {
  const backdropY = useTransform(progress, [0, 1], [-28, 34]);
  const keyOpacity = useTransform(progress, [webhook[1], request[0]], [0, 1]);
  const reservedColor = useTransform(progress, [request[1] - 0.001, request[1] + 0.025], ["#172431", "#5c9e7d"]);
  const available = useTransform(progress, (position) => position < request[1] ? demo.stock : demo.stock - demo.quantity);
  const reserved = useTransform(progress, (position) => position < request[1] ? 0 : demo.quantity);
  const reservation = useTransform(progress, (position) => position < request[1] ? "Sin reserva" : demo.reservation);
  const trace = useTransform(progress, (position) => {
    if (position >= response[1]) return `${demo.reservation} confirmada · ${demo.quantity} unidades apartadas`;
    if (position >= retry[0]) return "Segundo intento · misma clave de reserva";
    if (position >= lost[1]) return "Tiempo de espera agotado · reserva por confirmar";
    if (position >= request[1]) return "Unidades apartadas · esperando la respuesta de la API";
    if (position >= request[0]) return "API de inventario · solicitud de reserva en camino";
    if (position >= webhook[1]) return "Webhook recibido · preparando la reserva";
    return `${demo.order} confirmado en la tienda`;
  });
  const traceColor = useTransform(progress, (position) => {
    if (position >= response[1]) return "#a8edbe";
    if (position >= lost[1]) return "#d7b56d";
    return "#8db4ff";
  });

  return (
    <div className="sticky top-[clamp(5rem,12svh,7rem)]" data-integration-scene>
      <div className="glass-panel relative isolate overflow-hidden rounded-2xl border border-white/15 shadow-premium">
        <motion.div
          className="pointer-events-none absolute -inset-12 -z-10 bg-[radial-gradient(ellipse_at_27%_28%,rgba(18,58,111,0.48),transparent_63%),radial-gradient(ellipse_at_92%_85%,rgba(168,237,190,0.14),transparent_58%)]"
          style={{ y: backdropY }}
        />
        <header className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
          <p className="font-medium text-porcelain">Del pedido a la reserva</p>
          <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-xs text-signal">{demo.order}</span>
        </header>

        <div className="relative mx-4 grid h-14 items-end">
          <div className="absolute inset-x-[16.6667%] bottom-2 h-px bg-signal/35">
            <span className="absolute left-0 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal bg-ink" />
            <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal bg-ink" />
            <span className="absolute right-0 top-0 size-2 translate-x-1/2 -translate-y-1/2 rounded-full border border-signal bg-ink" />
            <DeliveryPacket from={0} label="Webhook" progress={progress} range={webhook} to={50} />
            <DeliveryPacket from={50} label="Reservar" progress={progress} range={request} to={100} />
            <DeliveryPacket from={100} label="Respuesta perdida" progress={progress} range={lost} to={74} tone="amber" />
            <DeliveryPacket from={50} label="Reintento" progress={progress} range={retry} to={100} tone="amber" />
            <DeliveryPacket from={100} label="Confirmación" progress={progress} range={response} to={50} tone="mint" />
          </div>
        </div>

        <div className="mx-4 mb-4 grid grid-cols-3 gap-2 pt-1 xl:gap-3">
          <div className="rounded-xl border border-white/15 bg-ink/80 p-3">
            <p className="flex items-center gap-2 text-xs font-medium text-steel"><Store className="shrink-0 text-signal" size={15} /> Tienda</p>
            <p className="mt-3 text-sm font-medium leading-5 text-porcelain">{demo.item}</p>
            <p className="mt-1 text-xs leading-5 text-steel">{demo.sku} · {demo.quantity} unidades</p>
          </div>

          <div className="rounded-xl border border-white/15 bg-ink/80 p-3">
            <p className="flex items-center gap-2 text-xs font-medium text-steel"><Cable className="shrink-0 text-signal" size={15} /> Integración</p>
            <motion.div className="mt-3" style={{ opacity: keyOpacity }}>
              <p className="text-xs text-steel">Clave de reserva</p>
              <code className="mt-1 block break-all text-xs leading-5 text-signal" data-integration-key>{demo.reservationKey}</code>
            </motion.div>
          </div>

          <div className="rounded-xl border border-white/15 bg-ink/80 p-3">
            <p className="flex items-center gap-2 text-xs font-medium text-steel"><Warehouse className="shrink-0 text-signal" size={15} /> Inventario</p>
            <div className="mt-3 grid grid-cols-4 gap-1 xl:grid-cols-8">
              {Array.from({ length: demo.stock }, (_, index) => (
                <motion.span
                  className="h-2.5 rounded-sm bg-[#172431]"
                  key={index}
                  style={{ backgroundColor: index >= demo.stock - demo.quantity ? reservedColor : undefined }}
                />
              ))}
            </div>
            <p className="mt-2 flex flex-wrap gap-x-2 gap-y-0.5 text-xs leading-5 text-steel">
              <span><motion.span className="tabular-nums text-porcelain" data-integration-available>{available}</motion.span> libres</span>
              <span><motion.span className="tabular-nums text-matrix" data-integration-reserved>{reserved}</motion.span> en reserva</span>
            </p>
            <motion.p className="mt-1 font-mono text-xs text-porcelain" data-integration-reservation>{reservation}</motion.p>
          </div>
        </div>

        <div className="border-t border-white/10 bg-ink/60 px-5 py-3">
          <p className="text-xs text-steel">Registro de la integración</p>
          <motion.div className="mt-1.5 flex min-h-10 items-start gap-2 text-sm font-medium leading-5 xl:min-h-5" style={{ color: traceColor }}>
            <Activity className="mt-0.5 shrink-0" size={16} />
            <motion.p data-integration-trace>{trace}</motion.p>
          </motion.div>
        </div>
        <p className="border-t border-white/10 px-5 py-2.5 text-xs text-steel">{demo.caption}</p>
        <motion.div className="h-0.5 origin-left bg-signal/70" style={{ scaleX: progress }} />
      </div>
    </div>
  );
}

const packetTone = {
  blue: "border-signal/40 text-signal",
  amber: "border-ember/40 text-ember",
  mint: "border-matrix/40 text-matrix"
};

function DeliveryPacket({ from, label, progress, range: [start, end], to, tone = "blue" }: {
  from: number;
  label: string;
  progress: MotionValue<number>;
  range: readonly [number, number];
  to: number;
  tone?: keyof typeof packetTone;
}) {
  const left = useTransform(progress, [start, end], [`${from}%`, `${to}%`]);
  const fade = (end - start) * 0.2;
  const opacity = useTransform(progress, [start, start + fade, end - fade, end], [0, 1, 1, 0]);

  return (
    <motion.div className="absolute bottom-1" style={{ left, opacity }}>
      <span className={`flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border bg-ink px-2.5 py-1 text-xs font-medium ${packetTone[tone]}`}>
        <ArrowRight className={from > to ? "rotate-180" : undefined} size={13} />
        {label}
      </span>
    </motion.div>
  );
}

export function IntegrationStill({ demo }: { demo: IntegrationDemo }) {
  return (
    <figure className="glass-panel mt-6 rounded-xl border border-white/15 p-4 lg:sr-only motion-reduce:lg:not-sr-only">
      <figcaption className="text-xs text-steel">{demo.caption}</figcaption>
      <dl className="mt-2 divide-y divide-white/10 text-sm">
        <div className="py-2">
          <dt className="font-medium text-porcelain">Tienda</dt>
          <dd className="mt-1 text-steel">{demo.order} · {demo.item} ({demo.sku}) · {demo.quantity} unidades</dd>
        </div>
        <div className="py-2">
          <dt className="font-medium text-porcelain">Primer envío y reintento</dt>
          <dd className="mt-1 text-steel">Ambos usan la clave <code className="break-all text-signal">{demo.reservationKey}</code>.</dd>
        </div>
        <div className="py-2">
          <dt className="font-medium text-matrix">Una sola reserva · {demo.reservation}</dt>
          <dd className="mt-1 text-steel">De {demo.stock} unidades libres a {demo.stock - demo.quantity} libres y {demo.quantity} apartadas.</dd>
        </div>
      </dl>
    </figure>
  );
}
