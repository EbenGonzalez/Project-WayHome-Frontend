import {useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'
import { Typography } from '@mui/material'
import { deleteUser } from '../../services/user.services'

function AdminDeleteUser() {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [userId, setUserId] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      
      const result = await deleteUser(userId)
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
        <DeleteIcon />
        <Typography>Borrar Usuario</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Eliminar Usuario</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField label="Id" fullWidth margin="normal"
              onChange={(e) => setUserId(e.target.value)} helperText="Introduzca la ID del usuario a eliminar"/>
            <Button type="submit" variant="contained" color="primary">
              Borrar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AdminDeleteUser