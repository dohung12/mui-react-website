import { Grid, useMediaQuery, useTheme } from '@mui/material'

import SERVICES_BLOCK from './data'
import ServicesBlockItem from '../../../ui/ServicesBlockItem'

const ServicesBlock = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Grid
      item
      container
      rowSpacing={matches ? 4 : 0}
      sx={{
        flexDirection: 'column',
        marginTop: '12rem',
        width: '100vw',
        rowGap: '4rem',
      }}
    >
      {SERVICES_BLOCK.map((element) => {
        const { title, desc, image, link } = element
        return (
          <ServicesBlockItem
            key={title}
            title={title}
            desc={desc}
            image={image}
            link={link}
          />
        )
      })}
    </Grid>
  )
}

export default ServicesBlock
