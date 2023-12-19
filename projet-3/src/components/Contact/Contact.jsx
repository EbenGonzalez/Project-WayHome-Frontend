import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { sendComment } from '../../services/comment.services'

export default function FormDialog({ pet }) {

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [receiver_id, setReceiver_id] = useState(pet.userId)

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const payload = {
        message,
        receiver_id

      }
      const result = await sendComment(payload)
      if (result === 200) {

      }
    } catch (error) {
      console.log(error)
    }
    handleClose()
  }

  return (
    <>
      <Button 
      variant="outlined" 
      onClick={handleClickOpen}
      >
        Contactar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contacta con la persona responsable del animal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Esta comunidad no se hace responsable de acuerdos entre personas a cambio de intereses económicos. Solo buscamos el bienestar de los animales...
          </DialogContentText>
          <TextareaAutosize
            aria-label="Escriba su mensaje"
            placeholder="Escriba su mensaje..."
            minRows={10}
            style={{ width: '100%' }}
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}