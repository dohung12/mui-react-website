import React from 'react'
import { SwipeableDrawer, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'

interface Props {
  open: boolean
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = ({ open, setOpenDrawer }: Props) => {
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={open}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor='left'
      >
        Example Drawer
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!open)}
        sx={{
          marginLeft: 'auto',
          '&.MuiIconButton-root': {
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        }}
      >
        <Menu sx={{ width: '50px', height: '50px' }} />
      </IconButton>
    </>
  )
}

export default Drawer
