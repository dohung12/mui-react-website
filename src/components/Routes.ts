interface RouteLink {
  name: string
  link: string
}

export const MENU_OPTIONS: RouteLink[] = [
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

export function getRoutes(
  open?: boolean,
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
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

export function getRoutesLink() {
  const routes = getRoutes()
  return routes.reduce((initState, route) => {
    const { name, link } = route
    return [...initState, { name, link }]
  }, [] as RouteLink[])
}
