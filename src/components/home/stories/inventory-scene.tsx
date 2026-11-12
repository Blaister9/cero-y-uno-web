import Image from "next/image";
import { ArrowUpRight, Check, PackageCheck, Unplug } from "lucide-react";
import type { CSSProperties } from "react";
import type { IntegrationDemo } from "@/content/project-stories";
import { inventoryScene as copy } from "@/content/story-scenes";
import {
  getIntegrationFrame,
  integrationRoutes,
  pointOnRoute,
  routePath,
} from "@/lib/integration-journey";
import { SceneShell, type SceneProps } from "./scene-shell";

export function InventoryScene({
  demo,
  stage,
  progress,
}: SceneProps & { demo: IntegrationDemo }) {
  const frame = getIntegrationFrame(progress);
  const variables = {
    "--dispatch-light": frame.light,
    "--dispatch-reveal": frame.reveal,
    "--dispatch-receipt": frame.receipt,
  } as CSSProperties;
  return (
    <SceneShell
      name="inventory"
      label={copy.label}
      stage={stage}
      progress={progress}
      status={copy.states[stage]}
    >
      <div
        className="dispatch-studio"
        style={variables}
        data-reserved={frame.reserved}
        data-confirmed={frame.confirmed}
      >
        <div className="dispatch-ambient" aria-hidden="true" />
        <div className="dispatch-product">
          <div className="dispatch-shop">
            <span className="story-overline">{copy.shop}</span>
            <code>{demo.order}</code>
          </div>
          <div className="dispatch-product-photo">
            <div className="dispatch-beam" aria-hidden="true" />
            <Image
              src={copy.image}
              alt={demo.item}
              width={420}
              height={440}
              sizes="(max-width: 600px) 180px, 360px"
            />
            <span className="dispatch-bulb" aria-hidden="true" />
          </div>
          <div className="dispatch-product-caption">
            <span className="story-overline">{demo.sku}</span>
            <strong>
              {demo.quantity} {copy.productPlural}
            </strong>
            <span>{copy.oneOrder}</span>
          </div>
        </div>
        <div className="dispatch-routing" aria-hidden="true">
          {Object.entries(integrationRoutes).map(([layout, points]) => {
            const [x, y] = pointOnRoute(frame.route, points);
            return (
              <div
                key={layout}
                className={`dispatch-route dispatch-route-${layout}`}
              >
                <svg viewBox="0 0 1000 500" preserveAspectRatio="none">
                  <path
                    className="dispatch-wire-shadow"
                    d={routePath(points)}
                  />
                  <path className="dispatch-wire" d={routePath(points)} />
                  <path
                    className="dispatch-trace"
                    d={routePath(points)}
                    pathLength="1"
                    strokeDasharray="0.07 0.93"
                    strokeDashoffset={-frame.route * 0.93}
                    style={{ opacity: frame.signal }}
                  />
                </svg>
                <div
                  className="dispatch-signal"
                  data-response={frame.response}
                  data-retry={frame.retry}
                  style={{
                    left: `clamp(48px, ${x / 10}%, calc(100% - 48px))`,
                    top: `${y / 5}%`,
                    opacity: frame.signal,
                  }}
                >
                  <span>
                    {frame.response
                      ? copy.response
                      : frame.retry
                        ? copy.sameRequest
                        : copy.request}
                  </span>
                  <code>{frame.response ? demo.reservation : demo.order}</code>
                  {frame.response ? (
                    <Check size={12} />
                  ) : (
                    <ArrowUpRight size={12} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="dispatch-api">
          <span className="dispatch-api-node" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="story-overline">{copy.api}</span>
        </div>
        <div
          className="dispatch-key"
          style={{ opacity: frame.reveal }}
          aria-hidden={frame.reveal < 0.5}
        >
          <span>{frame.retry ? copy.keyAgain : copy.key}</span>
          <code>{demo.reservationKey}</code>
          <span>{copy.keyNote}</span>
        </div>
        <div className="dispatch-warehouse">
          <div className="dispatch-stock-heading">
            <span className="story-overline">
              {copy.stock} / {demo.sku}
            </span>
            <div>
              <span>
                <strong>
                  {frame.reserved ? demo.stock - demo.quantity : demo.stock}
                </strong>
                {copy.available}
              </span>
              <span>
                <strong>{frame.reserved ? demo.quantity : 0}</strong>
                {copy.reserved}
              </span>
            </div>
          </div>
          <div className="dispatch-shelves" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div
            className="dispatch-reserved-bay"
            style={{
              opacity: Math.min(1, frame.reserveFirst + frame.reserveSecond),
            }}
            aria-hidden="true"
          >
            <span>{demo.order}</span>
          </div>
          {Array.from({ length: demo.stock }, (_, index) => {
            const selected = index >= demo.stock - demo.quantity;
            const movement =
              index === demo.stock - 2
                ? frame.reserveFirst
                : index === demo.stock - 1
                  ? frame.reserveSecond
                  : 0;
            const column = index % 4;
            const row = Math.floor(index / 4);
            const target = index - (demo.stock - demo.quantity);
            return (
              <div
                className="dispatch-unit"
                key={index}
                aria-hidden="true"
                data-reserved={selected && frame.reserved}
                style={{
                  left: `${3 + column * 24 + movement * ((target + 1) * 24 - column * 24)}%`,
                  top: `${19 + row * 27 + movement * 27}%`,
                }}
              >
                <Image
                  src={copy.image}
                  alt=""
                  width={120}
                  height={130}
                  sizes="(max-width: 600px) 60px, 110px"
                />
              </div>
            );
          })}
        </div>
        <div
          className="dispatch-interruption"
          style={{ opacity: frame.warning }}
          aria-hidden={frame.warning < 0.5}
        >
          <Unplug size={20} aria-hidden="true" />
          <strong>{copy.lost}</strong>
          <span>{copy.timeout}</span>
        </div>
        <div
          className="dispatch-confirmation"
          style={{ opacity: frame.receipt }}
          aria-hidden={frame.receipt < 0.5}
        >
          <PackageCheck size={24} aria-hidden="true" />
          <div>
            <span className="story-overline">{copy.retry}</span>
            <strong>{demo.reservation}</strong>
            <span>{copy.once}</span>
          </div>
        </div>
        <div
          className="dispatch-attempt"
          style={{ opacity: frame.reveal }}
          aria-hidden={frame.reveal < 0.5}
        >
          <span>{frame.retry ? copy.secondAttempt : copy.firstAttempt}</span>
          <span>{frame.reserved ? copy.reservationHeld : copy.connecting}</span>
        </div>
      </div>
    </SceneShell>
  );
}
