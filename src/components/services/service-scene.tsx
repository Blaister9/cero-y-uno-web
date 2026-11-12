"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCheck,
  Circle,
  FileText,
  Layers,
  Send,
} from "lucide-react";

import { servicesPage } from "@/content/services";
import { serviceVisuals as visuals } from "@/content/service-visuals";
import { useServiceScene } from "@/lib/use-service-scene";

type Service = (typeof servicesPage.items)[number];

export function ServiceScene({ service }: { service: Service }) {
  const scene = useServiceScene();
  return (
    <figure className={`service-figure scene-${service.id}`} ref={scene.ref}>
      <div className="service-stage" aria-hidden="true">
        {service.id === "software-a-medida" && (
          <div className="service-app">
            <div className="service-window-bar">
              <span className="window-dots">● ● ●</span>
              <span>{visuals.software.name}</span>
            </div>
            <div className="service-app-body">
              <div className="service-app-sidebar">
                <Layers size={22} />
                {visuals.software.nav.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="service-app-content">
                <small>{visuals.software.record}</small>
                <strong>{visuals.software.title}</strong>
                <div className="service-app-table">
                  <div className="service-app-row row-heading">
                    {visuals.software.columns.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  {visuals.software.rows.map((row) => (
                    <div className="service-app-row" key={row[0]}>
                      {row.map((cell) => (
                        <span key={cell}>{cell}</span>
                      ))}
                    </div>
                  ))}
                </div>
                <motion.div
                  className="service-app-trace"
                  style={{ scaleX: scene.progress }}
                />
                <p className="service-app-note">
                  <CheckCheck size={15} />
                  {visuals.software.note}
                </p>
              </div>
            </div>
            <div className="service-window-foot">
              <span>{visuals.software.status}</span>
              <Check size={14} />
            </div>
          </div>
        )}
        {service.id === "automatizacion" && (
          <>
            <motion.div
              className="service-paper"
              style={{ rotate: scene.rotate }}
            >
              <div className="service-paper-head">
                <FileText size={22} />
                <span>{visuals.automation.number}</span>
              </div>
              <small>{visuals.automation.type}</small>
              <strong>{visuals.automation.title}</strong>
              <dl>
                {visuals.automation.fields.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <motion.div
                className="service-stamp"
                style={{ y: scene.travel, opacity: scene.reveal }}
              >
                {visuals.automation.stamp}
                <Check size={20} />
              </motion.div>
              <small className="service-paper-date">
                {visuals.automation.date}
              </small>
            </motion.div>
            <ol className="service-paper-trail">
              {visuals.automation.trail.map((label) => (
                <li key={label}>
                  <Check size={14} />
                  {label}
                </li>
              ))}
            </ol>
          </>
        )}
        {service.id === "integraciones-y-apis" && (
          <>
            <div className="service-receipt">
              <small>{visuals.integration.origin}</small>
              <div className="receipt-product">
                <FileText size={24} />
                <strong>{visuals.integration.product}</strong>
              </div>
              <p>{visuals.integration.quantity}</p>
              <span className="receipt-barcode" />
            </div>
            <div className="service-transit">
              <span>{visuals.integration.event}</span>
              <motion.div style={{ x: scene.travel }}>
                <ArrowRight size={30} />
              </motion.div>
            </div>
            <div className="service-terminal">
              <small>{visuals.integration.destination}</small>
              <pre>{visuals.integration.request.join("\n")}</pre>
              <motion.div
                className="service-response"
                style={{ opacity: scene.reveal }}
              >
                <Check size={15} />
                {visuals.integration.response}
              </motion.div>
            </div>
          </>
        )}
        {service.id === "power-platform" && (
          <>
            <div className="service-phone">
              <span className="service-phone-speaker" />
              <div>
                <small>{visuals.power.eyebrow}</small>
                <strong>{visuals.power.title}</strong>
                {visuals.power.fields.map(([label, value]) => (
                  <div className="service-phone-field" key={label}>
                    <small>{label}</small>
                    <span>{value}</span>
                  </div>
                ))}
                <div className="service-phone-action">
                  <Check size={15} />
                  {visuals.power.action}
                </div>
              </div>
            </div>
            <motion.div
              className="service-approval"
              style={{ y: scene.travel }}
            >
              <Send size={20} />
              <span>{visuals.power.approval}</span>
              <strong>
                <CheckCheck size={16} />
                {visuals.power.status}
              </strong>
            </motion.div>
            <div className="service-power-tools">
              {visuals.power.tools.map((tool, i) => (
                <span key={tool}>
                  <i>{i + 1}</i>
                  {tool}
                </span>
              ))}
            </div>
          </>
        )}
        {service.id === "analitica-e-ia" && (
          <div className="service-analytics">
            <small>{visuals.analytics.eyebrow}</small>
            <strong>{visuals.analytics.title}</strong>
            <div className="service-chart-key">
              <span>
                <Circle size={9} fill="currentColor" />
                {visuals.analytics.series}
              </span>
              <span>{visuals.analytics.period}</span>
            </div>
            <svg viewBox="0 0 420 180" className="service-chart" fill="none">
              <path
                d="M20 40H400M20 90H400M20 140H400"
                stroke="#d7dde1"
                strokeDasharray="3 5"
              />
              <path
                d="M20 140 L115 92 L210 116 L305 28 L400 60 L400 160 L20 160Z"
                fill="#dce7ed"
              />
              <motion.path
                d="M20 140 L115 92 L210 116 L305 28 L400 60"
                stroke="#42657c"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: scene.progress }}
              />
              {visuals.analytics.values.map((value, i) => (
                <g key={i}>
                  <circle
                    cx={[20, 115, 210, 305, 400][i]}
                    cy={[140, 92, 116, 28, 60][i]}
                    r="4"
                    fill="#42657c"
                  />
                  <text
                    x={[20, 115, 210, 305, 400][i]}
                    y={[125, 77, 101, 13, 45][i]}
                    textAnchor="middle"
                    fill="#354d5c"
                    fontSize="12"
                  >
                    {value}
                  </text>
                </g>
              ))}
            </svg>
            <div className="service-chart-days">
              {visuals.analytics.days.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="service-insight">
              <span>{visuals.analytics.question}</span>
              <p>{visuals.analytics.answer}</p>
              <small>{visuals.analytics.source}</small>
            </div>
          </div>
        )}
        {service.id === "modernizacion" && (
          <div className="service-system">
            <small>{visuals.modernization.eyebrow}</small>
            <strong>{visuals.modernization.title}</strong>
            <div className="service-system-map">
              <span className="service-system-label">
                {visuals.modernization.current}
              </span>
              <div className="service-system-base">
                {visuals.modernization.preserved.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              <motion.div
                className="service-system-piece"
                style={{ y: scene.travel }}
              >
                <Layers size={28} />
                <span>{visuals.modernization.replacement}</span>
                <Check size={17} />
              </motion.div>
            </div>
            <ul className="service-system-checks">
              {visuals.modernization.checks.map((label) => (
                <li key={label}>
                  <Check size={14} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <figcaption>
        <span className="services-mono">{servicesPage.exampleDisclosure}</span>
        <strong>{service.example.title}</strong>
        <span className="service-example-flow">
          {service.example.steps.map((step) => step.label).join(" → ")}
        </span>
      </figcaption>
    </figure>
  );
}
