import { matchPath, useLocation, Link } from 'react-router-dom'
import { Tabs, MenuItem } from '@mui/material'
import StyledTab from './Tab'
import React, { useState } from 'react'
import { StyledMenu } from './Menu.style'

const MENU_OPTIONS = [
  { name: 'Services', link: '/services' },
  {
    name: 'Custom Software Development',
    link: '/custom-software',
  },
  {
    name: 'iOS/Android App Development',
    link: '/mobile-apps',
  },
  {
    name: 'Website Development',
    link: '/websites',
  },
]

function getRoutes(
  open: boolean,
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
) {
  return [
    { name: 'Home', link: '/' },
    {
      name: 'Services',
      link: '/services',
      ariaControl: open ? 'services-menu' : undefined,
      ariaHasPopup: 'true',
      ariaExpanded: open ? 'true' : undefined,
      mouseOver: handleClick,
    },
    { name: 'The Revolution', link: '/revolution' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
  ]
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = matchPath(pattern, pathname)
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }
}

function HeaderTabs() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const routes = getRoutes(open, handleClick)

  const routeName = [...routes, ...MENU_OPTIONS].reduce(
    (initState, route) => [...initState, route.link],
    [] as string[]
  )

  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(routeName)
  const currentTab = routeMatch?.pattern?.path

  return (
    <>
      <Tabs
        value={false}
        indicatorColor='secondary'
        sx={{ marginLeft: 'auto' }}
      >
        {routes.map((route) => {
          const {
            name,
            link,
            ariaControl,
            ariaHasPopup,
            ariaExpanded,
            mouseOver,
          } = route

          return (
            <StyledTab
              key={name}
              label={name}
              value={link}
              isCurrentTab={link === currentTab}
              ariaControl={ariaControl}
              ariaHasPopUp={ariaHasPopup as 'true' | undefined}
              ariaExpanded={ariaExpanded as 'true' | undefined}
              mouseOver={mouseOver}
            />
          )
        })}
      </Tabs>
      <StyledMenu
        id='services-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: handleClose,
        }}
      >
        {MENU_OPTIONS.map((option) => {
          const { name, link } = option
          return (
            <MenuItem
              component={Link}
              key={name}
              to={link}
              onClick={handleClose}
              selected={currentTab === link}
            >
              {name}
            </MenuItem>
          )
        })}
      </StyledMenu>
    </>
  )
}

export default HeaderTabs
