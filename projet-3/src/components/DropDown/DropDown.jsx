import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'

function FormDropdown() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    handleClose()
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Añadir Mascota
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nueva Mascota</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField label="Nombre" fullWidth margin="normal" />
            <TextField label="Edad" fullWidth margin="normal" />
            <TextField label="Genero" fullWidth margin="normal" />
            <TextField label="Tamaño" fullWidth margin="normal" />
            <TextField label="Raza" fullWidth margin="normal" />
            <TextField label="Informacion" fullWidth margin="normal" />
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormDropdown;
