import './DashBoard.css'
import { useEffect, useState } from 'react'
import { getOwnUser } from '../../services/user.services'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import InfoIcon from '@mui/icons-material/Info'
import FormDropdown from '../../components/DropDown/DropDown'
import { Link } from 'react-router-dom'
import UserDropdown from '../../components/DropDownUserUpdate/DropDownUserUpdate'
import Divider from '@mui/material/Divider'
import { display } from '@mui/system'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

function DashBoard() {
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { user } = await getOwnUser()
      setUser(user)
    }
    fetchData()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

      <Card sx={{
        margin: 'auto',
        marginTop: '200px',
        marginBottom: '100px',
        width: '100vh',
        boxShadow: "20",
        borderRadius: '10px',
        
      }}>


        <Avatar
          alt={`${user.firstName} ${user.lastName}`}
          src={user.profile}
          sx={{
            width: 250,
            height: 250,
            margin: 'auto',
            marginTop: '20px',
            border: '5px solid',
            borderColor: (theme) => theme.palette.primary.main,
          }} />

        <CardContent
          sx={{ textAlign: 'center' }}>
          <Grid
            container spacing={2}
            alignItems="center"
            justifyContent="center">

            <Grid item xs={12}>
              <Typography
                variant="h4"
                gutterBottom>
                {`${user.firstName} ${user.lastName}`}
              </Typography>
            </Grid>

            <div style={{ display: "block",}}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom>
                <LocationOnIcon />
                {`${user.location}`}
              </Typography>
            </Grid>

            <Grid item container alignItems="center" spacing={1}>
              <Grid item>
                <EmailIcon />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align='center'>
                  {user.email}
                </Typography>
              </Grid>
            </Grid>
            </div>

            <Grid item container alignItems="center" spacing={1} sx={{marginLeft: '365px'}}>
              <Grid item>
                <PhoneIcon />
              </Grid>
              <Grid item>
                <Typography 
                variant="body1" 
                align='center'>
                  {user.phone}
                  </Typography>
              </Grid>
            </Grid>
            
            <Grid item container alignItems="center" spacing={1}>
              <Grid item 
              sx={{ 
                borderRadius: '10px', 
                backgroundColor: '#e0e0e0', 
                boxShadow: '20',
                margin: '50px' }}>
                <Typography 
                variant="body1" 
                align='center' >
                  {/* <InfoIcon 
                  sx={{ color: "red" }} />  */}
                  <VolunteerActivismIcon/>
                  {user.info}
                  </Typography>
              </Grid>
            </Grid>

          </Grid>
        </CardContent>
        <FormDropdown />

        {/* <Link 
        to={'/perfil/misMascotas'} 
        style={{ 
          textDecoration: 'none', 
          display: 'flex', 
          marginTop: '10px', 
          textAlign: 'center' }}>
          <Button 
          type="button" 
          variant="contained" 
          sx={{ marginTop: '10px', }}>
            Mis Mascotas
          </Button>
        </Link> */}

        <UserDropdown user={user} />
      </Card>
    </div>
  )
}

export default DashBoard

