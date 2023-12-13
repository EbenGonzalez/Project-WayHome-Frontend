import './Send.css'

import React, { useState, useEffect } from 'react';
import { deleteOwnComment, getSendComments } from '../../services/comment.services'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';

function Send() {

  const [commentSend, setCommentSend] = useState([])
  const [deleteComment, setDeleteComment] = useState('')

  // const [openReplyDialog, setOpenReplyDialog] = useState(false)
  // const [replyMessage, setReplyMessage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSendComments()
      setCommentSend(result)
    }
    fetchData()
  }, [])

  const handleOpenReplyDialog = (deleteComment) => {
    setDeleteComment(deleteComment)
    // setOpenReplyDialog(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const result = await deleteOwnComment(deleteComment)
      if (result.status === 200) {
        
      }
    } catch (error) {
      console.log(error)
    
    }

  }

  const showSendMessages = () => {
    return commentSend.map(message => {
      return (
        <div key={message.id}>
          <div className='send'>
            <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
              {`Has enviado un mensaje a ${message.receiver_id}`}
              <Typography>{message.message}</Typography>
            </Typography>
            <Stack direction="row" spacing={1} >
              
              <IconButton onClick={handleSubmit} >
                <DeleteIcon />
              </IconButton>
            
            </Stack>
          </div>
          <Divider />
        </div>

      )
    })
  }


  return (
    <>
      {showSendMessages()}
    </>
  )
}

export default Send