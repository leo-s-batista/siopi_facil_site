module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        gray: '#4a4a4a',
        orange: '#ff8726',
        'orange-darker': '#dc7624',
        'orange-lighter': '#fff7ed',
        blue: '#217cbe',
        'blue-darker': '#266ea2',
        'blue-lighter': '#eff6ff',
      },
      boxShadow: {
        'default': '0 0 3px rgba(0,0,0,0.1)',
        'default-hover': '1px 2px 7px rgba(0,0,0,0.1)',
      },
      screens: {
        '2xl': '1366px',
        '3xl': '1601px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}