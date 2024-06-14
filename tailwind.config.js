/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        xl: "20px",
        "2xl": "50px"
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      }
    },
    fontFamily: {
      'sourceSans': ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
      'verdana': ['Verdana', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      backgroundImage: {
        // 'hero': "url('./src/images/hero.png')"
      }
    },
  },
  plugins: [],
}