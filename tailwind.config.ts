import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme")
const config: Config = {
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo', 'sans-serif'],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: 'rgb(0 28 72 / 100%)',
      secondary: 'rgb(229 59 58/100%)',
      white: '#ffffff',
      black: '#000000',
      translucent: 'hsla(0, 0%, 100%, .1)',
      translucent_border: 'hsla(0, 0%, 100%, .3)',
      muted: 'hsla(0 0% 96.1%)',
      muted_foreground: 'hsla(0 0% 45.1%)',
      card: 'hsla(0 0% 100%)',
      card_foreground: 'hsla(0 0% 3.9%)',
      green: {
        100: '#dcfce7',
        400: '#4ade80',
      },
      border:'#eff2f0'
    }


  },
  plugins: [],
};
export default config;
