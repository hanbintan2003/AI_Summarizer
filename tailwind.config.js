/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    //need to in order to purge css from tailwind
  ],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
      },

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

