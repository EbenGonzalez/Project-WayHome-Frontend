import { useEffect, useState } from 'react'
import { createUser, getAllUsers } from '../../services/user.services'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import EditIcon from '@mui/icons-material/Edit'
import { Typography } from '@mui/material'

function AdminAddUser() {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [user, setUser] = useState([])
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")

  useEffect(() => {
    const fetchUser = async () => {
      const result = await getAllUsers()
      setUser(result)
    }
    fetchUser()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const payload = {
        firstName,
        lastName,
        email,
        password
      }
      const result = await createUser(payload)
      if (result === 200) {

      }
    } catch (error) {
      console.log(error)
    }
    handleClose()
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Button variant="contained" onClick={handleOpen} sx={{ marginBottom: '40px' }} >
        <EditIcon />
        <Typography>Añadir Usuario</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crear Nuevo Usuario</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField label="Nombre" fullWidth margin="normal"
              onChange={(e) => setFirstName(e.target.value)} />
            <TextField label="Apellido" fullWidth margin="normal"
              onChange={(e) => setLastName(e.target.value)} />
            <TextField label="Email" fullWidth margin="normal"
              onChange={(e) => setEmail(e.target.value)} />
              <TextField label="Password" fullWidth margin="normal"
              onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" variant="contained" color="primary">
              Crear
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AdminAddUser