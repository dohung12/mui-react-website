import React from 'react'
import { styled } from '@mui/material'
import footerAdornment from '../../../assets/Footer Adornment.svg'
import FooterNav from './FooterNav'
import facebook from '../../../assets/facebook.svg'
import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram.svg'

const SocialMedia = [
  { name: 'facebook logo', img: facebook, link: 'https://www.facebook.com' },
  { name: 'twitter logo', img: twitter, link: 'https://www.twitter.com' },
  { name: 'instagram logo', img: instagram, link: 'https://www.instagram.com' },
]

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

const FOOTER_CONTENT = [
  [{ name: 'Home', link: '/' }],
  [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/custom-software' },
    { name: 'Mobile Development', link: '/mobile-apps' },
    { name: 'Website Development', link: '/websites' },
  ],
  [
    { name: 'The Revolution', link: '/revolution' },
    { name: 'Vision', link: '/revolution' },
    { name: 'Technology', link: '/revolution' },
    { name: 'Process', link: '/revolution' },
  ],
  [
    { name: 'About Us', link: '/about' },
    { name: 'History', link: '/about' },
    { name: 'Team', link: '/about' },
  ],
  [{ name: 'Contact Us', link: '/contact' }],
]

const Footer = () => {
  return (
    <StyledFooter>
      <FooterNav content={FOOTER_CONTENT} socialMedia={SocialMedia} />
      <StyledImg src={footerAdornment} alt='black decorative' />
    </StyledFooter>
  )
}

export default Footer
