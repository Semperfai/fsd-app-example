/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary-1': '#10B981',
        'primary-2': '#F5F5F5',
        'dark-1': '#18181B'
      }
    }
  },
  plugins: []
}
