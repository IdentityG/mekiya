/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      boxShadow: {
        rv: '0 0 30px rgba(0, 0, 0, 1)'
      }
    }
  },
  plugins: [
    require('preline/plugin'),
  ]
};
