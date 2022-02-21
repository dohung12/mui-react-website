import { ThemeProvider } from '@mui/material'
import Header from './ui/Header'
import theme from './ui/Theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
    </ThemeProvider>
  )
}

export default App
