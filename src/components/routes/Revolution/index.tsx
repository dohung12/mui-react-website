import React from 'react'
import { Grid, Typography } from '@mui/material'
import Lottie from 'react-lottie-player'
import { VisionsParagraph, TechnologyParagraph, Process } from './data'
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

const TechnologyBlock = () => {
  const { title, paragraph, animation } = TechnologyParagraph
  return (
    <Grid item container spacing={4}>
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

const ProcessBlock = () => {
  return (
    <Grid item container>
      <Grid
        item
        sx={{
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography variant='h4'>Process</Typography>
      </Grid>
      {Process.map((element) => {
        const { title, paragraph, image, style } = element
        return (
          <Grid
            item
            container
            key={title}
            spacing={4}
            sx={{
              ...style,
              minHeight: '100vh',
              justifyContent: 'center',
              padding: { xs: '2rem', md: '5rem' },
              alignItems: 'center',
            }}
          >
            <Grid
              item
              container
              xs={12}
              md={8}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={image}
                alt={title}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </Grid>
            <TextBlock
              title={title}
              paragraph={paragraph}
              xs={12}
              md={4}
              titleStyle={{ color: '#111' }}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

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
