/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    //need to in order to purge css from tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'], 
        keyframes: {
          typing: {
            '0%': { width: '0%' },
            '100%': { width: '100%' }
          },
          blink: {
            '0%, 100%': { borderColor: 'transparent' },
            '50%': { borderColor: 'transparent' }
          }
        },
        animation: {
          typing: 'typing 5s steps(40, end), blink 0.75s step-end infinite'
        }
      },
    },
  },
  plugins: [],
}

