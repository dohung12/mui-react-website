import { Grid } from '@mui/material'
import CustomSoftwareBlock from './CustomSoftwareBlock'
import MobileAppsBlock from './MobileAppsBlock'
import WebsiteAppBlock from './WebsiteAppBlock'
const ServicesBlock = () => {
  return (
    <Grid item>
      <CustomSoftwareBlock />
      <MobileAppsBlock />
      <WebsiteAppBlock />
    </Grid>
  )
}

export default ServicesBlock
