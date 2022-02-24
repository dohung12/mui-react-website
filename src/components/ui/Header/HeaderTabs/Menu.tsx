import { StyledMenu } from './Menu.style'
import { MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'

interface MenuOption {
  name: string
  link: string
}

interface Props {
  id: string
  menuOptions: MenuOption[]
  anchorEl: HTMLElement | null
  open: boolean
  handleClose: () => void
  currentTab: string | undefined
}

const TabsMenu = ({
  id,
  anchorEl,
  open,
  handleClose,
  menuOptions,
  currentTab,
}: Props) => {
  return (
    <StyledMenu
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
        onMouseLeave: handleClose,
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
            selected={currentTab === link}
          >
            {name}
          </MenuItem>
        )
      })}
    </StyledMenu>
  )
}

export default TabsMenu
