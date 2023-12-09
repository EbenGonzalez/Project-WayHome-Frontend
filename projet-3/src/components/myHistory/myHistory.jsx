import React from 'react';
import { Box, Typography } from '@mui/material';

function MyHistory({history}) {
  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        padding: 2,
        borderRadius: 8,
        boxShadow: 3,
        display: 'flex',
        justifyContent: 'space-between',
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
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Image 1"
          style={{ borderRadius: '50%', marginBottom: 10 }}
        />
        <Typography variant="h6" gutterBottom>
         {history.pet.name}
        </Typography>
        <Typography variant="body2">
          Some information about Box 1.
        </Typography>
      </Box>

      {/* Box 2 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Image 2"
          style={{ borderRadius: '50%', marginBottom: 10 }}
        />
        <Typography variant="h6" gutterBottom>
          Box 2 Title
        </Typography>
        <Typography variant="body2">
          Some information about Box 2.
        </Typography>
      </Box>
      </>:
      <h1>
        Loading
      </h1>
      }
    </Box>
  )
  
}

export default MyHistory