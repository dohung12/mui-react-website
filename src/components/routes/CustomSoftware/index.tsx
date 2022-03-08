import React from 'react'
import { Grid, Typography } from '@mui/material'
import SolutionsBlock from './Solutions'
import IntroductionBlock from './IntroductionBlock'
import RootcauseAnalysisBlock from './RootcauseAnalysisBlock'

const CustomSoftware = () => {
  return (
    <Grid
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
          Custom Software Development
        </Typography>
      </Grid>
      <IntroductionBlock />
      <SolutionsBlock />
      <RootcauseAnalysisBlock />
    </Grid>
  )
}

export default CustomSoftware
