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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ margin: 'auto', marginTop: '200px', marginBottom: '100px', width: '100vh', boxShadow: "20" }}>
        <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.profile} sx={{ width: 250, height: 250, margin: 'auto', marginTop: '20px' }} />
        <CardContent sx={{ textAlign: 'center' }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                {`${user.firstName} ${user.lastName}`}
              </Typography>
            </Grid>
            <Divider />
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
                <Typography variant="body1" align='center'>{user.phone}</Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center" spacing={1}>
              <Grid item>
                <LocationOnIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1" align='center'>{user.location}</Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center" spacing={1}>
              <Grid item sx={{ border: '1px solid black', borderRadius: '10px' }}>
                <Typography variant="body1" align='center'><InfoIcon sx={{ color: "red" }} /> {user.info}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <FormDropdown />
        <Link to={'/perfil/misMascotas'} style={{ textDecoration: 'none', display: 'block', marginTop: '10px', textAlign: 'center' }}>
          <Button type="button" variant="contained" color="primary" sx={{ marginTop: '10px' }}>
            Mis Mascotas
          </Button>
        </Link>
        <UserDropdown user={user} />
      </Card>
    </div>
  )
}

export default DashBoard

