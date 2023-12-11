import './DashBoard.css'
import { useEffect, useState } from 'react'
import { getOwnUser, updateOwnUser } from '../../services/user.services'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import FormDropdown from '../../components/DropDown/DropDown'
import { Navigate } from 'react-router-dom'

function DashBoard() {
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { user } = await getOwnUser()
      setUser(user)
    }
    fetchData()
  }, [])
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [info, setInfo] = useState(user.info)
  const [location, setLocation] = useState(user.location)

  const handleClick = async () => {
    try {
      const payload = {
        firstName,
        lastName,
        email,
        phone,
        info,
        location
      }

      const result = await updateOwnUser(payload);
      if (result === 200) {
        Navigate('/perfil')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Card>
        {/* Imagen de fondo */}
        <div style={{ height: '200px', backgroundImage: 'url("/path/to/background-image.jpg")', backgroundSize: 'cover' }} />

        {/* Contenido del perfil */}
        <CardContent>
          <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ marginBottom: '20px' }}>
            {/* Foto de perfil a la izquierda */}
            <Grid item>
              <Avatar alt={user.firstName} src="/path/to/avatar.jpg" sx={{ width: 200, height: 200 }} />
            </Grid>

            {/* Información del perfil a la derecha */}
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                {/* Nombre y más información */}
                <Grid item>
                  <Typography variant="h5">{user.firstName}</Typography>
                  <Typography variant="body1" color="textSecondary">{user.info}</Typography>
                </Grid>

                {/* Campos para actualizar información */}
                <Grid item container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nombre"
                      fullWidth
                      margin="normal"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Apellido"
                      fullWidth
                      margin="normal"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      fullWidth
                      margin="normal"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="filled-helperText"
                      label="Telefono"
                      defaultValue={phone}
                      fullWidth
                      margin="normal"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Poblacion"
                      fullWidth
                      margin="normal"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Info"
                      fullWidth
                      margin="normal"
                      onChange={(e) => setInfo(e.target.value)}
                    />
                  </Grid>
                  <>
                  <FormDropdown />
                  </>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Botones para actualizar y otros controles */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={handleClick} variant="contained" color="primary" style={{ marginRight: '10px' }}>
                Guardar Cambios
              </Button>
              <Button variant="outlined" color="primary">
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

export default DashBoard

