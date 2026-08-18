import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060a",
          900: "#0a0b12",
          800: "#12131c",
          700: "#1a1b26",
          400: "#8a8ea0",
          200: "#c9ccd6"
        },
        glow: {
          amber: "#f5c26b",
          sky: "#8ec5ff",
          violet: "#c8b6ff"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      backdropBlur: {
        "3xl": "64px"
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.04)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
