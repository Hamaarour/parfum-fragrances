/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D25A26',
        secondary: '#5C7977',
        neutral: '#FBFBFB',
      },
      textStroke: ['responsive'], // Add this line
      fontFamily: {
        sentient: ['Sentient', 'sans-serif'],
      },
      backgroundImage: {
        'color-gradient':
          'radial-gradient(circle, rgba(210,90,38,1) 0%, rgba(92,121,119,1) 100%)',
        'color-gradient-2':
          'linear-gradient(to top, rgba(210,90,38,1), rgba(92,121,119,1))',
      },
      borderColor: {
        'color-gradient-2':
          'linear-gradient(to top, rgba(210,90,38,1), rgba(92,121,119,1))',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1.5px #fbfbfb', // Your text stroke style
          'text-stroke': '1.5px #fbfbfb',
          '-webkit-text-fill-color': 'transparent', // Optional for transparent fill
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover']) // Add responsiveness
    },
  ],
}
