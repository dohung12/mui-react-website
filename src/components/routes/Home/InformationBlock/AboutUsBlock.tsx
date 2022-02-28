import React from 'react'
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import LearnMoreButton from '../../../ui/LearnMoreBtn'

const AboutUsBlock = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid item md={6} xs={12} sx={{}}>
      <Grid
        container
        direction={'column'}
        sx={{ alignItems: matchesSM ? 'center' : 'flex-start' }}
      >
        <Typography variant='h2' sx={{ color: '#fff' }}>
          About us
        </Typography>
        <Typography variant='subtitle2'>Let's get personal</Typography>
        <LearnMoreButton
          link='/about'
          style={{
            color: '#fff',
            borderColor: '#fff',
          }}
        ></LearnMoreButton>
      </Grid>
    </Grid>
  )
}

export default AboutUsBlock
