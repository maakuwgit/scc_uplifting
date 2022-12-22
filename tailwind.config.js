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
        'black': {
          'DEFAULT': '#000000',
          '1/2': 'rgb(0 0 0 / .5)',
          '1/3': 'rgb(0 0 0 / .33)',
          '2/3': 'rgb(0 0 0 / .66)'
        },
        'eggplant': {
          'DEFAULT':'#5e0039',
          '1/2': 'rgb(94 0 57 / .5)',
          '1/3': 'rgb(94 0 57 / .33)'
        },
        'gold': {
          'DEFAULT':'#C1A45C',
          '1/2': 'rgb(181 170 72 / .5)',
          '1/3': 'rgb(181 170 72 / .33)'
        }, 
        'chocolate': {
          'DEFAULT':'#412B23',
          '300': 'hsla(8, 27%, 59%, 1)',
          '100': '#BDB69F'
        },
        'periwinkle': {
          'DEFAULT':'rgb(94 0 75)'
        },
        'neutral': {
          '850': '#1a1a1a',
          '900': '#131313',
          '950': '#101010'
        }, 
        'teal': {
          'DEFAULT': 'hsla(174, 100%, 50%, 0.3)',
          'hero': '#6FAAA7'
        }
      },
      fontSize: {
        '7xl': ['70px', {
          'lineHeight':'70px'
        }],
        '8xl': ['5rem', {
          'lineHeight':'1'
        }]
      }
    },
  },
  plugins: [],
}
