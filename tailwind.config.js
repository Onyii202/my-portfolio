/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        KG: ["Roboto Serif", "sans-serif"], // Corrected font names
      },
    },
  },
  plugins: [],
};
