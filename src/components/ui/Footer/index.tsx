import React from 'react'
import { styled } from '@mui/material'
import footerAdornment from '../../../assets/Footer Adornment.svg'

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
}))

const StyledImg = styled('img')(({ theme }) => ({
  width: '25em',
  verticalAlign: 'bottom',
  [theme.breakpoints.down('md')]: {
    width: '21em',
  },
  [theme.breakpoints.down('sm')]: {
    width: '15em',
  },
}))

const Footer = () => {
  return (
    <StyledFooter>
      <StyledImg src={footerAdornment} alt='black decorative' />
    </StyledFooter>
  )
}

export default Footer
