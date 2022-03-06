import React from 'react'
import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import ServicesBlock from '../Home/ServicesBlock'

const Services = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Grid
      container
      direction={'column'}
      sx={{
        marginLeft: matches ? '5rem' : 0,
        marginBottom: '5rem',
      }}
    >
      <Grid item>
        <Typography
          variant='h2'
          gutterBottom
          align={matches ? 'inherit' : 'center'}
        >
          Services
        </Typography>
      </Grid>
      <ServicesBlock />
    </Grid>
  )
}

export default Services
