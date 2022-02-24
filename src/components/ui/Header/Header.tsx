import { AppBar, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import HeaderTabs from './HeaderTabs/Tabs'
import { ElevationScroll, EstimateButton, Offset } from './Header.style'
import Logo from './Logo'
const Header = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo />
            <HeaderTabs />
            <EstimateButton variant='contained' color='secondary'>
              Free Estimate
            </EstimateButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Offset use prevent header from cover below content */}
      <Offset />
      <Outlet />
    </>
  )
}

export default Header
