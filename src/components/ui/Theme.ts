/// <reference path="Theme.d.ts"/>
import { createTheme } from '@mui/material/styles'

const arcBlue = '#0284c7'
const arcOrange = '#fb923c'
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
      textTransform: 'capitalize',
      fontWeight: '700',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: '#111',
    },
  },
})

export default theme
