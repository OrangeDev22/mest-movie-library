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
        "dark-silver": "#171717",
        navbar: "#1c1c1c",
        "background-primary": "#0e0e0e",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: ['"Open Sans"'],
      },
      aspectRatio: {
        "9/14": "9 / 14",
        "80/121": "8 / 121",
        "9/4": "9/4",
      },
      maxWidth: {
        "36": "9rem",
        "40": "10rem",
        "2xs": "300px",
      },
      maxHeight: {
        "128": "40rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
