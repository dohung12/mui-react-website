import { Tab } from '@mui/material'
import { Link } from 'react-router-dom'

interface PropsType {
  label: string
  value: string
}

const StyledTab = ({ label, value }: PropsType) => (
  <Tab
    component={Link}
    label={label}
    value={value}
    to={value}
    sx={{ typography: 'tab', minWidth: 10, marginLeft: '25px' }}
  ></Tab>
)
export default StyledTab
