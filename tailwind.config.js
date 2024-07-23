/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      backgroundColor: {
        'dark-blue': '#003580',
        'blue': '#0071c2',
        'light-white': '#ebf3ff',
        'yellow': '#febb02',
        'green': '#008009',
        'white': '#ffffff',
      },
      colors: {
        'primary': '#003580',
        'blue': '#0071c2',
        'white': '#efefef',
        'gray': '#9594a1',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    }
  },
  variants:{
    extend: {},
  },
  plugins: [],
}