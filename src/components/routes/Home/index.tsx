import React from 'react'
import { Grid, useTheme } from '@mui/material'
import HeroBlock from './HeroBlock/'
import ServicesBlock from './ServicesBlock/'
import RevolutionBlock from './RevolutionBlock'

const Home = () => {
  const theme = useTheme()
  return (
    <Grid
      container
      direction={'column'}
      sx={{
        marginTop: '5em',
        [theme.breakpoints.down('md')]: {
          marginTop: '3em',
        },
      }}
    >
      <HeroBlock />
      <ServicesBlock />
      <RevolutionBlock />
    </Grid>
  )
}

export default Home
