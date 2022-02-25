import React, { useState } from 'react'
import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { Menu } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { getRoutesLink } from '../../../Routes'

const Drawer = () => {
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  const [openDrawer, setOpenDrawer] = useState(false)
  const location = useLocation().pathname
  const routes = getRoutesLink()

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor='left'
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'primary.main',
            color: '#fff',
          },
        }}
      >
        <List disablePadding>
          {routes.map((route) => {
            const { name, link } = route
            return (
              <ListItem
                key={name}
                divider
                button
                component={Link}
                to={link}
                onClick={() => setOpenDrawer(false)}
                sx={{
                  typography: 'tab',
                  color: '#fff',
                  opacity: 0.7,

                  '&.Mui-selected': {
                    color: 'secondary.main',
                    opacity: 1,
                    backgroundColor: '#075985',
                  },
                }}
                selected={location === link}
              >
                <ListItemText disableTypography>{name}</ListItemText>
              </ListItem>
            )
          })}
          <ListItem
            sx={{
              typography: 'tab',
              color: '#fff',
              backgroundColor: 'secondary.main',
            }}
            divider
            button
            component={Link}
            to='/estimate'
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
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
