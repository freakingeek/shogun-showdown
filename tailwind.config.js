import tailwindTypographyPlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
    extend: {
      colors: {
        primary: "#ed4231",
        secondary: "#999999",
      },
      backgroundColor: {
        dark: "#0e0e0e",
      },
      fontFamily: {
        pixel: ["Pixelify Sans"],
      },
    },
  },
  plugins: [tailwindTypographyPlugin],
};
