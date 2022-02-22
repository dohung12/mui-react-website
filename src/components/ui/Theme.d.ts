import '@mui/material/styles'

declare module '@mui/material/styles' {
  export interface Palette {
    blue: Palette['primary']
    orange: Palette['primary']
    arcGrey: Palette['primary']
  }

  // allow configuration using `createTheme`
  export interface PaletteOptions {
    blue?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    arcGrey?: PaletteOptions['primary']
  }
  interface TypographyVariants {
    tab: React.CSSProperties
    estimate: React.CSSProperties
  }

  // allow configuration using `createTheme`
  export interface TypographyVariantsOptions {
    tab?: React.CSSProperties
    estimate?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    tab: true
    estimate: true
  }
}
