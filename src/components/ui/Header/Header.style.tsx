import { useScrollTrigger, styled, Button } from '@mui/material'
import React from 'react'

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
}))

const StyledLogo = styled('img')({
  height: '8em',
})

const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: '50px',
  marginLeft: '50px',
  marginRight: '25px',
  height: '45px',
  color: '#fff',
}))

export { StyledLogo, EstimateButton, Offset, ElevationScroll }
