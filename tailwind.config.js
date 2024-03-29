/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      width: {
        'card-image': '150px',
        'card': '350px',
      },
      fontFamily: {
        'odibee': ['"Odibee Sans"', 'cursive'],
        'abel': ['"Abel"', 'sans-serif'],
      },
      colors: {
        'background': '#1e1e20',
        'background-light': '#27272a',
        'accent': '#b32c19',
        'secondary-accent': '#e1824f',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
