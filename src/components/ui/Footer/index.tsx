import React from 'react'
import { styled } from '@mui/material'

// const FooterStyle = {
//   backgroundColor: 'primary.main',
//   width: '100%',
// }

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
}))

const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>
}

export default Footer
