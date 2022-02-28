import React from 'react'
import {
  Card,
  CardContent,
  Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import LearnMoreButton from '../../../ui/LearnMoreBtn'
import revolutionBackground from '../../../../assets/repeatingBackground.svg'

const StyledDiv = styled('div')(() => ({
  backgroundImage: `url(${revolutionBackground})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
}))

const RevolutionBlock = () => {
  const theme = useTheme()
  return (
    <Grid item>
      <Grid
        container
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100em',
          marginTop: '12em',
        }}
      >
        <Card
          sx={{
            position: 'absolute',
            shadow: 10,
            borderRadius: 15,
            padding: '10em',
            [theme.breakpoints.down('sm')]: {
              padding: '8em 0',
              borderRadius: 0,
              width: '100%',
            },
          }}
        >
          <CardContent>
            <Grid
              container
              direction='column'
              sx={{
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <Grid item>
                <Typography variant='h3' gutterBottom>
                  The revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='subtitle1'>
                  Visionary insights coupled with cutting-edge technology is the
                  recipe for revolution
                </Typography>
              </Grid>
              <LearnMoreButton link='/revolution'></LearnMoreButton>
            </Grid>
          </CardContent>
        </Card>
        <StyledDiv />
      </Grid>
    </Grid>
  )
}

export default RevolutionBlock
