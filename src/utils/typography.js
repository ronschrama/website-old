import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Work Sans",
      styles: ["600"],
    },
    {
      name: "Inter",
      styles: ["200", "400", "600"],
    },
    {
      name: "Handlee",
      styles: ["400"],
    },
    {
      name: "Fira Code",
      styles: ["500"],
    }
  ],
  headerFontFamily: ['Work Sans', 'sans-serif'],
  bodyFontFamily: ['Inter', 'Helvetica', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = "#000000"
    return {
      a: {
        color: linkColor,
        textDecoration: "none",
      },
      "a:hover,a:active": {
        color: "#13BBAF",
        textShadow: "none",
        backgroundImage: "none",
      },
      "h1,h2,h3,h4,h5,h6": {
        marginTop: rhythm(0.2),
        marginBottom: rhythm(0.5),
      },
    }
  },
})

typography.toString()

typography.injectStyles()

export const { scale, rhytm, options } = typography
export default typography