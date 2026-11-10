import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { heroContent } from "@/content/site";

export const runtime = "nodejs";
export const alt = "Cero y Uno - Desarrollo de software, automatización e inteligencia aplicada";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/manrope-400.ttf")),
    readFile(join(process.cwd(), "src/app/fonts/manrope-700.ttf"))
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#0B0D0E",
          color: "#F7F8F4",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Manrope",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%"
        }}
      >
        <div
          style={{
            color: "#A8EDBE",
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase"
          }}
        >
          Cero y Uno
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 950 }}>
            {heroContent.title}
          </div>
          <div style={{ color: "#A7B0B8", fontSize: 34, lineHeight: 1.35, maxWidth: 900 }}>
            Software, automatización e inteligencia aplicada para procesos complejos.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            color: "#A8EDBE",
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
    {
      ...size,
      fonts: [
        { name: "Manrope", data: regular, style: "normal", weight: 400 },
        { name: "Manrope", data: bold, style: "normal", weight: 700 }
      ]
    }
  );
}
