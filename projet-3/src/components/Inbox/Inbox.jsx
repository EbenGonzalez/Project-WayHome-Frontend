import './Inbox.css'
import Send from '../Send/Send';

import React, { useState, useEffect } from 'react';
import { getInboxComments, updateComment } from '../../services/comment.services'

import {
  Button,
  Divider,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography
} from '@mui/material';

import {
  Delete as DeleteIcon,
  Reply as ReplyIcon
} from '@mui/icons-material';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';


const Inbox = ({ onClose }) => {

  const [comment, setComment] = useState([])
  const [value, setValue] = useState(0);
  const [openReplyDialog, setOpenReplyDialog] = useState(false)
  const [answer, setAnswer] = useState(comment.answer)
  const [commentId, setCommentId] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await getInboxComments()
      setComment(result)
    }
    fetchData()
  }, [])

  const handleOpenReplyDialog = (commentId) => {
    setCommentId(commentId)
    setOpenReplyDialog(true);
  };

  const handleCloseReplyDialog = () => {
    setOpenReplyDialog(false);
    setAnswer('');
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const payload = {
        answer
      }
      const result = await updateComment(commentId, payload)
      if (result.status === 200) {

      }
    } catch (error) {
      console.log(error)
    }
    handleCloseReplyDialog()
  }

  const handleExitMessaging = () => {
    onClose();
  }

  const showMessages = () => {
    return comment.map(message => {
      return (
        <div key={message.id}>
          <div className='inbox'>
            <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
              {`Tienes un mensaje de ${message.user.firstName}`}
              <Typography sx={{ fontStyle: 'italic' }}>
                {message.user.email}
              </Typography>
              <Typography>{message.message}</Typography>
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={() => handleOpenReplyDialog(message.id)} >
                <ReplyIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Stack>
          </div>
          <Divider />
          <Dialog open={openReplyDialog} onClose={handleCloseReplyDialog}>
            <DialogTitle>{`Responder a ${message.user.firstName}`}</DialogTitle>
            <Divider />
            <DialogContent>
              <TextField
                sx={{ width: 500, height: 150 }}
                label="Respuesta"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseReplyDialog}>Cancelar</Button>
              <Button onClick={handleSubmit}>Enviar</Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    })
  }

  return (
    <Dialog open={true} onClose={onClose}>
      <Tabs
        value={value}
        onChange={handleChange}
        style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tab
          label="Tu mascota tiene un nuevo amigo" />
        <Tab
          label="Tus conversaciones"
          style={{ marginLeft: '30px', marginRight: '10px' }} />
      </Tabs>
      {value === 0 && (
  <div key={comment.id}>
    {comment.length > 0 ? (
      showMessages()
    ) : (
      <Typography sx={{ textAlign: 'center', margin: 'auto' }}>
        No tiene mensajes nuevos
      </Typography>
    )}
  </div>
)}
      {value === 1 && (
        <div>
          <Send />
        </div>
      )}
      <Button onClick={handleExitMessaging}>
        Salir de mensajería
      </Button>
    </Dialog>
  );
};

export default Inbox;