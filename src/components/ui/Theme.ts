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
  typography: {
    tab: {
      fontFamily: 'Raleway',
      color: '#fff',
      textTransform: 'capitalize',
      fontWeight: '700',
      fontSize: '1rem',
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
  interface TypographyVariants {
    tab: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    tab?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    tab: true
  }
}

export default theme
