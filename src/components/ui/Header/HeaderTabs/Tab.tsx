import { Tab } from '@mui/material'
import { Link } from 'react-router-dom'
interface PropsType {
  label: string
  value: string
  isCurrentTab: boolean
  ariaControl?: string
  ariaHasPopUp?: 'true' | undefined
  ariaExpanded?: 'true' | undefined
  mouseOver?: any
}

const StyledTab = ({
  label,
  value,
  isCurrentTab,
  ariaControl,
  ariaHasPopUp,
  ariaExpanded,
  mouseOver,
}: PropsType) => {
  return (
    <Tab
      component={Link}
      aria-controls={ariaControl}
      aria-haspopup={ariaHasPopUp}
      aria-expanded={ariaExpanded}
      onMouseOver={mouseOver}
      label={label}
      value={value}
      to={value}
      sx={{
        typography: 'tab',
        minWidth: 10,
        marginLeft: '25px',
        color: isCurrentTab ? 'secondary.main' : '#fff',
        opacity: isCurrentTab ? 1 : 0.7,
        ':hover': {
          opacity: 1,
        },
      }}
    ></Tab>
  )
}
export default StyledTab
