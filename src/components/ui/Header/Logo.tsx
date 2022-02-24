import React from 'react'
import logoSrc from '../../../assets/logo.svg'
import { Button, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const StyledLogo = styled('img')(({ theme }) => ({
  height: '8em',
  [theme.breakpoints.down('md')]: {
    height: '7em',
  },
  [theme.breakpoints.down('sm')]: {
    height: '5.5em',
  },
}))

const Logo = () => {
  return (
    <Button
      component={Link}
      to='/'
      sx={{
        padding: 0,
        '&hover': {
          backgroundColor: 'transparent',
        },
      }}
    >
      <StyledLogo src={logoSrc} alt='company logo' />
    </Button>
  )
}

export default Logo
