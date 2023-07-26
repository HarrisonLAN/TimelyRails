/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'mainColour': '#0082c6',
        'mainColourD1': '#0071ad',
        'mainColourD2': '#006193',
        'mainColourD3': '#00507a',

        'searchBG': 'rgb(178, 186, 211)',
        'searchBTN': 'rgb(49, 39, 131)',

        'mainColourL1': '#0093e0',
        'mainColourL2': '#00a3f9',
        'mainColourL3': '#14aeff',
        'oangeColour' : '	#f87338',
        'searchGrey':'rgb(100, 115, 134)'
      },
      width: {
        '99': '99%',
        '146':'146px',
        '30':'30px'
      },
      height: {
        '52':'52px'
      },
      inset: {
        '26px': '26px',
      }
    },
  },
  plugins: [],
}
