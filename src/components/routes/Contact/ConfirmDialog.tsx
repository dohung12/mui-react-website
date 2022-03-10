import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  DialogActions,
  Button,
} from '@mui/material'
import { inputProps, openProps } from './interface'

type Props = inputProps & openProps

const FormConfirmationDialog = ({ input, setInput, open, setOpen }: Props) => {
  const handleClose = () => {
    setOpen(false)
  }

  const onChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { id, value } = event.currentTarget
    setInput({
      ...input,
      [id]: value,
    })
  }

  const emailValidation = (email: string) => {
    if (email !== '') {
      return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
    }
    return false
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md'>
      <DialogTitle>Confirm Message</DialogTitle>
      <DialogContent>
        <Grid
          container
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
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant='contained' onClick={handleClose}>
          Send Message
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormConfirmationDialog
