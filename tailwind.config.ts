import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#020617",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(148,163,184,0.15), 0 30px 80px rgba(15,23,42,0.6)",
      },
      backgroundImage: {
        "radial-dark": "radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
