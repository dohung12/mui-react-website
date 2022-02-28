import React from 'react'
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import customSoftwareIcon from '../../../../assets/Custom Software Icon.svg'
import LearnMoreButton from '../../../ui/LearnMoreBtn'

const CustomSoftwareBlock = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid
      container
      direction={'row'}
      justifyContent={matches ? 'center' : undefined}
      sx={{
        marginTop: '12em',
        padding: matches ? '25px' : undefined,
      }}
      spacing={4}
    >
      <Grid
        item
        sx={{
          marginLeft: matches ? 0 : '5em',
          textAlign: matches ? 'center' : undefined,
        }}
      >
        <Typography variant='h4'>Custom Software Development</Typography>
        <Typography variant='subtitle1'>
          Save energy. Save time. Save money
        </Typography>
        <Typography variant='subtitle1'>
          Complete digital solutions, from investigation to
          <span
            style={{
              fontFamily: 'Pacifico',
              color: theme.palette.secondary.main,
            }}
          >
            celebration
          </span>
        </Typography>
        <LearnMoreButton
          link='/custom-software'
          style={{
            height: 35,
            padding: '16px 10px',
            marginBottom: { sm: '2em' },
          }}
        />
      </Grid>
      <Grid item>
        <img src={customSoftwareIcon} alt='custom software icon' />
      </Grid>
    </Grid>
  )
}

export default CustomSoftwareBlock
