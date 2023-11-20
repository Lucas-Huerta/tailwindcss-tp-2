/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#4083E1',
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/Hero.jpg')",
      }, 
      borderRadius: {
        '4xl': '1rem',
        '8xl': '16rem'
      },
    },
  },
  plugins: [],
}

