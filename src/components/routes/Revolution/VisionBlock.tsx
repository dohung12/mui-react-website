import React from 'react'
import { Grid } from '@mui/material'
import { VisionsParagraph } from './data'
import TextBlock from '../../ui/TextBlock'

const VisionBlock = () => {
  const { title, paragraph, image } = VisionsParagraph
  return (
    <Grid item container spacing={4}>
      <Grid item container xs={12} md={6}>
        <img src={image} alt={title} style={{ width: '100%' }} />
      </Grid>
      <TextBlock title={title} paragraph={paragraph} xs={12} md={6} />
    </Grid>
  )
}
export default VisionBlock
