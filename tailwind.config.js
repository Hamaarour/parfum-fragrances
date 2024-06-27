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

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'color-gradient':
          'radial-gradient(circle, rgba(210,90,38,1) 0%, rgba(92,121,119,1) 100%)',
      },
    },
  },

  // Plugins (Optional)
  plugins: [],
}
