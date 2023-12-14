import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PetsIcon from '@mui/icons-material/Pets';

import React from 'react'

import { Box, Grid, Container, Typography, Button } from '@mui/material'

function Footer() {
  const elements = [
    {
      header: 'Contacto',
      links: [<div><FacebookIcon/><InstagramIcon/><YouTubeIcon/></div>]
    },
    {
      header: 'Login',
      links: ['Registrarse']
    },
    {
      header: 'Quienes somos',
      links: [<div><LinkedInIcon/><GitHubIcon/><PetsIcon/></div>]
    }
  ]

  function generateFooterElements() {
    const footerElements = elements.map((column, columnIndex) => {
      return (
        <Grid key={columnIndex} item xs={12} md={4}>
          <Box borderBottom={1}>
            <Button sx={{ color: 'white', fontWeight: 'bold' }}>
              {column.header}
            </Button>
          </Box>
          {column.links.map((link, linkIndex) => {
            return (
              <Box key={linkIndex}>
                <Button sx={{ color: 'white' }}>{link}</Button>
              </Box>
            )
          })}
        </Grid>
      )
    })
    return footerElements
  }

  return (
    <footer>
      <Box  
      textAlign={'center'}
      component="footer"
      bgcolor="primary.main"
      color="white"
      py={2}
      sx={{
       
        bottom: 0,
        width: '100%',
        height: '20%'
      }}>
        <Container>
          <Grid container columnSpacing={10}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
      <Box textAlign={'center'} 
      py={2} m={0} 
      bgcolor='#118da0' 
      color={'white'} 
      sx={{
        
        bottom: 0,
        width: '100%',
        height: '8%'
      }}>
        <Typography>© Way Home 2023 - Todos los derechos reservados</Typography>
      </Box>
    </footer>
  )
}

export default Footer