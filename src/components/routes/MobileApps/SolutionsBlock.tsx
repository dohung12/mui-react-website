import React from 'react'
import Lottie from 'react-lottie-player'
import { Grid, Typography } from '@mui/material'
import { Integration, SimultaneousPlatformSupport } from './data'
import animation from '../../../animations/integrationAnimation/data.json'

const IntegrationBlock = () => {
  const { title, paragraph } = Integration

  return (
    <Grid
      md={4}
      item
      container
      direction='column'
      sx={{
        textAlign: 'justify',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid item>
        <Typography variant='h4'> {title}</Typography>
      </Grid>
      <Grid item>
        {paragraph.map((element, index) => {
          return (
            <Typography key={index} variant='body1' paragraph>
              {element}
            </Typography>
          )
        })}
      </Grid>
    </Grid>
  )
}

const PlatformSupportBlock = () => {
  const { title, paragraph } = SimultaneousPlatformSupport

  return (
    <Grid
      md={4}
      item
      container
      direction='column'
      sx={{
        textAlign: 'justify',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid item>
        <Typography variant='h4'> {title}</Typography>
      </Grid>
      <Grid item>
        {paragraph.map((element, index) => {
          return (
            <Typography key={index} variant='body1' paragraph>
              {element}
            </Typography>
          )
        })}
      </Grid>
    </Grid>
  )
}

const SolutionsBlock = () => {
  return (
    <Grid item container direction='row' spacing={4}>
      <IntegrationBlock />
      <Grid item md={4}>
        <Lottie loop animationData={animation} play style={{ width: '100%' }} />
      </Grid>
      <PlatformSupportBlock />
    </Grid>
  )
}

export default SolutionsBlock
