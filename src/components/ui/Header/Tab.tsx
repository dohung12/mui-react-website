import { Tab } from '@mui/material'
import { Link } from 'react-router-dom'
interface PropsType {
  label: string
  value: string
  isCurrentTab: boolean
  ariaControl?: string
  ariaHasPopUp?: 'true' | undefined
  mouseOver?: any
}

const StyledTab = ({
  label,
  value,
  isCurrentTab,
  ariaControl,
  ariaHasPopUp,
  mouseOver,
}: PropsType) => (
  <Tab
    component={Link}
    aria-controls={ariaControl}
    aria-haspopup={ariaHasPopUp}
    aria-expanded={Boolean(ariaControl) ? 'true' : undefined}
    onMouseOver={mouseOver}
    // onClick={mouseOver}
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
