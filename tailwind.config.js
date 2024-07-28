/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/index.css",
    "./src/assets/styles/index.css",
  ],
  theme: {
    extend: {
      colors: {
        red: "red",
        primary: {
          DEFAULT: "var(--primary)",
          // dark: "var(--primary-dark)",
        },

        // model overlay color
        "model-overlay": {
          DEFAULT: "var(--model-overlay)",
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
