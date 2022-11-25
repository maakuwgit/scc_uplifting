/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      outlineWidth: {
        '16': '20px'
      }, 
      colors: {
        'black': '#000000',
        'gold': {
          'DEFAULT':'#B5AA48',
          '1/2': 'rgb(181 170 72 / .5)',
          '1/3': 'rgb(181 170 72 / .33)'
        },
        'neutral': {
          '850': '#1a1a1a',
          '900': '#131313',
          '950': '#101010'
        }
      },
      fontSize: {
        '7xl': ['70px', {
          'lineHeight':'70px'
        }]
      }
    },
  },
  plugins: [],
}
