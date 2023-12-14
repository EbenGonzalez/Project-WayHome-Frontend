import React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

function MyHistory({ history }) {
  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        margin:"20px",
        padding: 5,
        borderRadius:4,
        boxShadow: 3,
        display: 'block',
        justifyContent: 'space-between',
        width: "300px",
        height:"1200px",
        overflow: 'hidden', // Añadir overflow: hidden
      }}
    >
      {Object.keys(history).length !== 0 ?
        <>
          {/* Box 1 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              overflow: 'hidden',
              marginBottom: 2, // Añadir margen inferior
            }}
          >
            <img
              src="https://source.unsplash.com/random?dog"
              alt="Image 1"
              style={{
                borderRadius: '5%',
                marginBottom: 10,
                width: "300px",
                height:"250px"
              }}
            />
            <Typography variant="h6" gutterBottom sx={{ overflowWrap: 'break-word' }}>
              {history.pet.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {`${history.pet.age} años`}
            </Typography>
            <Typography variant="body2" sx={{ overflowWrap: 'break-word' }}>
              {history.pet.info}
            </Typography>
          </Box>

         
          {/* Box 2 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              overflow: 'hidden',
              marginTop: 5, // Añadir margen superior
            }}
          >
            <img
              src="https://source.unsplash.com/random?person"
              alt="Image 2"
              style={{ 
                borderRadius: '5%', 
                marginBottom: 10,
                width: "250px",
                height:"250px" }}
            />
            <Typography variant="h6" gutterBottom sx={{ overflowWrap: 'break-word' }}>
              {history.user.firstName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {history.user.location}
            </Typography>
            <Typography variant="body2" sx={{ overflowWrap: 'break-word' }}>
              {history.user.info}
            </Typography>
          </Box>
        </> :
        <h1>
          Loading
        </h1>
      }
    </Box>
  )

}

export default MyHistory