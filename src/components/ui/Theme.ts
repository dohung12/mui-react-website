/// <reference path="Theme.d.ts"/>
import { createTheme } from '@mui/material/styles'

const arcBlue = '#0284c7'
const arcOrange = '#f9913b'
const arcGrey = '#868686'

const theme = createTheme({
  palette: {
    primary: {
      main: arcBlue,
      light: '#5bb3fa',
      dark: '#005896',
    },
    secondary: {
      main: arcOrange,
      light: '#ffc26a',
      dark: '#c16202',
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
      color: '#fff',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: '700',
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: 1.5,
    },
  },
})

export default theme
