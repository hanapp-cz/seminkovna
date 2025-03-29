import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

import typography from '@tailwindcss/typography';

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "900px",
      xl: "1280px",
    },
    container: {
      screens: {
        xl: `1280px`,
      },
      center: true,
      padding: { DEFAULT: "1rem", xl: "2rem" },
    },
    extend: {
      backgroundImage: {
        pattern: "url(../public/images/bg-pattern.jpg)",
      },
      boxShadow: {
        layer: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        overlayLeft: "-2000px 2000px 0px 2000px hsla(0, 0%, 0%, 0.2)",
      },
      colors: {
        black: "#0d0e12",
        white: "#fff",
        overlay: "hsla(0, 0%, 0%, 50%)",
        alert: "hsl(1deg 48% 34%)",
        primary: {
          light: "hsl(82deg 27% 92%)",
          medium: "hsl(75deg 19% 79%)",
          dark: "hsl(152deg 32% 23%)",
        },
        text: {
          primary: "hsl(121deg 35% 26%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    typography,
    require(`tailwindcss-animate`),
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        ".page-content": {
          "@apply container max-w-4xl xl:max-w-5xl flex flex-col gap-4 lg:gap-8":
            {},
        },
      });
    },
  ],
} satisfies Config;
