import React from 'react'
import { Grid } from '@mui/material'
import Lottie from 'react-lottie-player'
import { TechnologyParagraph } from './data'
import TextBlock from '../../ui/TextBlock'

const TechnologyBlock = () => {
  const { title, paragraph, animation } = TechnologyParagraph
  return (
    <Grid
      item
      container
      spacing={4}
      sx={{
        padding: { xs: '2rem', md: '5rem' },
      }}
    >
      <TextBlock title={title} paragraph={paragraph} xs={12} md={6} />
      <Grid item xs={12} md={6}>
        <Lottie
          loop
          animationData={animation}
          play
          style={{ width: '100%', height: '100%' }}
        />
      </Grid>
    </Grid>
  )
}

export default TechnologyBlock
