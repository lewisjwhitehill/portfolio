import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#4CAF50",
        base: "#f8fafc",
        ink: "#0f172a",
        muted: "#6b7280",
        surface: "#ffffff"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
        card: "0 8px 20px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        xl: "16px"
      }
    }
  },
  plugins: []
};

export default config;
