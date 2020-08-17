import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'

fairyGateTheme.googleFonts = [
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
]
fairyGateTheme.bodyFontFamily = ['Inter', 'sans-serif']
// fairyGateTheme.baseFontSize = '18px'
fairyGateTheme.overrideThemeStyles = ({ adjustFontSizeTo, scale, rhythm }, options) => ({
  a: {
    textDecoration: "none",
    textShadow: "none",
    backgroundImage: `none`,
  },
})

const typography = new Typography(fairyGateTheme)

export const { scale, rhytm, options } = typography
export default typography