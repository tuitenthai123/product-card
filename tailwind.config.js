/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        browntext: 'hsl(14, 45%, 36%)',
      }
    },
  },
  plugins: [],
}