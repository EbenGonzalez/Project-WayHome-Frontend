import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { deleteOwnPet } from '../../services/pet.services'
import { useNavigate } from 'react-router-dom'

function DeletePet({ pet }) {
  console.log(pet)
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      const result = await deleteOwnPet(pet.id)
      console.log(pet.id)
      if (result.state === 200) {

      }
    } catch (error) {
      console.log(error)
    }
    navigate('/perfil/misMascotas')
    handleClose()
  }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleOpen}>
        Borrar Mascota
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Esta seguro que desea borrar su mascota"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Asegurese de que esta es la mascota que desea borrar, esta accion es irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {handleClose(); handleSubmit()}}>Ok</Button>
          <Button onClick={handleClose} >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default DeletePet