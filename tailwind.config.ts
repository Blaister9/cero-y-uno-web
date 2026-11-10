import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)"]
      },
      colors: {
        ink: "#0B0D0E",
        coal: "#0F1213",
        graphite: "#14171A",
        steel: "#A7B0B8",
        matrixdeep: "#163D29",
        warning: "#D7B56D",
        matrix: "#A8EDBE",
        porcelain: "#F7F8F4"
      },
      boxShadow: {
        "inner-line": "inset 0 1px 0 rgba(255,255,255,0.08)",
        "premium": "0 24px 80px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
