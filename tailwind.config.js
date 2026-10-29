/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0e1f1a",
        blue: "#1b5ebe",
        gold: "#c5a265",
        ivory: "#faf8f5",
        muted: "#5a6561",
        border: "#e8e4dc",
      },
      fontFamily: {
        sans: ["ThmanyahSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
