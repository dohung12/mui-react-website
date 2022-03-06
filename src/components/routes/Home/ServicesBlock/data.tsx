import customSoftwareIcon from '../../../../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../../../../assets/mobileIcon.svg'
import websiteAppsIcon from '../../../../assets/websiteIcon.svg'
import { SxProps } from '@mui/material'

interface Props {
  title: string
  desc: string[]
  image: string
  link: string
  style?: SxProps
}

const SERVICES_BLOCK: Props[] = [
  {
    title: 'Custom Software Development',
    desc: [
      'Save energy. Save time. Save money',
      ' Complete digital solutions, from investigation to celebration',
    ],
    link: '/custom-software',
    image: customSoftwareIcon,
    style: {
      justifyContent: { sx: 'center', md: 'flex-start' },
    },
  },
  {
    title: 'iOS/Android App Development',
    desc: [
      'Extend Functionality. Extend Access. Increase Engagement.',
      'Integrate your web experience or create a standalone app with either mobile platform.',
    ],
    link: '/mobile-apps',
    image: mobileAppsIcon,
  },
  {
    title: 'Website Development',
    desc: [
      ' Reach more. Discover more. Sell more',
      ' Optimize for Search Engines, built for speed.',
    ],
    link: '/websites',
    image: websiteAppsIcon,
  },
]

export default SERVICES_BLOCK
