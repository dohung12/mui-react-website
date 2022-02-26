import { useScrollTrigger, styled, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactElement
}
function ElevationScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}
const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: '3em',
  [theme.breakpoints.down('md')]: {
    marginBottom: '2em',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1.25em',
  },
}))

const EstimateButton = ({
  link,
  children,
}: {
  link: string
  children: React.ReactNode
}) => {
  return (
    <Button
      variant='contained'
      color='secondary'
      component={Link}
      to={link}
      sx={{
        typography: 'estimate',
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
        textAlign: 'center',
        '&:hover': {
          backgroundColor: 'secondary.light',
        },
      }}
    >
      {children}
    </Button>
  )
}

export { EstimateButton, Offset, ElevationScroll }
