import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import CustomSoftware from './CustomSoftware'
import Estimate from './Estimate'
import Home from './Home'
import MobileApps from './MobileApps'
import Revolution from './Revolution'
import Services from './Services'
import Header from './ui/Header/Header'
import theme from './ui/Theme'
import Websites from './Websites'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='home' element={<Home />}></Route>
            <Route path='services' element={<Services />}></Route>
            <Route path='revolution' element={<Revolution />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='custom-software' element={<CustomSoftware />}></Route>
            <Route path='estimate' element={<Estimate />}></Route>
            <Route path='mobileapps' element={<MobileApps />}></Route>
            <Route path='websites' element={<Websites />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
