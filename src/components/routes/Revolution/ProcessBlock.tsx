import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Process } from './data'
import TextBlock from '../../ui/TextBlock'

const ProcessBlock = () => {
  return (
    <Grid item container>
      <Grid
        item
        sx={{
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography variant='h4'>Process</Typography>
      </Grid>
      {Process.map((element) => {
        const { title, paragraph, image, style } = element
        return (
          <Grid
            item
            container
            key={title}
            spacing={4}
            sx={{
              ...style,
              minHeight: '100vh',
              justifyContent: 'center',
              padding: { xs: '2rem', md: '5rem' },
              alignItems: 'center',
            }}
          >
            <Grid
              item
              container
              xs={12}
              md={8}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={image}
                alt={title}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </Grid>
            <TextBlock
              title={title}
              paragraph={paragraph}
              xs={12}
              md={4}
              titleStyle={{ color: '#111' }}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProcessBlock
