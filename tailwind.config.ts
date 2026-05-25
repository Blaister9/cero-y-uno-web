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
      colors: {
        ink: "#050505",
        coal: "#0B0D0E",
        graphite: "#14171A",
        steel: "#A7B0B8",
        signal: "#8DB4FF",
        deepblue: "#123A6F",
        ember: "#D7B56D",
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
