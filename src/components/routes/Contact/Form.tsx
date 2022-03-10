import { Grid, TextField, Button } from '@mui/material'
import { Send } from '@mui/icons-material'
import { inputProps, openProps } from './interface'

const emailValidation = (email: string) => {
  if (email !== '') {
    return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
  }
  return false
}

type Props = inputProps & openProps

const Form = ({ input, setInput, setOpen }: Props) => {
  const onChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { id, value } = event.currentTarget
    setInput({
      ...input,
      [id]: value,
    })
  }

  return (
    <Grid
      item
      container
      md={8}
      component='form'
      direction='column'
      spacing={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid item sx={{ width: { md: '50%', xs: 'unset' } }}>
        <TextField
          fullWidth
          required
          id='name'
          label='Name'
          variant='standard'
          value={input.name}
          onChange={(event) => onChange(event)}
        />
      </Grid>
      <Grid item sx={{ width: { md: '50%', xs: 'unset' } }}>
        <TextField
          fullWidth
          required
          error={emailValidation(input.email)}
          id='email'
          label='Email'
          type='email'
          variant='standard'
          value={input.email}
          onChange={(event) => onChange(event)}
        />
      </Grid>
      <Grid item sx={{ width: { md: '50%', xs: 'unset' } }}>
        <TextField
          fullWidth
          id='phone'
          label='Phone'
          type={'number'}
          variant='standard'
          value={input.phone}
          onChange={(event) => onChange(event)}
        />
      </Grid>
      <Grid item sx={{ width: { md: '50%', xs: 'unset' } }}>
        <TextField
          fullWidth
          id='message'
          multiline
          rows={4}
          value={input.message}
          onChange={(event) => onChange(event)}
        />
      </Grid>
      <Grid item>
        <Button variant='contained' onClick={() => setOpen(true)}>
          Send Message <Send />
        </Button>
      </Grid>
    </Grid>
  )
}

export default Form
