/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d9488",
        "light-gray": "#f3f4f6",
      },
    },
  },
  plugins: [],
};
