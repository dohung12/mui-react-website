import { Grid } from '@mui/material'
import HeroAnimation from './HeroAnimation'
import HeroTypography from './HeroTypography'

const HeroBlock = () => {
  return (
    <Grid item>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        direction={'row'}
      >
        <HeroTypography />
        <HeroAnimation />
      </Grid>
    </Grid>
  )
}

export default HeroBlock
