import React, { useState } from 'react'
import animationData from '../../../animations/landinganimation/data'
import { Grid, Button, Typography } from '@mui/material'
import Lottie from 'react-lottie-player'
import ArrowButton from '../../ui/ArrowButton'

const Home = () => {
  const [playStatus, setPlayStatus] = useState(true)

  const handleClick = () => {
    setPlayStatus(!playStatus)
  }

  return (
    <>
      <Grid container direction={'column'}>
        <Grid item>
          <Grid
            container
            justifyContent={'flex-end'}
            alignItems={'center'}
            direction={'row'}
          >
            <Grid item>
              <Typography variant='h2' textAlign={'center'}>
                Bringing West Coast technology <br /> to the Midwest
              </Typography>
              <Grid container justifyContent={'center'}>
                <Grid item>
                  <Button variant='contained'>Free Estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined'>
                    Learn More
                    <ArrowButton
                      width={'15px'}
                      height={'15px'}
                      fill={'red'}
                    ></ArrowButton>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              md
              item
              sx={{
                minWidth: '21em',
                maxWidth: '50em',
                marginLeft: '10%',
                marginTop: '2em',
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
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
