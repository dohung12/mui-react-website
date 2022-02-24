import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import HeaderTabs from './HeaderTabs/Tabs'
import { ElevationScroll, Offset } from './Header.style'
import Logo from './Logo'
import { useState } from 'react'
import Drawer from './Drawer/Drawer'

const Header = () => {
  const theme = useTheme()
  const matcher = useMediaQuery(theme.breakpoints.down('md'))
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo />
            {matcher ? (
              <Drawer open={openDrawer} setOpenDrawer={setOpenDrawer} />
            ) : (
              <HeaderTabs />
            )}
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
