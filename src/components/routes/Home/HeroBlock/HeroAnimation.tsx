import React, { useState } from 'react'
import { Grid, useTheme } from '@mui/material'
import Lottie from 'react-lottie-player'
import animationData from '../../../../animations/landinganimation/data'

const HeroAnimation = () => {
  const [playStatus, setPlayStatus] = useState(true)
  const theme = useTheme()

  const handleClick = () => {
    setPlayStatus(!playStatus)
  }
  return (
    <Grid
      md={3}
      item
      sx={{
        maxWidth: '50em',
        marginTop: '2em',
        [theme.breakpoints.down('md')]: {
          maxWidth: '30em',
        },
      }}
    >
      <Lottie
        onClick={handleClick}
        loop
        animationData={animationData}
        play={playStatus}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Grid>
  )
}

export default HeroAnimation
