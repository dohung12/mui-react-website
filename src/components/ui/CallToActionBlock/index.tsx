import {
  styled,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import LearnMoreButton from '../LearnMoreBtn'
import background from '../../../assets/background.jpg'
import mobileBackground from '../../../assets/mobileBackground.jpg'
import { EstimateButton } from '../EstimateButton'

const BackgroundGrid = styled(Grid)(({ theme }) => ({
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '60em',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: `url(${mobileBackground})`,
    backgroundAttachment: 'inherit',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  [theme.breakpoints.up('sm')]: {
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    justifyContent: 'space-around',
  },
}))

const CallToAction = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <BackgroundGrid container>
      <Grid item>
        <Grid container direction={'column'}>
          <Grid item sx={{ textAlign: matches ? 'center' : 'inherit' }}>
            <Typography variant='h2'>
              Simple software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                fontSize: '1.5rem',
              }}
            >
              Take advantage of 21st Century.
            </Typography>
            <LearnMoreButton
              style={{ backgroundColor: '#fff' }}
              link='/revolution'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <EstimateButton />
      </Grid>
    </BackgroundGrid>
  )
}

export default CallToAction
