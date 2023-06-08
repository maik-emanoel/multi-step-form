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
  },
  plugins: [],
}

