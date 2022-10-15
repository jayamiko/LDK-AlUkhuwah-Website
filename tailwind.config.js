/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06B6D4",
        "egg-green": "#1eb2a6",
        whatsapp: "#25d366",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        wolf: ["Wolf in the City", "Titan One", "sans-serif"],
        titan: ["Titan One", "Roboto", "sans-serif"],
        edu: ["Edu SA Beginner", "Roboto", "sans-serif"],
        mountains: ["Beyond The Mountains", "Titan One", "Wolf in the City"],
      },
    },
  },
  plugins: [],
};
