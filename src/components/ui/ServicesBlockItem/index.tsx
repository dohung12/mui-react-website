import React from 'react'
import { Grid, Typography, SxProps } from '@mui/material'
import LearnMoreButton from '../LearnMoreBtn'

interface Props {
  title: string
  desc: string[]
  image: string
  link: string
  style?: SxProps
}

const ServicesBlockItem = ({ title, desc, image, link, style }: Props) => {
  return (
    <Grid
      item
      container
      sx={{
        ...style,
        width: '100%',
        paddingLeft: { xs: 0, md: '5rem' },
        justifyContent: { xs: 'center', md: 'unset' },
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'unset' },
      }}
    >
      <Grid
        xs={12}
        md={6}
        item
        container
        sx={{
          flexDirection: 'column',
          textAlign: { xs: 'center', md: 'start' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Grid item>
          <Typography variant='h4'>{title}</Typography>
        </Grid>
        <Grid item>
          {desc.map((element, index) => {
            return (
              <Typography key={index} variant='subtitle1'>
                {element}
              </Typography>
            )
          })}
        </Grid>
        <LearnMoreButton link={link} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={image} alt={title + 'icon'} />
      </Grid>
    </Grid>
  )
}

export default ServicesBlockItem
