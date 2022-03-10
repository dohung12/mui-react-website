export interface inputProps {
  input: {
    name: string
    email: string
    phone: string
    message: string
  }
  setInput: React.Dispatch<
    React.SetStateAction<{
      name: string
      email: string
      phone: string
      message: string
    }>
  >
}

export interface openProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
