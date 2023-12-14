import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'
import { fire } from "../../services/firebase.service"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { updateOwnUser } from '../../services/user.services'


const roles = [
  {
    value: "user",
    label: "Usuario",
  },
  {
    value: "volunteer",
    label: "Voluntario",
  }
]

function UserDropdown({user}) {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [info, setInfo] = useState(user.info)
  const [userRole, setUserRole] = useState("user")
  const [profile, setProfile] = useState("")
  const [location, setLocation] = useState(user.location)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {

      let imageUrl = ''
      if (profile) {
        const storage = getStorage(fire)
        const storageRef = ref(storage, 'profile/' + profile.name)
        await uploadBytes(storageRef, profile)
        imageUrl = await getDownloadURL(storageRef)
      }

      const payload = {
        firstName,
        lastName,
        email,
        phone,
        info,
        profile:imageUrl,
        location,
        userRole
      }
      const result = await updateOwnUser(payload)
      if (result === 200) {

      }
    } catch (error) {
      console.log(error)
    }
    navigate('/perfil')
    handleClose()
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Editar Perfil
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Perfil</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField label="Nombre" fullWidth margin="normal"
              onChange={(e) => setFirstName(e.target.value)} />
            <TextField label="Apellido" fullWidth margin="normal"
              onChange={(e) => setLastName(e.target.value)} />
            <TextField label="Email" fullWidth margin="normal"
              onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Telefono" fullWidth margin="normal"
              onChange={(e) => setPhone(e.target.value)} />
              <TextField label="Localidad" fullWidth margin="normal"
              onChange={(e) => setLocation(e.target.value)} />
            <TextField label="Sobre Mi" fullWidth margin="normal"
              onChange={(e) => setInfo(e.target.value)} />
            <TextField fullWidth margin="normal"
              id="outlined-select-currency"
              select
              label="Role"
              defaultValue="user"
              helperText="Elige un rol"
              onChange={(e) => setUserRole(e.target.value)}
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField label="" fullWidth margin="normal" type='file' helperText="Seleccionar una imagen de perfil"
              onChange={(e) => e.target.files[0] && setProfile(e.target.files[0])} />
            <Button type="submit" variant="contained" color="primary">
              Actualizar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UserDropdown
