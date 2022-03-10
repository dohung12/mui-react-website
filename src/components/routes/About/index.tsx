import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Introduction } from './data'
import TextBlock from '../../ui/TextBlock'

const About = () => {
  const { title, paragraph, image } = Introduction
  return (
    <Grid
      container
      direction={'column'}
      sx={{
        padding: { xs: '2rem', md: '5rem' },
      }}
    >
      <Grid item>
        <Typography variant='h2' gutterBottom>
          About Us
        </Typography>
      </Grid>
      <Grid item container spacing={4}>
        <Grid
          item
          container
          xs={12}
          md={6}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </Grid>
        <TextBlock xs={12} md={6} title={title} paragraph={paragraph} />
      </Grid>
    </Grid>
  )
}

export default About
