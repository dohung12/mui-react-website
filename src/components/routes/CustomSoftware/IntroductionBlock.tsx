import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Lightbulb, Timer, Paid } from '@mui/icons-material'
import { SOLUTIONS_INTRO } from './data'

const ICONS = [
  {
    title: 'Save Energy',
    icon: (
      <Lightbulb
        sx={{
          fontSize: '4rem',
        }}
      />
    ),
  },
  {
    title: 'Save Time',
    icon: (
      <Timer
        sx={{
          fontSize: '4rem',
        }}
      />
    ),
  },
  {
    title: 'Save Money',
    icon: (
      <Paid
        sx={{
          fontSize: '4rem',
        }}
      />
    ),
  },
]
const IntroductionBlock = () => {
  return (
    <>
      <Grid
        item
        container
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '32px', md: 0 },
          textAlign: 'justify',
        }}
      >
        {/* Paragraph1 */}
        <Grid item md={8}>
          {SOLUTIONS_INTRO.map((element, index) => {
            return (
              <Typography key={index} variant='body1' paragraph>
                {element}
              </Typography>
            )
          })}
        </Grid>
        {/* Icons section */}
        <Grid
          item
          md={4}
          container
          direction='row'
          sx={{
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {ICONS.map((element) => {
            const { title, icon } = element
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={12}
                container
                key={title}
                sx={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: { xs: 'fit-content', md: '100%' },
                }}
              >
                <Grid item>
                  <Typography variant='h4'>{title}</Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    color: 'secondary.main',
                    width: '4rem',
                    height: '4rem',
                  }}
                >
                  {icon}
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default IntroductionBlock
