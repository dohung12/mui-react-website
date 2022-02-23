import { matchPath, useLocation } from 'react-router-dom'
import { Tabs, styled } from '@mui/material'
import StyledTab from './Tab'

const StyledTabs = styled(Tabs)({
  marginLeft: 'auto',
})

const ROUTES = [
  { name: 'Home', link: '/', activeIndex: 0 },
  {
    name: 'Services',
    link: '/services',
    activeIndex: 1,
  },
  { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
  { name: 'About Us', link: '/about', activeIndex: 3 },
  { name: 'Contact Us', link: '/contact', activeIndex: 4 },
]

const ROUTE = ROUTES.reduce(
  (initState, route) => [...initState, route.link],
  [] as string[]
)

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
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(ROUTE)
  const currentTab = routeMatch?.pattern?.path
  return (
    <StyledTabs value={currentTab} indicatorColor='secondary'>
      {ROUTES.map((route) => {
        const { name, link } = route

        return (
          <StyledTab
            key={name}
            label={name}
            value={link}
            isCurrentTab={link === currentTab}
          />
        )
      })}
    </StyledTabs>
  )
}

export default HeaderTabs
