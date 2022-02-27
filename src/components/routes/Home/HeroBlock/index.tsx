import { Grid, useTheme } from '@mui/material'
import HeroAnimation from './HeroAnimation'
import HeroTypography from './HeroTypography'

const HeroBlock = () => {
  const theme = useTheme()
  return (
    <Grid item>
      <Grid
        container
        alignItems={'center'}
        direction={'row'}
        sx={{
          [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-end',
          },
          [theme.breakpoints.up('xs')]: {
            justifyContent: 'center',
          },
        }}
      >
        <HeroTypography />
        <HeroAnimation />
      </Grid>
    </Grid>
  )
}

export default HeroBlock
