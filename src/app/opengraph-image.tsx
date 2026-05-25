import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cero y Uno - Desarrollo de software, automatización e inteligencia aplicada";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#050505",
          color: "#F7F8F4",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%"
        }}
      >
        <div
          style={{
            color: "#D7B56D",
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase"
          }}
        >
          Cero y Uno
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 950 }}>
            Lo que otros imaginan, nosotros lo convertimos en software.
          </div>
          <div style={{ color: "#A7B0B8", fontSize: 34, lineHeight: 1.35, maxWidth: 900 }}>
            Software, automatización e inteligencia aplicada para procesos complejos.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            color: "#8DB4FF",
            display: "flex",
            fontSize: 28,
            justifyContent: "space-between",
            paddingTop: 28
          }}
        >
          <span>01 / estrategia / arquitectura / ejecución</span>
          <span>cero-y-uno-web.vercel.app</span>
        </div>
      </div>
    ),
    size
  );
}
