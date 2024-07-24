/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "red",
        primary: {
          DEFAULT: "var(--primary)",
          // dark: "var(--primary-dark)",
        },
      },
      container: {
        screens: {
          sm: "610px",
          md: "738px",
          lg: "990px",
          xl: "1250px",
          "2xl": "1506px",
        },
      },
    },
  },
  plugins: [],
};
