import React from 'react'
import { Introduction, Icons } from './data'
import { Grid, Typography } from '@mui/material'
import SolutionsBlock from './SolutionsBlock'

const MobileApps = () => {
  return (
    <Grid
      direction='column'
      container
      spacing={4}
      sx={{
        padding: { xs: '2rem', md: '5rem' },
      }}
    >
      {/* Page title */}
      <Grid item>
        <Typography
          variant='h2'
          sx={{
            alignItems: { xs: 'center', md: 'unset' },
          }}
        >
          iOS/Android App Development
        </Typography>
      </Grid>
      {/* Introduction */}
      <Grid
        item
        md={8}
        sx={{
          textAlign: 'justify',
        }}
      >
        {Introduction.map((element, index) => {
          return (
            <Typography key={index} variant='body1' paragraph>
              {element}
            </Typography>
          )
        })}
      </Grid>
      <SolutionsBlock />
      <Grid item container spacing={4}>
        {Icons.map((element, index) => {
          const { title, image } = element
          return (
            <Grid
              item
              container
              key={title}
              md={4}
              direction='column'
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Grid item>
                <Typography variant='h4'>{title}</Typography>
              </Grid>
              <Grid item>
                <img src={image} alt={title} style={{ width: '100%' }} />
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default MobileApps
