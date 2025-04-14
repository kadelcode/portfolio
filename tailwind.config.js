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
    },
  },
  plugins: [],
};