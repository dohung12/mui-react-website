import React from 'react'
import { Grid } from '@mui/material'
import Lottie from 'react-lottie-player'
import TextBlock from './TextBlock'
import { SOLUTIONS_DATA } from './data'

const SolutionsBlock = () => {
  return (
    <>
      {SOLUTIONS_DATA.map((element, index) => {
        const { title, paragraph, animation } = element
        return (
          <Grid key={index} item container>
            <TextBlock title={title} paragraph={paragraph} />
            <Grid
              item
              container
              md={4}
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Lottie
                loop
                animationData={animation}
                play
                style={{ width: 150, height: 150 }}
              />
            </Grid>
          </Grid>
        )
      })}
    </>
  )
}

export default SolutionsBlock
