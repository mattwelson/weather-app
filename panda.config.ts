import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  globalFontface: {
    "DM Sans": [
      {
        src: 'url("/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf") format("truetype")',
        fontWeight: "300 700",
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url("/fonts/DM_Sans/DMSans-Italic-VariableFont_opsz,wght.ttf") format("truetype")',
        fontWeight: "300 700",
        fontStyle: "italic",
        fontDisplay: "swap",
      },
    ],
    "Bricolage Grotesque": [
      {
        src: 'url("/fonts/Bricolage_Grotesque/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf") format("truetype")',
        fontWeight: "200 800", // Variable fonts typically support a range
        fontStyle: "normal",
        fontDisplay: "swap",
      },
    ],
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: { value: "'DM Sans', sans-serif" },
          display: { value: "'Bricolage Grotesque', sans-serif" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
