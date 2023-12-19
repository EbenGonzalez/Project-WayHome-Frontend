import {useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import EditIcon from '@mui/icons-material/Edit'
import { Typography } from '@mui/material'
import { deletePet } from '../../services/pet.services'


function AdminDeletePet() {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [petId, setPetId] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      
      const result = await deletePet(petId)
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
        <Typography>Borrar Mascota</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Eliminar Mascota</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField label="Id" fullWidth margin="normal"
              onChange={(e) => setPetId(e.target.value)} helperText="Introduzca la ID de la mascota a eliminar"/>
            <Button type="submit" variant="contained" color="primary">
              Borrar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AdminDeletePet