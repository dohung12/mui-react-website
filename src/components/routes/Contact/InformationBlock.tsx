import { Grid, Typography } from '@mui/material'
import { Email, Phone } from '@mui/icons-material'
const InformationBlock = () => {
  return (
    <Grid
      item
      container
      direction='column'
      md={4}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Grid item>
        <Typography variant='h2'>Contact Us</Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>We're waiting</Typography>
      </Grid>
      <Grid
        item
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Phone />
        <Typography variant='body1'>(555) 555-5555</Typography>
      </Grid>
      <Grid
        item
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Email />
        <Typography variant='body1'>CompanyEmail@gmail.com</Typography>
      </Grid>
    </Grid>
  )
}

export default InformationBlock
