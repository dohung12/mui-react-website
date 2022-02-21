import React from 'react'
import { AppBar, Toolbar, useScrollTrigger } from '@mui/material'

interface Props {
  children: React.ReactElement
}

function ElevationScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}
// adding custom color
// declare module '@mui/material/AppBar' {
//   interface AppBarPropsColorOverrides {
//     blue: true
//   }
// }

const Header = () => {
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>Arc Development</Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
