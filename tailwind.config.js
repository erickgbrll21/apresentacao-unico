/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#05070A",
        surface: "#0B0E14",
        card: "#161B22",
        "card-hover": "#1c2330",
        accent: {
          blue: "#3B82F6",
          cyan: "#22D3EE",
          green: "#10B981",
          orange: "#F59E0B",
          pink: "#EC4899",
          purple: "#A855F7",
          red: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.15)",
        "glow-green": "0 0 30px rgba(16, 185, 129, 0.2)",
        "glow-blue": "0 0 24px rgba(59, 130, 246, 0.35)",
        deep: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
