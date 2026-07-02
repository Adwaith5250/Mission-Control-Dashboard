/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Deep-space navy scale used as the primary surface in dark mode
        space: {
          950: "#05070d",
          900: "#0b0f1a",
          800: "#111828",
          700: "#1a2236",
          600: "#26314a",
          500: "#3a4a6b",
        },
        // Signature accent: ion-trail cyan, used sparingly for focus + highlights
        ion: {
          400: "#5eead4",
          500: "#2dd4bf",
          600: "#14b8a6",
        },
        // Mars rust, used on the Rover page and hazard-adjacent accents
        rust: {
          400: "#fb923c",
          500: "#ea580c",
          600: "#c2410c",
        },
        // Hazard amber for NEO potentially-hazardous markers
        hazard: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,7,13,0.9)), radial-gradient(circle at 1px 1px, rgba(94,234,212,0.15) 1px, transparent 0)",
      },
      backgroundSize: {
        grid: "24px 24px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: 0.6 },
          "70%": { transform: "scale(1.4)", opacity: 0 },
          "100%": { transform: "scale(1.4)", opacity: 0 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out both",
        shimmer: "shimmer 1.6s infinite linear",
        "pulse-ring": "pulse-ring 1.8s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
