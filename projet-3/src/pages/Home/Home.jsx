import './Home.css'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div className='home'>
      <div>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?cat)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: "100vh",
          width:"50vw",
          '@media (max-width: 900px)': {
            width: '100vh', 
            height:'50vh'
          },
        }}
        
      />
      </div>
      <div>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?dog)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: "100vh",
          width: "50vw",
          '@media (max-width: 900px)': {
            width: '100vh', 
            height:'50vh'
          },
        }}
      />
      </div>
    </div>
  )
}

export default Home