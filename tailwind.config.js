module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        stars:
          'url(http://www.script-tutorials.com/demos/360/images/stars.png)',
        twinkling:
          'url(http://www.script-tutorials.com/demos/360/images/twinkling.png)',
      },
    },
  },
  plugins: [],
}
