import React from 'react'
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import LearnMoreButton from '../../../ui/LearnMoreBtn'

const ContactUsBlock = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid
      item
      md={6}
      xs={12}
      sx={{
        alignItems: 'flex-end',
      }}
    >
      <Grid
        container
        direction={'column'}
        sx={{ alignItems: matchesSM ? 'center' : 'flex-end' }}
      >
        <Typography variant='h2' sx={{ color: '#fff' }}>
          Contact us
        </Typography>
        <Typography variant='subtitle2'>Say hello! </Typography>
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

export default ContactUsBlock
