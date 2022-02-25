import { matchPath, useLocation } from 'react-router-dom'
import { Tabs } from '@mui/material'
import StyledTab from './Tab'
import React, { useState } from 'react'
import TabsMenu from './Menu'
import { EstimateButton } from '../Header.style'
import { MENU_OPTIONS, getRoutes } from '../../../Routes'

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
      <TabsMenu
        id='services-menu'
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        menuOptions={MENU_OPTIONS}
        currentTab={currentTab}
      />
      <EstimateButton link='/estimate'>Free Estimate</EstimateButton>
    </>
  )
}

export default HeaderTabs
