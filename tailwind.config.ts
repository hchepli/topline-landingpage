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
      },
       keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        floatSlow: 'float 4s ease-in-out infinite',
      },
    }
  },
  plugins: []
} satisfies Config;
