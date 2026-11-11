"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MoveHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { capabilitiesContent } from "@/content/capabilities";
import { useCapabilityGallery } from "@/lib/use-capability-gallery";

export function CapabilityGallery() {
  const { trackRef, view, move, boundary } = useCapabilityGallery();
  const content = capabilitiesContent;
  const count = content.items.length;
  const range =
    view.first === view.last
      ? `${view.first + 1}`
      : `${view.first + 1}–${view.last + 1}`;

  return (
    <div
      className="home-capability-gallery"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Capacidades de Cero y Uno"
    >
      <div className="home-gallery-toolbar">
        <div className="home-gallery-controls">
          <span
            className="home-gallery-counter home-mono"
            aria-live="polite"
            aria-atomic="true"
          >
            {view.ready ? `${range} / ${count}` : `${count} capacidades`}
          </span>
          <button
            type="button"
            className="home-gallery-arrow"
            aria-label={content.previousLabel}
            aria-controls="home-capability-track"
            disabled={!view.ready || view.atStart}
            onClick={() => move(-1)}
          >
            <ArrowLeft size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="home-gallery-arrow"
            aria-label={content.nextLabel}
            aria-controls="home-capability-track"
            disabled={!view.ready || view.atEnd}
            onClick={() => move(1)}
          >
            <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
      <p className="sr-only" id="capability-keyboard-hint">
        {content.keyboardHint}
      </p>
      <ul
        className="home-capability-track"
        ref={trackRef}
        id="home-capability-track"
        tabIndex={0}
        aria-label="Servicios para explorar"
        aria-describedby="capability-keyboard-hint"
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
          if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            boundary(event.key === "End");
          }
        }}
      >
        {content.items.map((service, index) => (
          <li key={service.id} className="home-capability-slide">
            <Link className="home-capability-card" href={service.href}>
              <div className="home-capability-meta home-mono">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{service.category}</span>
              </div>
              <div className="home-capability-image">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 600px) 82vw, (max-width: 900px) 46vw, 410px"
                  style={{ objectPosition: service.image.position }}
                />
              </div>
              <div className="home-capability-title">
                <h3>{service.title}</h3>
                <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p>{service.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="home-gallery-footer">
        <p className="home-gallery-hint home-gallery-hint-touch home-mono">
          <MoveHorizontal size={16} aria-hidden="true" />
          {content.navigationHint}
        </p>
        <p className="home-gallery-hint home-gallery-hint-desktop home-mono">
          <MoveHorizontal size={16} aria-hidden="true" />
          {content.pointerHint}
        </p>
        <Link className="home-text-link" href={content.allServices.href}>
          {content.allServices.label}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
