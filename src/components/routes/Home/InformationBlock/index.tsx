import React from 'react'
import { Grid, styled, useMediaQuery, useTheme } from '@mui/material'
import infoBackground from '../../../../assets/infoBackground.svg'
import AboutUsBlock from './AboutUsBlock'
import ContactUsBlock from './ContactUsBlock'

const StyledDiv = styled('div')(() => ({
  backgroundImage: `url(${infoBackground})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
}))

const InformationBlock = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid item>
      <Grid
        container
        direction={'row'}
        sx={{
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          item
          container
          sx={{
            position: 'absolute',
            direction: matchesSM ? 'column' : 'row',
            justifyContent: matchesSM ? 'space-around' : 'unset',
            padding: matchesSM ? 0 : '0 5em',
          }}
        >
          <AboutUsBlock />
          <ContactUsBlock />
        </Grid>
        <StyledDiv />
      </Grid>
    </Grid>
  )
}

export default InformationBlock
