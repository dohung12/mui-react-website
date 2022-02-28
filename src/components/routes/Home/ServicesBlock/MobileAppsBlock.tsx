import React from 'react'
import {
  Grid,
  Typography,
  useTheme,
  styled,
  useMediaQuery,
} from '@mui/material'
import mobileAppsIcon from '../../../../assets/mobileIcon.svg'
import LearnMoreButton from '../../../ui/LearnMoreBtn'

const StyledImg = styled('img')(({ theme }) => ({
  marginLeft: '2em',
  [theme.breakpoints.down('xs')]: {
    marginLeft: 0,
  },
}))

const MobileAppsBlock = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Grid
      container
      direction='row'
      justifyContent={matches ? 'flex-end' : 'center'}
      sx={{
        marginTop: '12em',
        padding: matches ? undefined : '25px',
      }}
    >
      <Grid
        item
        sx={{
          textAlign: matches ? undefined : 'center',
        }}
      >
        <Typography variant='h4'>iOS/Android App Development</Typography>
        <Typography
          variant='subtitle1'
          sx={{
            marginBottom: '1em',
          }}
        >
          Extend Functionality. Extend Access. Increase Engagement.
        </Typography>
        <Typography variant='subtitle1'>
          Integrate your web experience or create a standalone app
          {matches ? <br /> : null}
          with either mobile platform.
        </Typography>
        <LearnMoreButton link='/mobile-apps' />
      </Grid>
      <Grid
        item
        style={{
          marginRight: matches ? '5em' : 0,
        }}
      >
        <StyledImg alt='mobile phone icon' src={mobileAppsIcon} />
      </Grid>
    </Grid>
  )
}

export default MobileAppsBlock