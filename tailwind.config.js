/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bgPurple1: 'hsl(254, 88%, 90%)',
        bgPurple2: 'hsl(256, 67%, 59%)',
        bgYellow1: 'hsl(31, 66%, 93%)',
        bgYellow2: 'hsl(39, 100%, 71%)',
        textblack: 'hsl(0, 0%, 7%)',
      },
      fontFamily:{
        dmsans: ['DM Sans', 'serif']
      },
      letterSpacing:{
        tightest: '-0.1rem',
      },
      gridTemplateAreas: {
        'desktopLayout': [
          'seven one one four',
          'seven two three four',
          'eight two three four',
          'eight six five five',
        ],
      },
    },
  },
  plugins: [],
}

