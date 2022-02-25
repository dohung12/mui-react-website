import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import HeaderTabs from './HeaderTabs/Tabs'
import { ElevationScroll, Offset } from './Header.style'
import Logo from './Logo'
import Drawer from './Drawer/Drawer'
import Footer from '../Footer'

const Header = () => {
  const theme = useTheme()
  const matcher = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo />
            {matcher ? <Drawer /> : <HeaderTabs />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Offset use prevent header from cover below content */}
      <Offset />
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default Header
