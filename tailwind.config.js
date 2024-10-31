/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#8604D2",
        "secondary": "#E2BDF7",
        "neutral-black": "#2A2A2A",
        "neutral-gray": "#585858"
      },
      fontFamily: {
        "sans": ["Inter", "Arial", "sans-serif"],
        "display": ["Nunito", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
};