module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg1': "url('./assets/bg1.jpeg')",
        'custom-bg2': "url('./assets/bg2.jpeg')",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        comfortaa: ['Comfortaa', 'cursive'],
        eater: ['Eater', 'cursive'],
      },
    },
  },
  plugins: [],
};
