import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { updatePet, getRaces } from '../../services/pet.services'
import EditIcon from '@mui/icons-material/Edit'
import { Typography } from '@mui/material'

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

const roles = [
  {
    value: "Free",
    label: "Mascota",
  },
  {
    value: "Embrace",
    label: "Acogida",
  },
  {
    value: "Adoption",
    label: "Adopcion",
  },

]

function AdminUpdatePet() {
  const [open, setOpen] = useState(false)
  const [allRaces, setAllRaces] = useState([])
  const [allRacesData, setAllRacesData] = useState([])

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const datosRaza = await getRaces()
        setAllRacesData(datosRaza)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSpecies()
  }, [])

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
  const [raceId, setRace] = useState()
  const [petId, setPetId] = useState()

  useEffect(() => {
    if (speciesId === 1) {
      const tipoEspecie = allRacesData.filter((option) => option.speciesId === 1)
      setAllRaces(tipoEspecie)
    }
    if (speciesId === 2) {
      const tipoEspecie = allRacesData.filter((option) => option.speciesId === 2)
      setAllRaces(tipoEspecie)
    }
  }, [speciesId, allRacesData])


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
      const result = await updatePet(petId, payload)
      if (result.state === 200) {

      }
    } catch (error) {
      console.log(error)
    }
    handleClose()
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Button variant="contained" onClick={handleOpen} sx={{ marginBottom: '40px' }} >
        <EditIcon />
        <Typography>Editar Mascota</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Mascota</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField label="ID" fullWidth margin="normal"
              onChange={(e) => setPetId(e.target.value)} helperText="ID de la mascota a actualizar" />
            <TextField label="Nombre" fullWidth margin="normal"
              onChange={(e) => setName(e.target.value)} />
            <TextField label="Edad" fullWidth margin="normal" type='number'
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
              defaultValue=""
              helperText="Elige una especie"
              onChange={(e) => setSpeciesId(e.target.value)}
            >
              {especie.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField fullWidth margin="normal"
              id="outlined-select-currency"
              select
              label="Raza"
              defaultValue=""
              helperText="Elige una raza"
              onChange={(e) => setRace(e.target.value)}
            >
              {allRaces.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField label="Informacion" fullWidth margin="normal"
              onChange={(e) => setInfo(e.target.value)} />
            <TextField fullWidth margin="normal"
              id="outlined-select-currency"
              select
              label="Role"
              defaultValue="Free"
              helperText="Elige una opcion para tu mascota"
              onChange={(e) => setRole(e.target.value)}
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button type="submit" variant="contained" color="primary">
              Actualizar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AdminUpdatePet