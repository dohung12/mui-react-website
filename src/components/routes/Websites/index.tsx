import React from 'react'
import { Introduction, Solutions } from './data'
import { Grid, Typography } from '@mui/material'
import TextBlock from '../CustomSoftware/TextBlock'

const Websites = () => {
  return (
    <Grid
      container
      direction='column'
      spacing={4}
      sx={{
        padding: { xs: '2rem', md: '5rem' },
      }}
    >
      {/* Page title */}
      <Grid item>
        <Typography
          variant='h2'
          sx={{
            alignItems: { xs: 'center', md: 'unset' },
          }}
        >
          Website Development
        </Typography>
      </Grid>
      {/* Introduction */}
      <Grid
        item
        md={8}
        sx={{
          textAlign: 'justify',
        }}
      >
        {Introduction.map((element, index) => {
          return (
            <Typography key={index} variant='body1' paragraph>
              {element}
            </Typography>
          )
        })}
      </Grid>
      {/* Solutions Block */}
      <Grid
        item
        container
        spacing={8}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '32px', md: 0 },
        }}
      >
        {Solutions.map((element, index) => {
          const { title, paragraph, image } = element
          return (
            <Grid item container key={index} spacing={4}>
              <TextBlock
                key={index}
                title={title}
                paragraph={paragraph}
              ></TextBlock>
              <Grid
                item
                md={4}
                container
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img src={image} alt={title} />
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default Websites
