import { Tab } from '@mui/material'
import { Link } from 'react-router-dom'
interface PropsType {
  label: string
  value: string
  isCurrentTab: boolean
}

const StyledTab = ({ label, value, isCurrentTab }: PropsType) => (
  <Tab
    component={Link}
    label={label}
    value={value}
    to={value}
    sx={{
      typography: 'tab',
      minWidth: 10,
      marginLeft: '25px',
      opacity: 1,
      color: isCurrentTab ? 'secondary.main' : '#fff',
      ':hover': {
        color: 'black',
      },
    }}
  ></Tab>
)
export default StyledTab
