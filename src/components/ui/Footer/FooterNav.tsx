import React from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
  content: {
    name: string
    link: string
  }[][]
  socialMedia: {
    name: string
    img: string
    link: string
  }[]
}

const FooterNav = ({ content, socialMedia }: Props) => {
  return (
    <>
      <Grid
        container
        justifyContent='center'
        sx={{
          position: 'absolute',
          justify: 'center',
          display: { md: 'flex', xs: 'none' },
        }}
      >
        {content.map((column) => {
          return (
            <Grid key={column[0]['name']} item sx={{ margin: '3em' }}>
              <Grid container direction='column' spacing={2}>
                {column.map((element) => {
                  const { name, link } = element
                  return (
                    <Grid
                      key={name}
                      item
                      component={Link}
                      to={link}
                      sx={{
                        color: '#fff',
                        fontFamily: 'Arial',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                      }}
                    >
                      {name}
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          )
        })}
      </Grid>
      <Grid
        container
        justifyContent='flex-end'
        alignItems='center'
        spacing={2}
        sx={{
          position: 'absolute',
          marginTop: { md: '6em', sm: '4em', xs: '2em' },
          right: '1.5em',
          width: 'fit-content',
        }}
      >
        {socialMedia.map((element) => {
          const { name, link, img } = element
          return (
            <Grid
              key={name}
              item
              component={'a'}
              href={link}
              rel='noopener noreferrer'
              target='_blank'
            >
              <img
                src={img}
                alt={name}
                style={{
                  width: '4em',
                  height: '4em',
                }}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default FooterNav
