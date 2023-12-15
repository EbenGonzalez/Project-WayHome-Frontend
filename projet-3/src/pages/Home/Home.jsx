import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const Home = () => {
  const handleMouseEnter = (event) => {
    event.currentTarget.style.filter = 'brightness(70%)'
    event.currentTarget.querySelector('.image-text').style.color = '#FFF'
  }

  const handleMouseLeave = (event) => {
    event.currentTarget.style.filter = 'brightness(100%)'
    event.currentTarget.querySelector('.image-text').style.color = 'transparent'
  }

  return (
    <div className='home'>
      <Grid container spacing={0}>
      
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              height: '80vh',
              width: '100%',
              backgroundImage: 'url(https://source.unsplash.com/random?cat)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transition: 'filter 0.3s ease-in-out',
              '&:hover': {
                filter: 'brightness(70%)',
                '& .image-text': {
                  color: '#FFF',
                },
              },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to='/adopcion'>
            <Typography className='image-text' sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
             color: 'transparent', transition: 'color 0.3s ease-in-out',fontSize: '1.5em', fontWeight: 'bold' }}>
              Adóptame
            </Typography>
            </Link>
          </Box>
         </Grid>
       
        
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              height: '80vh',
              width: '100%',
              backgroundImage: 'url(https://source.unsplash.com/random?dog)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transition: 'filter 0.3s ease-in-out',
              '&:hover': {
                filter: 'brightness(70%)',
                '& .image-text': {
                  color: '#FFF',
                },
              },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to='/acogida'>
            <Typography className='image-text' sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
             color: 'transparent', transition: 'color 0.3s ease-in-out',fontSize: '1.5em', fontWeight: 'bold' }}>
              Acógeme
            </Typography>
            </Link>
          </Box>
        </Grid>
       
      </Grid>
    </div>
  )
}

export default Home;
