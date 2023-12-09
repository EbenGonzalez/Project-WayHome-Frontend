import './DashBoard.css'
import { useEffect, useState } from 'react';
import { getOwnUser } from '../../services/user.services';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function DashBoard() {

  const [user, setUser] = useState({})
  console.log(user)

  useEffect(() => {
    const fetchData = async () => {
      const {user} = await getOwnUser()
      setUser(user)
    }
    fetchData()
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Altura completa de la ventana
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
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Apellido"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
                  <Grid item xs={12}>
                    <TextField
                      label="Ubicación"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Botones para actualizar y otros controles */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
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

