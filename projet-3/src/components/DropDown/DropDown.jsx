import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { createOwnPet } from '../../services/pet.services'
import { Navigate } from 'react-router-dom'


function FormDropdown() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [gender, setGender] = useState()
  const [size, setSize] = useState()
  const [info, setInfo] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const payload = {
        name,
        age,
        gender,
        size,
        info
      }
      const result = await createOwnPet(payload)
      if (result === 200) {
        Navigate('/perfil')
      }
    } catch (error) {
      console.log(error)
    }
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
            <TextField label="Nombre" fullWidth margin="normal"
              onChange={(e) => setName(e.target.value)} />
            <TextField label="Edad" fullWidth margin="normal"
              onChange={(e) => setAge(e.target.value)} />
            <TextField label="Genero" fullWidth margin="normal"
              onChange={(e) => setGender(e.target.value)} />
            <TextField label="Tamaño" fullWidth margin="normal"
              onChange={(e) => setSize(e.target.value)} />
            <TextField label="Informacion" fullWidth margin="normal"
              onChange={(e) => setInfo(e.target.value)} />
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default FormDropdown
