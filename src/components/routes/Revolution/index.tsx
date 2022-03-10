import React from 'react'
import { Grid, Typography } from '@mui/material'
import VisionBlock from './VisionBlock'
import TechnologyBlock from './TechnologyBlock'
import ProcessBlock from './ProcessBlock'

const Revolution = () => {
  return (
    <Grid container direction='column'>
      {/* Page title */}
      <Grid
        item
        sx={{
          padding: { xs: '2rem', md: '5rem' },
        }}
      >
        <Typography variant='h2'>The Revolution</Typography>
      </Grid>
      {/* Vision Paragraph Block */}
      <VisionBlock />
      {/* Technology Block */}
      <TechnologyBlock />
      {/* Process Block */}
      <ProcessBlock />
    </Grid>
  )
}

export default Revolution
