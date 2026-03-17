/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        joule: {
          bg: "#f4f5f7",
          surface: "#ffffff",
          surfaceAlt: "#f9fafb",
          border: "#d0d5dd",
          text: "#1a1f36",
          subtle: "#667085",
          blue: {
            light: "#e2eaff",
            DEFAULT: "#3a7bd5",
            dark: "#1f5fa9",
          },
          gradient: {
            start: "#3a7bd5",
            end: "#5fc3e4",
          },
        },
      },
    },
  },
  plugins: [],
};