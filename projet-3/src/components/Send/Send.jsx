import './Send.css'

import React, { useState, useEffect } from 'react';
import { deleteOwnComment, getSendComments } from '../../services/comment.services'

import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';

function Send() {

  const [commentSend, setCommentSend] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSendComments()
      setCommentSend(result)
    }
    fetchData()
  }, [])

  const handleSubmit = async (event, deleteComment) => {
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

              <IconButton onClick={()=>handleSubmit(event,message.id)} >
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