/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#484848",
        primary: "#FF6900",
        dark: "#191208",
        grey: "#EDEDED",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
