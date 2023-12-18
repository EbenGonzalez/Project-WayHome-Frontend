import { Card, CardContent, CardMedia, Typography, Grid, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import './QuienesSomos.css';

function QuienesSomos() {
  const teamMembers = [
    { name: 'ROBER', image: 'https://firebasestorage.googleapis.com/v0/b/proyecto3-1af75.appspot.com/o/profile%2FIMG_1638%20(1).JPG?alt=media&token=dd595106-78cb-428a-9912-127640f0ce5d', github: 'URL_GITHUB_ROBER' },
    { name: 'EBEN', image: 'URL_IMAGEN_EBEN', github: 'URL_GITHUB_EBEN' },
    { name: 'CHRISTIAN', image: 'URL_IMAGEN_CHRISTIAN', github: 'URL_GITHUB_CHRISTIAN' }
  ];

  return (
    <>
      <header className='header'>
        <h2>Bienvenido a WAY-HOME</h2>
      </header>
      <div id='principal'> 
        <section className='sectionQuienesSomos'>
          <h3>Historia de la Empresa</h3>
          <Typography variant="body2" color="text.secondary" style={{ fontSize:"18px",backgroundColor: '#e0e0e0', width: '100%', padding: '15px',borderRadius: '12px 12px 12px 12px'}}>
            <p>
              En <b>WAY-HOME</b>, nos apasiona conectar a animales necesitados con hogares amorosos. Fundada en 2023, nuestra plataforma ha sido un lugar de encuentro para dueños de mascotas que buscan el mejor cuidado para sus amigos peludos.
            </p>
          </Typography>
        </section>
        <section className='sectionQuienesSomos'>
          <h3>Misión y Visión</h3>
          <Typography variant="body2" color="text.secondary" style={{ fontSize:"18px", backgroundColor: '#e0e0e0', width: '100%', padding: '15px',borderRadius: '12px 12px 12px 12px' }}>
          <p><strong>Misión:</strong> Facilitar la adopción y acogida temporal de perros y gatos, creando un espacio donde los dueños encuentren soluciones amorosas y temporales para sus mascotas.</p>
          <p><strong>Visión:</strong> Ser el puente que une a los amantes de los animales, proporcionando un ambiente de confianza y apoyo para todas las criaturas peludas.</p>
          </Typography>
        </section>
        <h3>Equipo</h3>
      </div>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {teamMembers.map((member, index) => (
            <Grid key={index} item xs={4} sm={3} md={2} textAlign="center">
              <Card sx={{ borderRadius: '12px', textAlign: 'center', margin: "25px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  width="140"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    borderRadius: '12px 12px 0 0',
                    objectFit: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <CardContent>
                  <Typography variant="body2" component="div">
                    {member.name}
                  </Typography>
                  <IconButton aria-label="GitHub" href={member.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default QuienesSomos;