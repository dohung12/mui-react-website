import React from 'react'
import {
  Grid,
  Typography,
  useTheme,
  styled,
  useMediaQuery,
} from '@mui/material'
import websiteAppsIcon from '../../../../assets/websiteIcon.svg'
import LearnMoreButton from '../../../ui/LearnMoreBtn'

const StyledImg = styled('img')(({ theme }) => ({
  marginLeft: '2em',
  [theme.breakpoints.down('xs')]: {
    marginLeft: 0,
  },
}))

const WebsiteAppBlock = () => {
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
        <Typography variant='h4'>Website Development</Typography>
        <Typography variant='subtitle1'>
          Reach more. Discover more. Sell more
        </Typography>
        <Typography variant='subtitle1'>
          Optimize for Search Engines, built for speed.
        </Typography>
        <LearnMoreButton
          link='/websites'
          style={{
            height: 35,
            padding: '16px 10px',
            marginBottom: { sm: '2em' },
          }}
        />
      </Grid>
      <Grid item>
        <StyledImg src={websiteAppsIcon} alt='website app icon' />
      </Grid>
    </Grid>
  )
}

export default WebsiteAppBlock
