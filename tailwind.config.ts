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
        bgPrimary: "#F7F8FA",
        bgActive: "#E8F0F5",
        bgSearch: "#F3F4F6",
        bgSvg: "#CFE0E5",
        primary: "#1FA45B",
        secondary: "#393939",
        "secondary-light": "#7E7E7E",
        "borderPrimary": "#E2E2E2",
      },
    },
  },
  plugins: [],
} satisfies Config;
