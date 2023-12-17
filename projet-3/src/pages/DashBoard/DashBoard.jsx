import './DashBoard.css'
import { getOwnUser } from '../../services/user.services'
import FormDropdown from '../../components/DropDown/DropDown'
import UserDropdown from '../../components/DropDownUserUpdate/DropDownUserUpdate'

import { useEffect, useState } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PetsIcon from '@mui/icons-material/Pets';

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
        marginTop: '150px',
        marginBottom: '100px',
        width: '800px',
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

            <Box sx={{ height: 0 }} />
            <Divider sx={{ width: '400px' }} />


            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom>
                <LocationOnIcon color='primary' /> <br />
                {`${user.address}, ${user.location}`}
              </Typography>
            </Grid>

            <Box sx={{ height: 0 }} />
            <Divider sx={{ width: '400px' }} />

            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom>
                <PetsIcon color='primary' /> <br />
                {user.userRole === 'volunteer' ? (user.gender === 'Mujer' ? 'Voluntaria' : 'Voluntario') : 'Usuario'}
              </Typography>
            </Grid>

            <Box sx={{ height: 0 }} />
            <Divider sx={{ width: '400px' }} />

            <Grid item xs={12}>
              <Typography
                variant="body1"
                gutterBottom>
                <EmailIcon color='primary' /> <br />
                {user.email}
              </Typography>
            </Grid>

            <Box sx={{ height: 26 }} />
            <Divider sx={{ width: '400px' }} />

            <Grid item xs={12}>
              <Typography
                variant="body1"
                gutterBottom>
                <PhoneIcon color='primary' /> <br />
                {user.phone}
              </Typography>
            </Grid>
            <Divider sx={{ width: '400px' }} />

            <Grid item xs={12} container justifyContent="center">
              <Grid item xs={6}
              sx={{
                borderRadius: '10px',
                backgroundColor: '#e0e0e0',
                boxShadow: '20',
                margin: '30px',
                padding: "10px"
              }}>
                <Typography variant="body1" align="center">
                  <VolunteerActivismIcon color='primary' /> <br />
                  {user.info}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <FormDropdown />

        <UserDropdown user={user} />

      </Card>
    </div>
  )
}

export default DashBoard

