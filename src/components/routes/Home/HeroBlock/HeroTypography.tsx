import React from 'react'
import { Grid, Typography, Button, useTheme } from '@mui/material'
import ArrowButton from '../../../ui/ArrowButton'

const HeroTypography = () => {
  const theme = useTheme()
  return (
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
  )
}

export default HeroTypography
