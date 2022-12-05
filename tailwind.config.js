/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'odibee': ['"Odibee Sans"', 'cursive'],
        'abel': ['"Abel"', 'sans-serif'],
      },
      colors: {
        'accent': '#b32c19',
        'secondary-accent': '#e1824f',
      },
    },
  },
  plugins: [],
}
