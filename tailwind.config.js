/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "egg-green": "#1eb2a6",
        whatsapp: "#25d366",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        titan: ["Titan One", "Roboto", "sans-serif"],
        edu: ["Edu SA Beginner", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
