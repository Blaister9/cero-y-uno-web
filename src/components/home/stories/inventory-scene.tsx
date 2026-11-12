import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  CheckCheck,
  Lightbulb,
  PackageCheck,
  RefreshCw,
  WifiOff,
} from "lucide-react";
import type { IntegrationDemo } from "@/content/project-stories";
import { inventoryScene as copy } from "@/content/story-scenes";
import { SceneShell, type SceneProps } from "./scene-shell";

export function InventoryScene({
  demo,
  stage,
  progress,
  onStage,
}: SceneProps & { demo: IntegrationDemo }) {
  const reserved = stage >= 2;
  const [lit, setLit] = useState(false);
  return (
    <SceneShell
      name="inventory"
      label={copy.label}
      stage={stage}
      progress={progress}
      status={copy.states[stage]}
    >
      <div className="inventory-order">
        <span className="story-overline">{copy.shop}</span>
        <h4>{demo.order}</h4>
        <button
          className="lamp-interaction"
          type="button"
          aria-pressed={lit}
          aria-label={copy.lampToggle}
          data-lit={lit}
          onClick={() => setLit((value) => !value)}
        >
          <span className="lamp-light" aria-hidden="true" />
          <Image
            src={copy.image}
            width={190}
            height={210}
            sizes="190px"
            alt={demo.item}
            className="order-lamp"
          />
          <span className="lamp-switch">
            <Lightbulb size={14} aria-hidden="true" />
            {lit ? copy.lampOn : copy.lampOff}
          </span>
        </button>
        <strong>{demo.item}</strong>
        <span className="inventory-sku">
          {demo.sku} × {demo.quantity}
        </span>
        <div className="order-perforation" />
        <div className="order-key">
          <span>{stage === 0 ? copy.ticket : copy.key}</span>
          <code>{stage >= 1 ? demo.reservationKey : demo.order}</code>
        </div>
      </div>
      <div className="inventory-connection" aria-hidden="true">
        {stage === 2 ? (
          <WifiOff />
        ) : stage === 3 ? (
          <RefreshCw />
        ) : (
          <ArrowRight />
        )}
      </div>
      <div className="inventory-shelf">
        <div className="inventory-heading">
          <span className="story-overline">
            {copy.stock} / {demo.sku}
          </span>
          <div>
            <strong>
              {reserved ? demo.stock - demo.quantity : demo.stock}
            </strong>
            <span>{copy.available}</span>
            <strong>{reserved ? demo.quantity : 0}</strong>
            <span>{copy.reserved}</span>
          </div>
        </div>
        <div className="inventory-units">
          {Array.from({ length: demo.stock }, (_, index) => (
            <div
              className="inventory-unit"
              key={index}
              data-reserved={reserved && index >= demo.stock - demo.quantity}
            >
              <Image
                src={copy.image}
                width={110}
                height={120}
                alt=""
                sizes="(max-width: 600px) 55px, 100px"
              />
              <span>
                {reserved && index >= demo.stock - demo.quantity ? (
                  <>
                    <PackageCheck size={12} aria-hidden="true" />
                    {demo.order}
                  </>
                ) : (
                  `${copy.unit} ${String(index + 1).padStart(2, "0")}`
                )}
              </span>
            </div>
          ))}
        </div>
        <div
          className="inventory-receipt"
          data-visible={stage >= 1}
          data-warning={stage === 2}
          aria-hidden={stage < 1}
        >
          {stage === 2 ? (
            <WifiOff size={24} aria-hidden="true" />
          ) : stage === 3 ? (
            <CheckCheck size={24} aria-hidden="true" />
          ) : (
            <PackageCheck size={24} aria-hidden="true" />
          )}
          <div>
            <strong>
              {stage === 2
                ? copy.lost
                : stage === 3
                  ? copy.retry
                  : copy.reserve}
            </strong>
            <p>
              {stage === 2
                ? copy.timeout
                : stage === 3
                  ? `${demo.reservation} · ${copy.once}`
                  : demo.reservationKey}
            </p>
            {stage === 2 && (
              <button
                type="button"
                className="story-action"
                onClick={() => onStage?.(3)}
              >
                {copy.retryAction}
              </button>
            )}
          </div>
        </div>
      </div>
    </SceneShell>
  );
}
