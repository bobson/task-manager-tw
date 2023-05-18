/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#2b2c37",
      },
      flex: {
        3: "1 0 0%",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
