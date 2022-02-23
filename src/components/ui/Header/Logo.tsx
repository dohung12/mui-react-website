import React from 'react'
import { StyledLogo } from './Header.style'
import logoSrc from '../../../assets/logo.svg'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
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
