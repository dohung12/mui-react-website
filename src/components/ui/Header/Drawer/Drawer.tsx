import React, { useState } from 'react'
import { SwipeableDrawer, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'

const Drawer = () => {
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor='left'
      >
        Example Drawer
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
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
