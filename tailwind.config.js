const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rajdhani', ...defaultTheme.fontFamily.sans],
        serif: ['Rajdhani', ...defaultTheme.fontFamily.serif],
        mono: ['Rajdhani', ...defaultTheme.fontFamily.mono],
      },
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
