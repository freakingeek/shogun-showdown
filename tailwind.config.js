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
      },
      fontFamily: {
        pixel: ["Pixelify Sans"],
      },
    },
  },
  plugins: [],
};
