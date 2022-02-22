import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  styled,
  Tabs,
  Tab,
  Button,
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

const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: '3em',
}))
const Logo = styled('img')({
  height: '7em',
})
const StyledTabs = styled(Tabs)({
  marginLeft: 'auto',
})
const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: '25px',
}))
const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: '50px',
  marginLeft: '50px',
  marginRight: '25px',
  height: '45px',
  color: '#fff',
}))

const Header = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo src={logo} alt='company logo' />
            <StyledTabs
              value={value}
              onChange={handleChange}
              indicatorColor='secondary'
              textColor='secondary'
            >
              <StyledTab label='home'></StyledTab>
              <StyledTab label='services'></StyledTab>
              <StyledTab label='the revolution'></StyledTab>
              <StyledTab label='about us'></StyledTab>
              <StyledTab label='contact us'></StyledTab>
            </StyledTabs>
            <StyledButton variant='contained' color='secondary'>
              Free Estimate
            </StyledButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Offset />
    </React.Fragment>
  )
}

export default Header
