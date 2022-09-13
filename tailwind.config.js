/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'grayy':'hsl(0, 0%, 75%)',
        'grayishViolet':'hsl(257, 7%, 63%)',
        'veryDarkBlue':'hsl(255, 11%, 22%)',
        'veryDarkViolet':'hsl(260, 8%, 14%)',
        'cyann':'hsl(180, 66%, 49%)',
        'darkViolet':'hsl(257, 27%, 26%)',
      },
      fontFamily: {
        'poppins': ["'Poppins', sans-serif"],
      },
      screens: {
        '4xl':'1700px'
      },
      spacing: {
        'some key': {
          1.5: '<something>', // not sure about the correct value
        },
      },
    },
  },
  plugins: [],
}
