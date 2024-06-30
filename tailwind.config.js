/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D25A26',
        primarytwo: '#22c55e',
        secondary: '#5C7977',
        neutral: '#FBFBFB',
      },
      textStroke: ['responsive'], // Add this line
      fontFamily: {
        sentient: ['Sentient', 'sans-serif'],
      },
      backgroundImage: {
        'color-gradient':
          'radial-gradient(circle, rgba(34 ,197 ,94,0.6) 0%, rgba(0,0,0,1) 100%)',
        'color-gradient-2':
          'linear-gradient(to top, rgba(34 ,197 ,94,1), rgba(0,0,0,1))',
      },
      borderColor: {
        'color-gradient-2':
          'linear-gradient(to top, rgba(34 ,197 ,94,1), rgba(0,0,0,1))',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1.5px  rgba(34 ,197 ,94,1)', // Your text stroke style
          'text-stroke': '1.5px  rgba(34 ,197 ,94,1)',
          '-webkit-text-fill-color': 'transparent', // Optional for transparent fill
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover']) // Add responsiveness
    },
  ],
}
