import React from 'react'
import { Button, useTheme } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { Link } from 'react-router-dom'

interface Props {
  link: string
  style?: any
}

const LearnMoreButton = ({ link, style }: Props) => {
  const theme = useTheme()
  return (
    <Button
      variant='outlined'
      component={Link}
      to={link}
      sx={{
        ...style,
        borderWidth: 2,
        borderRadius: '50px',
        fontWeight: 'bold',
      }}
    >
      <span style={{ marginRight: 10 }}>Learn More</span>
      <ArrowForward
        sx={{
          width: '15px',
          height: '15px',
          color: theme.palette.primary.main,
        }}
      ></ArrowForward>
    </Button>
  )
}

export default LearnMoreButton
