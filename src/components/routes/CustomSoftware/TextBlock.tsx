import React from 'react'
import { Grid, Typography } from '@mui/material'
interface Props {
  title: string
  paragraph: string[]
}

const TextBlock = ({ title, paragraph }: Props) => {
  return (
    <Grid
      item
      container
      direction='column'
      md={8}
      sx={{
        textAlign: 'justify',
      }}
    >
      <Grid item>
        <Typography variant='h4'> {title}</Typography>
      </Grid>
      <Grid item>
        {paragraph.map((element, index) => {
          return (
            <Typography key={index} variant='body1' paragraph>
              {element}
            </Typography>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default TextBlock
