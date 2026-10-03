import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#FBF1F0",
          100: "#F5DCDA",
          300: "#D89B95",
          500: "#A63A32",
          600: "#8C2B26",
          700: "#7A1F1F",
          800: "#5E1717",
          900: "#421010",
        },
        gold: {
          100: "#F7EBC8",
          300: "#E4C878",
          400: "#D9B44A",
          500: "#C9A227",
          600: "#A9861C",
          700: "#8A6D15",
        },
        cream: {
          DEFAULT: "#FFF8EE",
          100: "#FDF3E3",
          200: "#F8E8D0",
        },
        peach: {
          100: "#FDE8D8",
          200: "#FAD9C0",
          300: "#F6C6A4",
          400: "#EFAE83",
        },
        ink: "#4A2B23",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        sans: [
          "var(--font-sans)",
          "var(--font-sinhala)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sinhala: ["var(--font-sinhala)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(122, 31, 31, 0.25)",
        card: "0 6px 24px -10px rgba(122, 31, 31, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
