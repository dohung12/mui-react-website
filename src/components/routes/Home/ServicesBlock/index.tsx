import { Grid, Typography, Button, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import customSoftwareIcon from '../../../../assets/Custom Software Icon.svg'

const ServicesBlock = () => {
  const theme = useTheme()
  return (
    <Grid item>
      <Grid container direction={'row'}>
        <Grid item>
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
          <Button variant='outlined'>
            <span style={{ marginRight: 10 }}>Learn more</span>
            <ArrowForwardIcon
              color='primary'
              sx={{
                width: 10,
                height: 10,
              }}
            ></ArrowForwardIcon>
          </Button>
        </Grid>
        <Grid item>
          <img src={customSoftwareIcon} alt='custom software icon' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ServicesBlock
