import { Grid, Typography, SxProps } from '@mui/material'
interface Props {
  title: string
  paragraph: string[]
  xs?: number
  md?: number
  titleStyle?: SxProps
}

const TextBlock = ({ title, paragraph, xs, md, titleStyle }: Props) => {
  return (
    <Grid
      item
      container
      direction='column'
      xs={xs}
      md={md}
      sx={{
        textAlign: 'justify',
      }}
    >
      <Grid item>
        <Typography variant='h4' sx={{ ...titleStyle }}>
          {title}
        </Typography>
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
