import React from 'react'
import { Button, Container, Grid } from '@mui/material'
import AdminAddUser from './AdminAddUser'

const AdminPanel = () => {
  const handleButtonClick = () => {
  }

  return (
    <Container style={{ marginTop: '20px' }} maxWidth="md">
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <AdminAddUser/>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => handleButtonClick('Botón 2')}>
            Botón 2
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => handleButtonClick('Botón 3')}>
            Botón 3
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => handleButtonClick('Botón 4')}>
            Botón 4
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AdminPanel;
