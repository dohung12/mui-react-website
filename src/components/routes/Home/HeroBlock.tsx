import React, { useState } from 'react'
import animationData from '../../../animations/landinganimation/data'
import { Grid, Button, Typography, useTheme } from '@mui/material'
import Lottie from 'react-lottie-player'
import ArrowButton from '../../ui/ArrowButton'

const HeroBlock = () => {
  const [playStatus, setPlayStatus] = useState(true)
  const theme = useTheme()

  const handleClick = () => {
    setPlayStatus(!playStatus)
  }
  return (
    <>
      <Grid
        container
        direction={'column'}
        sx={{
          marginTop: '5em',
          [theme.breakpoints.down('md')]: {
            marginTop: '3em',
          },
        }}
      >
        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            alignItems={'center'}
            direction={'row'}
          >
            <Grid item>
              <Typography variant='h2' textAlign={'center'}>
                Bringing West Coast technology <br /> to the Midwest
              </Typography>
              <Grid
                container
                spacing={2}
                justifyContent={'center'}
                sx={{
                  marginTop: '1em',
                }}
              >
                <Grid item>
                  <Button
                    variant='contained'
                    sx={{
                      typography: 'estimate',
                      backgroundColor: 'secondary.main',
                      borderRadius: '50px',
                      '&:hover': {
                        backgroundColor: 'secondary.light',
                      },
                    }}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    sx={{
                      borderWidth: 2,
                      borderRadius: '50px',
                      fontWeight: 'bold',
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ArrowButton
                      width={'15px'}
                      height={'15px'}
                      fill={theme.palette.primary.main}
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
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default HeroBlock
