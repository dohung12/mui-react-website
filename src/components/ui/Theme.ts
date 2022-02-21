import { createTheme } from '@mui/material/styles'

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
const arcGrey = '#868686'

const theme = createTheme({
  palette: {
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
    blue: {
      main: arcBlue,
    },
    orange: {
      main: arcOrange,
    },
    arcGrey: {
      main: arcGrey,
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['primary']
    orange: Palette['primary']
    arcGrey: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    blue?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    arcGrey?: PaletteOptions['primary']
  }
}

export default theme
