import Typography from "typography"
import wikipediaTheme from "typography-theme-wikipedia"

const typography = new Typography(wikipediaTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
