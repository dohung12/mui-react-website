import React, { useState } from 'react'
import { Grid } from '@mui/material'
import InformationBlock from './InformationBlock'
import Form from './Form'
import FormConfirmationDialog from './ConfirmDialog'

const initState = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const Contact = () => {
  const [input, setInput] = useState(initState)
  const [open, setOpen] = useState(false)
  return (
    <Grid
      container
      sx={{
        padding: { xs: '2rem', md: '5rem' },
      }}
    >
      <InformationBlock />
      <Form input={input} setInput={setInput} open={open} setOpen={setOpen} />
      <FormConfirmationDialog
        input={input}
        setInput={setInput}
        open={open}
        setOpen={setOpen}
      />
    </Grid>
  )
}

export default Contact
