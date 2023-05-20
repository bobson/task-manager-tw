/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#635FC7",
        "light-purple": "#a8a4ff",
        black: "#000112",
        "dark-bg": "#20212c",
        "dark-gray": "#2b2c37",
        "lines-dark": "#3e3f4e",
        "medium-gray": "#828fa3",
        "lines-light": "#e4ebfa",
        "light-bg": "#f4f7fd",
        white: "#ffffff",
        red: "#ea5555",
        "light-red": "#ff9898",
      },
      flex: {
        3: "1 0 0%",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
