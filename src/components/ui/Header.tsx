import React from 'react'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  styled,
  Tabs,
  Tab,
} from '@mui/material'
import logo from '../../assets/logo.svg'

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

const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: '3em',
}))
const Logo = styled('img')({
  height: '7em',
})
const StyledTabs = styled(Tabs)((theme) => ({
  marginLeft: 'auto',
}))
const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: '25px',
}))
const Header = () => {
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo src={logo} alt='company logo' />
            <StyledTabs>
              <StyledTab label='home'></StyledTab>
              <StyledTab label='services'></StyledTab>
              <StyledTab label='the revolution'></StyledTab>
              <StyledTab label='about us'></StyledTab>
              <StyledTab label='contact us'></StyledTab>
            </StyledTabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Offset />
    </React.Fragment>
  )
}

export default Header
