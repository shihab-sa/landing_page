import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#1f80d8", // Add your custom color here
        customDarkBlue: "#002045",
        customTeal: "#00d6c1",
        pipes: "#103a6a",
      },
    },
  },
  plugins: [],
} satisfies Config;
