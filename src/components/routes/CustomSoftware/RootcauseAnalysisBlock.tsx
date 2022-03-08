import React from 'react'
import { rootcauseBlockData } from './data'
import TextBlock from './TextBlock'
import { Grid } from '@mui/material'

const RootcauseAnalysisBlock = () => {
  const { title, paragraph, image } = rootcauseBlockData
  return (
    <Grid item container direction='column'>
      <Grid item>
        <TextBlock title={title} paragraph={paragraph}></TextBlock>
      </Grid>
      <Grid
        item
        container
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={image}
          alt='root-cause'
          style={{
            height: '50vh',
          }}
        />
      </Grid>
    </Grid>
  )
}

export default RootcauseAnalysisBlock
