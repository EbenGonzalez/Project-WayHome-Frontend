import React, { useState } from 'react'
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'
import AdminAddUser from './AdminAddUser'
import AdminAddPet from './AdminAddPet'

const AdminPanel = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModalOpen = () => {
    setOpenModal(true)
  }

  const handleModalClose = () => {
    setOpenModal(false)
  }

  const handleButtonClick = () => {
    handleModalClose()
  }

  return (
    <Container style={{ marginTop: '20px' }} maxWidth="md">
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleModalOpen}>
            Panel de Control
          </Button>
          <Dialog open={openModal} onClose={handleModalClose} aria-labelledby="dialog-title">
            <DialogTitle id="dialog-title">Selecciona una opción</DialogTitle>
            <DialogContent>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <AdminAddUser />
                </Grid>
                <Grid item>
                  <AdminAddPet/>
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
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModalClose} color="primary">
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AdminPanel

