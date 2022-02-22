import React from 'react'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  styled,
  Button,
} from '@mui/material'
import logo from '../../../assets/logo.svg'
import { Outlet } from 'react-router-dom'
import HeaderTabs from './Tabs'

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

const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: '3em',
}))
const Logo = styled('img')({
  height: '7em',
})
const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: '50px',
  marginLeft: '50px',
  marginRight: '25px',
  height: '45px',
  color: '#fff',
}))

const Header = () => {
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo src={logo} alt='company logo' />
            <HeaderTabs />
            <StyledButton variant='contained' color='secondary'>
              Free Estimate
            </StyledButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Offset />
      <Outlet />
    </React.Fragment>
  )
}

export default Header
