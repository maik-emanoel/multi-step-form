/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purpleMid: '#633BBC',
        purplelight: '#8257E5',
        gray: {
          100: '#E1E1E6',
          200: '#8D8D99',
          300: '#7C7C8A',
          400: '#323238'
        },
        successColor: '#1D8841'
      },
    },

    screens:{
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      'sm': {'max': '500px'},
      // => @media (max-width: 425px) { ... }
    }
  },
  plugins: [],
}

