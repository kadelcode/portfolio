const { keyframes } = require("framer-motion");

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        quicksand: ['Quicksand'],
        audiowide: ['Audiowide'],
        montserrat: ['Montserrat'],
      },
      backgroundImage: {
        "light-mode": "url('../public/images/light-mode-background.jpg')",
        "dark-mode": "url('../public/images/dark-mode-background.jpg')",
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};