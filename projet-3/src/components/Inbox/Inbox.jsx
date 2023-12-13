import './Inbox.css'
import React, { useState, useEffect } from 'react';
import { getInboxComments, updateComment } from '../../services/comment.services'
import Send from '../Send/Send';
import ActionAlerts from '../ActionAlert/ActionAlert';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'

import DeleteIcon from '@mui/icons-material/Delete';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Divider } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';

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

  const showMessages = () => {
    return comment.map(message => {
      return (
        <div key={message.id}>
          <div className='inbox'>
            <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
              {`Tienes un mensaje de ${message.user.firstName}`}
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
  const handleExitMessaging = () => {
    onClose();
  }

  return (
    <Dialog open={true} onClose={onClose}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Bandeja de Entrada" />
        <Tab label="Bandeja de Salida" />
      </Tabs>
      {value === 0 && (
        <div key={comment.id}>
          {showMessages()}
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