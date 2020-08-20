// import Typography from 'typography'

// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: 1.666,
//   googleFonts: [
//     {
//       name: "Work Sans",
//       styles: ["600"],
//     },
//     {
//       name: "Inter",
//       styles: ["200", "400", "600"],
//     },
//     {
//       name: "Handlee",
//       styles: ["400"],
//     },
//     {
//       name: "Fira Code",
//       styles: ["500"],
//     }
//   ],
//   headerFontFamily: ['Work Sans', 'sans-serif'],
//   bodyFontFamily: ['Inter', 'Helvetica', 'sans-serif'],
//   overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
//     const linkColor = "#000000"
//     return {
//       a: {
//         color: linkColor,
//         textDecoration: "none",
//       },
//       "a:hover,a:active": {
//         color: "#13BBAF",
//         textShadow: "none",
//         backgroundImage: "none",
//       },
//       "h1,h2,h3,h4,h5,h6": {
//         marginTop: rhythm(0.2),
//         marginBottom: rhythm(0.5),
//       },
//     }
//   },
// })

// typography.toString()

// typography.injectStyles()

// export const { scale, rhytm, options } = typography
// export default typography


import Typography from 'typography'
import '../fonts/fonts.css'

export const fonts = {
  // regular: 'Inter UI Regular',
  regular: 'silkaregular',
  regularItalic: 'Inter UI Regular Italic',
  semibold: 'Inter UI Semibold',
  semiboldItalic: 'Inter UI Semibold Italic',
  bold: 'Inter UI Bold',
  boldItalic: 'Inter UI Bold Italic',
}

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.bold, 'sans-serif'],
  bodyFontFamily: [fonts.regular, 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.8)',

  overrideStyles: ({ rhythm }) => ({
    h1: {
      color: 'hsla(0,0%,0%,0.75)',
    },
    h2: {
      color: 'hsla(0,0%,0%,0.775)',
    },
    h3: {
      color: 'hsla(0,0%,0%,0.8)',
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
    },
  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
