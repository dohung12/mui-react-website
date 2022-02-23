import { matchPath, useLocation, Link } from 'react-router-dom'
import { Tabs, styled, Menu, MenuItem } from '@mui/material'
import StyledTab from './Tab'
import React, { useState } from 'react'

const StyledTabs = styled(Tabs)({
  marginLeft: 'auto',
})

const menuOptions = [
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
  const ROUTES = [
    { name: 'Home', link: '/' },
    {
      name: 'Services',
      link: '/services',
      ariaControl: open ? 'services-menu' : undefined,
      ariaHasPopup: anchorEl ? 'true' : undefined,
    },
    { name: 'The Revolution', link: '/revolution' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
  ]

  let ROUTE_NAME = [...ROUTES, ...menuOptions].reduce(
    (initState, route) => [...initState, route.link],
    [] as string[]
  )

  console.log(ROUTE_NAME, anchorEl)

  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(ROUTE_NAME)
  const currentTab = routeMatch?.pattern?.path

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <StyledTabs value={currentTab} indicatorColor='secondary'>
        {ROUTES.map((route) => {
          const { name, link, ariaControl, ariaHasPopup } = route

          return (
            <StyledTab
              key={name}
              label={name}
              value={link}
              isCurrentTab={link === currentTab}
              ariaControl={ariaControl}
              ariaHasPopUp={ariaHasPopup as 'true' | undefined}
              mouseOver={handleClick}
            />
          )
        })}
      </StyledTabs>
      <Menu
        id='services-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuOptions.map((option) => {
          const { name, link } = option
          return (
            <MenuItem
              component={Link}
              key={name}
              to={link}
              onClick={handleClose}
            >
              {name}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export default HeaderTabs
