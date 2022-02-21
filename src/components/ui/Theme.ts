/// <reference path="Theme.d.ts"/>
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

export default theme
