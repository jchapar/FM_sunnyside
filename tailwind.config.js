module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      color: {
        softRed: 'hsl(7,99%,70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkSaturatedCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkModerateCyan: 'hsl(168, 34%, 41%)',
        veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
        verDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)',
        textColor: '#5B636D',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      // backgroundImage: {
      //   design: "url('./dist/images/desktop/image-graphic-design.jpg')",
      //   photography: "url('./images/desktop/image-photography.jpg')",
      // },
    },
  },
  plugins: [],
};
