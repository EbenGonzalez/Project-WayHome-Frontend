import './DashBoard.css'
import { useEffect, useState } from 'react'
import { getOwnUser } from '../../services/user.services'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
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


function DashBoard() {
  const [user, setUser] = useState({})
  console.log(user.profile)

  useEffect(() => {
    const fetchData = async () => {
      const { user } = await getOwnUser()
      setUser(user)
    }
    fetchData()
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ maxWidth: 600}}>
        <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.profile} sx={{ width: 150, height: 150, margin: 'auto' }} />
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                {`${user.firstName} ${user.lastName}`}
              </Typography>
            </Grid>
            <Grid item container alignItems="center" spacing={1}>
              <Grid item>
                <AccountCircleIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1" align='center'>{`${user.firstName} ${user.lastName}`}</Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center" spacing={1}>
              <Grid item>
                <EmailIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1" align='center'>{user.email}</Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center" spacing={1}>
              <Grid item>
                <PhoneIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">{user.phone}</Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center" spacing={1}>
              <Grid item>
                <LocationOnIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">{user.location}</Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center" spacing={1}>
              <Grid item>
                <InfoIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1" align='center'>{user.nfo}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
          <FormDropdown />
          <Link to={'/perfil/misMascotas'}>
            <Button type="button" variant="contained" color="primary">
              Mis Mascotas
            </Button >
          </Link>
          <UserDropdown user={user} />
      </Card>
    </div>
  )
}

export default DashBoard

