/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				titan: ['Titan One', 'Roboto', 'sans-serif'],
				edu: ['Edu SA Beginner', 'Roboto', 'sans-serif'],
			},
    },
  },
  plugins: [],
}
