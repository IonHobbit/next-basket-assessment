import { lightTheme } from "@/themes/lightTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#23A6F0"
        },
        secondary: {
          main: "#23856D"
        },
        text: {
          light: "#FFFFFF",
          primary: "#252B42",
          secondary: "#737373",
          disabled: "#BDBDBD"
        },
        error: {
          main: "#E74040"
        },
        warning: {
          main: "#E77C40"
        }
      }
    },
  },
  plugins: [],
};
export default config;
