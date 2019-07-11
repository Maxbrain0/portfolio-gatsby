import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.6,
  headerFontFamily: ["Oswald", "Arial", "sans-serif"],
  headerWeight: 500,
  headerColor: "#000000bb",
  bodyColor: "#000000dd",
  bodyFontFamily: ["Lato", "Arial", "sans-serif"],
  bodyWeight: 400,
  boldWeight: 700,

  googleFonts: [
    {
      name: "Lato",
      styles: ["400", "700", "400i"],
    },
    {
      name: "Oswald",
      styles: ["500"],
    },
  ],
  scaleRatio: 2,
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
