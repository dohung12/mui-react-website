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
import Header from './ui/Header'
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
            <Route path='the-revolution' element={<Revolution />}></Route>
            <Route path='about-us' element={<About />}></Route>
            <Route path='contact-us' element={<Contact />}></Route>
            <Route path='custom-software' element={<CustomSoftware />}></Route>
            <Route path='estimate' element={<Estimate />}></Route>
            <Route path='mobileapps' element={<MobileApps />}></Route>
            <Route path='websites' element={<Websites />}></Route>
          </Route>
          {/* <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos
            ipsum deleniti doloribus facilis eligendi reiciendis dolores
            excepturi ad provident quidem reprehenderit inventore ea aspernatur
            fugit veniam ducimus a, sequi beatae, cupiditate iure! Adipisci
            aliquam veritatis, repudiandae velit quaerat ab obcaecati modi
            itaque eaque ea beatae, dolores a maiores illo iusto hic sed
            quibusdam sint. Debitis adipisci asperiores ullam commodi
            consequuntur assumenda nemo explicabo? Sit veritatis non commodi
            ipsam, qui incidunt accusamus esse nesciunt! Quidem unde vero iusto
            quam consequatur vel magni, accusamus officiis earum ipsam, eum
            numquam corrupti praesentium temporibus ullam? Minima dolores nemo
            recusandae similique adipisci velit nam, ad quis fugit nobis tempore
            facere exercitationem repellat. Non atque ea ipsam libero eius hic
            nemo facilis temporibus, laudantium fuga magnam eveniet nesciunt
            voluptates numquam quis dignissimos optio asperiores praesentium
            architecto aut repellat impedit facere reprehenderit autem. Pariatur
            unde ullam dignissimos maxime accusantium assumenda alias enim
            itaque, reiciendis tempora, voluptas quibusdam provident earum non a
            atque nihil explicabo inventore. Inventore, recusandae eos. Aliquam
            excepturi, ab rerum ex perferendis error quidem quae asperiores
            omnis corporis id molestiae quasi. Quasi corrupti doloribus ut aut
            saepe laudantium error reprehenderit, minus voluptas porro id
            similique, odio ullam quas soluta odit. Amet nostrum veniam
            exercitationem!
          </div> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
