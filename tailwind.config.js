const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'calibri': ['"Calibri"'],
      },
      colors: {
        sidebarGray: '#171717',
        sidebarIcon: '#2e2e2e',
        thGreen: '#388F70',
        canada: '#FF0000',
        bordercolor: '#8C8C8C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
