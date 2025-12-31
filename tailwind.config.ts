import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0E1E2F",
          secondary: "#1F3A5F",
          accent: "#4F9CF9"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
