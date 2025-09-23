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
        colors: {
          blue: {
            500: { value: "hsl(233, 67%, 56%)" },
            700: { value: "hsl(248, 70%, 36%)" },
          },
          orange: { 500: { value: "hsl(28, 100%, 52%)" } },
          neutral: {
            900: { value: "hsl(243, 96%, 9%)" },
            800: { value: "hsl(243, 27%, 20%)" },
            700: { value: "hsl(243, 23%, 24%)" },
            600: { value: "hsl(243, 23%, 30%)" },
            300: { value: "hsl(240, 6%, 70%)" },
            200: { value: "hsl(250, 6%, 84%)" },
          },
        },
        spacing: {
          // TODO: see if this is worth using
        },
      },
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: { value: "{colors.blue.500}" },
            muted: { value: "{colors.blue.700}" },
          },
          secondary: { value: "{colors.orange.500}" },
          background: { value: "{colors.neutral.900}" },
          foreground: {
            value: "white",
          },
        },
        radii: {
          input: { value: "{radii.12}" },
        },
      },
      textStyles: {
        heading: {
          1: {
            value: {
              description: "Heading 1 - Largest heading, used for numbers",
              value: {
                fontFamily: "{fonts.sans}",
                fontSize: "96px",
                letterSpacing: "-2px",
                fontWeight: "semibold",
                fontStyle: "italic",
              },
            },
          },
          2: {
            value: {
              description: "Heading 2 - Used for main titles",
              value: {
                fontFamily: "{fonts.display}",
                fontSize: "52px",
                fontWeight: "bold",
                lineHeight: "120%",
              },
            },
          },
          3: {
            value: {
              description: "Heading 3 - Light header",
              value: {
                fontFamily: "{fonts.sans}",
                fontSize: "32px",
                fontWeight: "light",
              },
            },
          },
          4: {
            value: {
              description: "Heading 4",
              value: {
                fontFamily: "{fonts.sans}",
                fontSize: "28px",
                fontWeight: "bold",
                lineHeight: "120%",
              },
            },
          },
          5: {
            value: {
              description:
                "Heading 5 - optionally can be used with a medium font weight",
              value: {
                fontFamily: "{fonts.sans}",
                fontSize: "20px",
                fontWeight: "semibold",
                lineHeight: "120%",
              },
            },
          },
        },
        body: {
          value: {
            fontFamily: "{fonts.sans}",
            fontSize: "18px",
            lineHeight: "120%",
            fontWeight: "medium",
          },
        },
      },
    },
    tokens: {
      radii: {
        0: { value: "0px" },
        4: { value: "4px" },
        6: { value: "6px" },
        8: { value: "8px" },
        10: { value: "10px" },
        12: { value: "12px" },
        16: { value: "16px" },
        20: { value: "20px" },
        24: { value: "24px" },
        full: { value: "9999px" },
      },
      assets: {
        today: {
          value: "url('/assets/images/bg-today-small.svg')",
        },
        todayLg: {
          type: "url",
          value: "url('/assets/images/bg-today-large.svg')",
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
