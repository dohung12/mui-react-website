import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export function EstimateButton() {
  return (
    <Button
      variant='contained'
      sx={{
        typography: 'estimate',
        backgroundColor: 'secondary.main',
        borderRadius: '50px',
        '&:hover': {
          backgroundColor: 'secondary.light',
        },
      }}
      component={Link}
      to='/estimate'
    >
      Free Estimate
    </Button>
  )
}
