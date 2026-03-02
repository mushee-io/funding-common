import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07070A",
          900: "#0B0B10",
          850: "#101019",
          800: "#141423",
          700: "#1A1A2D",
          650: "#1E1E35",
          600: "#23233C",
        },
        crimson: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(244,63,94,.28), 0 18px 90px rgba(244,63,94,.12)",
        soft: "0 12px 38px rgba(0,0,0,.50)",
      },
      backgroundImage: {
        "radial-red": "radial-gradient(900px circle at var(--x, 28%) var(--y, 18%), rgba(244,63,94,.20), transparent 56%)",
        "grid": "linear-gradient(to right, rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.035) 1px, transparent 1px)"
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-6px)" } },
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "100% 50%" } },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      }
    }
  },
  plugins: []
};

export default config;
