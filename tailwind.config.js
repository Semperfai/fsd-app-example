/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary-1': '#10B981',
        'primary-2': '#F5F5F5',
        'dark-1': '#18181B',
        'base-inp-ph': 'rgba(41, 41, 48, 0.2)'
      },
      boxShadow: {
        primary: '0px 25px 50px 0px #FFFFFF1A'
      }
    }
  },
  plugins: []
}
