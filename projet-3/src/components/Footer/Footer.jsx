import './Footer.css'
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Container, Typography, Button } from '@mui/material'

function Footer() {
  const elements = [
    {
      header: [
        <Link to="/contacto" key="contacto" className="footer-link">
          Contacto
        </Link>
      ],
      path: '/contacto',
      links: [<FacebookIcon />],
    },
    {
      header: [
        <Link to="/login" key="login" className="footer-link">
          Login
        </Link>
      ],
      path: '/login',
      links: [<YouTubeIcon />],
    },
    {
      header: [
        <Link to="/signup" key="signup" className="footer-link">
          Registrarse
        </Link>
      ],
      path: '/signup',
      links: [<InstagramIcon />],
    },
    {
      header: [
        <Link to="/quienesSomos" key="somos" className="footer-link">
          Quienes somos
        </Link>
      ],
      path: '/quienesSomos',
      links: [<LinkedInIcon />],
    },
  ]

  function generateFooterElements() {
    const footerElements = elements.map((column, columnIndex) => {
      return (
        <Grid key={columnIndex} item xs={12} md={3} textAlign="center">
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
    return footerElements;
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
          height: '20%',
        }}
      >
        <Container>
          <Grid container columnSpacing={3}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
      <Box
        textAlign={'center'}
        py={2}
        m={0}
        bgcolor="#118da0"
        color={'white'}
        sx={{
          bottom: 0,
          width: '100%',
          height: '8%',
        }}
      >
        <Typography>© Way Home 2023 - Todos los derechos reservados</Typography>
      </Box>
    </footer>
  )
}

export default Footer;