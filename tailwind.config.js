/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [

    './public/**/*.html',

    './src/**/*.{js,jsx,ts,tsx,vue}',

  ],
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',
        secondary: {
          '100': '#E2E2D5',
          '200': '#888883'
        }
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}

