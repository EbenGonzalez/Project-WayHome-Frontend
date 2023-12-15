import './Footer.css'
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Pets as PetsIcon
} from '@mui/icons-material';

import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Grid, Container, Typography, Button } from '@mui/material'

function Footer() {
  const elements = [
    {
      header: 'Contacto',
      path: '/contacto',
      links: [<div><FacebookIcon/><InstagramIcon/><YouTubeIcon/></div>]
    },
    {
      header: 'Login',
      path: '/login',
      links: ['Registrarse']
    },
    {
      header: 'Quienes somos',
      path: '/quienesSomos',
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
          <Grid container columnSpacing={40}>
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