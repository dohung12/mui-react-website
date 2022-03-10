import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './routes/About/'
import Contact from './routes/Contact/'
import CustomSoftware from './routes/CustomSoftware/'
import Estimate from './routes/Estimate'
import Home from './routes/Home/'
import MobileApps from './routes/MobileApps/'
import Revolution from './routes/Revolution/'
import Services from './routes/ServicesPage/'
import Websites from './routes/Websites/'
import PageLayout from './ui/PageLayout'
import theme from './ui/Theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='services' element={<Services />}></Route>
            <Route path='revolution' element={<Revolution />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='custom-software' element={<CustomSoftware />}></Route>
            <Route path='estimate' element={<Estimate />}></Route>
            <Route path='mobile-apps' element={<MobileApps />}></Route>
            <Route path='websites' element={<Websites />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
