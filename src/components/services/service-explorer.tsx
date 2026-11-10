"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { servicesPage } from "@/content/services";
import { serviceFlowLine, serviceFlowStep } from "@/lib/animations";

type Service = (typeof servicesPage.items)[number];

export function ServiceExplorer() {
  const explorerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(servicesPage.items[0].id);

  useEffect(() => {
    let frame = 0;

    function openLinkedService() {
      const id = window.location.hash.slice(1);
      const detail = Array.from(explorerRef.current?.querySelectorAll("details") ?? []).find(
        (item) => item.id === id
      );

      if (!detail) return;
      detail.open = true;
      // Opening a later service closes the previous one and changes its position.
      // Align after that layout change, including when arriving from the home page.
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => detail.scrollIntoView({ block: "start", behavior: "instant" }));
    }

    openLinkedService();
    window.addEventListener("hashchange", openLinkedService);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", openLinkedService);
    };
  }, []);

  return (
    <section className="scroll-mt-24 border-t border-white/15 bg-coal py-14 md:py-20" id="explorar" aria-labelledby="service-explorer-title">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-medium text-matrix">{servicesPage.explorer.eyebrow}</p>
          <h2 className="mt-4 max-w-xs text-3xl font-medium leading-tight md:text-4xl" id="service-explorer-title">
            {servicesPage.explorer.title}
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-steel">{servicesPage.explorer.description}</p>
          <nav aria-label="Índice de servicios" className="mt-6 hidden lg:block">
            <ol className="grid gap-1">
              {servicesPage.items.map((service, index) => (
                <li key={service.id}>
                  <a
                    aria-current={activeId === service.id ? "true" : undefined}
                    className="flex min-h-10 items-center gap-3 text-sm text-steel transition hover:text-porcelain aria-[current=true]:text-matrix"
                    href={`#${service.id}`}
                    onClick={() => {
                      const detail = explorerRef.current?.querySelector<HTMLDetailsElement>(`#${service.id}`);
                      if (detail) detail.open = true;
                    }}
                  >
                    <span aria-hidden="true" className="text-xs tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <a className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-matrix transition hover:text-porcelain" href="#hablemos">
            {servicesPage.explorer.contactLabel}
            <ArrowDown aria-hidden="true" size={16} />
          </a>
        </div>

        <div className="min-w-0 border-t border-white/20" ref={explorerRef}>
          {servicesPage.items.map((service, index) => (
            <ServiceDetail
              index={index}
              key={service.id}
              onExpandedChange={(open) => setActiveId((current) => open ? service.id : current === service.id ? null : current)}
              service={service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceDetail({ service, index, onExpandedChange }: { service: Service; index: number; onExpandedChange: (open: boolean) => void }) {
  const [expanded, setExpanded] = useState(index === 0);
  const reduceMotion = useReducedMotion();

  return (
    <details
      className="service-detail group scroll-mt-24 border-b border-white/20"
      id={service.id}
      name="services"
      onToggle={(event) => {
        setExpanded(event.currentTarget.open);
        onExpandedChange(event.currentTarget.open);
      }}
      open={expanded}
    >
      <summary
        className="service-summary flex cursor-pointer list-none items-start gap-4 py-6 transition-colors hover:text-matrix sm:gap-6 sm:py-7"
        onClick={(event) => {
          if (expanded) return;
          const detail = event.currentTarget.parentElement;
          requestAnimationFrame(() => detail?.scrollIntoView({ block: "start", behavior: reduceMotion ? "instant" : "smooth" }));
        }}
      >
        <span aria-hidden="true" className="mt-1.5 text-sm tabular-nums text-steel group-open:text-matrix">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1">
          <h3 className="text-xl font-medium leading-tight group-open:text-matrix sm:text-[1.7rem]">{service.shortTitle}</h3>
          <span className="mt-2 block max-w-xl text-sm leading-6 text-steel group-open:hidden">{service.summary}</span>
        </span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/25 transition-colors group-open:border-matrix group-open:bg-matrix group-open:text-ink">
          <Plus aria-hidden="true" className="transition-transform duration-300 group-open:rotate-45" size={18} />
        </span>
      </summary>

      <div className="pb-8 sm:pl-10">
        <p className="max-w-2xl text-base leading-7 text-steel">{service.summary}</p>

        <figure className="my-7 overflow-hidden rounded-xl border border-matrix/20 bg-ink px-5 py-6 sm:px-6">
          <figcaption>
            <span className="text-xs font-medium text-matrix">{servicesPage.explorer.exampleLabel}</span>
            <span className="mt-1 block text-base font-medium">{service.example.title}</span>
          </figcaption>
          <div className="relative mt-7">
            <motion.div
              aria-hidden="true"
              animate={reduceMotion ? { opacity: 1, scale: 1 } : expanded ? "connected" : "rest"}
              className="absolute bottom-6 left-[15px] top-4 w-px origin-top bg-matrix/45 sm:bottom-auto sm:left-4 sm:top-4 sm:h-px sm:w-[calc(66.666%+0.667rem)] sm:origin-left"
              initial={false}
              transition={reduceMotion ? { duration: 0 } : undefined}
              variants={serviceFlowLine}
            />
            <ol className="grid gap-6 sm:grid-cols-3 sm:gap-4">
              {service.example.steps.map((step, stepIndex) => (
                <motion.li
                  animate={expanded ? "connected" : "rest"}
                  className="relative flex items-start gap-4 sm:block"
                  custom={reduceMotion ? -1 : stepIndex}
                  initial={false}
                  key={step.label}
                  variants={serviceFlowStep}
                >
                  <span aria-hidden="true" className={`relative grid size-8 shrink-0 place-items-center rounded-full border border-matrix/50 text-xs ${stepIndex === 2 ? "bg-matrix font-semibold text-ink" : "bg-ink text-matrix"}`}>
                    {stepIndex + 1}
                  </span>
                  <div className="sm:mt-4">
                    <p className="text-sm font-semibold">{step.label}</p>
                    <p className="mt-1 max-w-44 text-xs leading-5 text-steel">{step.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </figure>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          <div>
            <h4 className="text-sm font-semibold">{servicesPage.explorer.problemLabel}</h4>
            <p className="mt-2 text-sm leading-7 text-steel">{service.problem}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">{servicesPage.explorer.deliveryLabel}</h4>
            <p className="mt-2 text-sm leading-7 text-steel">{service.delivery}</p>
          </div>
        </div>
        <div className="mt-7 border-l-2 border-matrix/60 pl-4">
          <h4 className="text-sm font-semibold text-matrix">{servicesPage.explorer.outcomeLabel}</h4>
          <p className="mt-2 text-sm leading-7 text-steel">{service.outcome}</p>
        </div>
        <Link className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-matrix transition hover:text-porcelain" href={siteConfig.primaryContactHref}>
          {servicesPage.explorer.contactLabel}
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </details>
  );
}
