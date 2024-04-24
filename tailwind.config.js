/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("./components/subframe/subframe/tailwind.config.js")],
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./components/subframe/subframe/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: []
};
