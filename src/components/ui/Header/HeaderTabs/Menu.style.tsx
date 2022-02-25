import { styled } from '@mui/material/styles'
import { Menu, MenuProps } from '@mui/material'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    keepMounted
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    '& .MuiMenuItem-root': {
      ...theme.typography.tab,
    },
  },
  '& .MuiMenu-list': {
    padding: 0,
  },
  '& .Mui-selected': {
    color: theme.palette.secondary.main,
  },
}))

export { StyledMenu }
