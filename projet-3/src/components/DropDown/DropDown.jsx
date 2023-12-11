import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { createOwnPet } from '../../services/pet.services'
import { Navigate } from 'react-router-dom'

const genero = [
  {
    value: 'Masculino',
    label: 'Macho',
  },
  {
    value: 'Femenino',
    label: 'Hembra',
  }
]

const tamaño = [
  {
    value: 'Pequeño',
    label: 'Pequeño',
  },
  {
    value: 'Mediano',
    label: 'Mediano',
  },
  {
    value: 'Grande',
    label: 'Grande',
  }
]

const especie = [
  {
    value: 1,
    label: 'Perro',
  },
  {
    value: 2,
    label: 'Gato',
  },
  
]

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
  const [role, setRole] = useState()
  const [speciesId, setSpeciesId] = useState()
  const [raceId, setRaceId] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const payload = {
        name,
        age,
        gender,
        size,
        info,
        role,
        speciesId,
        raceId
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
            <TextField fullWidth margin="normal"
              id="outlined-select-currency"
              select
              label="Genero"
              defaultValue="Masculino"
              helperText="Selecciona el genero"
              onChange={(e) => setGender(e.target.value)}
            >
              {genero.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField fullWidth margin="normal"
              id="outlined-select-currency"
              select
              label="Tamaño"
              defaultValue="Pequeño"
              helperText="Elige un tamaño"
              onChange={(e) => setSize(e.target.value)}
            >
              {tamaño.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField fullWidth margin="normal"
              id="outlined-select-currency"
              select
              label="Especie"
              defaultValue="1"
              helperText="Elige una especie"
              onChange={(e) => setSpeciesId(e.target.value)}
            >
              {especie.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
