
import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Grid } from '@mui/material'
import { CardActionArea } from '@mui/material'
import { updateUser } from '../../services/user.services'
import { Link } from 'react-router-dom'

export default function RatingCard({ volunteer }) {

  const [media, setMedia] = useState(volunteer.media)
  const [background, setBackground] = useState(volunteer.background)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const handleUpChange = async () => {
    if (!liked) {
      try {
        const sumar = background + 1
        setBackground(sumar)
        const payload = {
          background: sumar
        }
        const result = await updateUser(volunteer.id, payload)
        setLiked(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleDownChange = async () => {
    if (!disliked) {
      try {
        const resta = media + 1
        setMedia(resta)
        const payload = {
          media: resta
        }
        const result = await updateUser(volunteer.id, payload)
        setDisliked(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardActionArea>
        <Link to={`/voluntarios/${(volunteer.id)}`}>
          <CardMedia
            component="img"
            height="180"
            image={volunteer.profile || "https://source.unsplash.com/random?person"}
            alt="green iguana"
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {volunteer.firstName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Grid container alignItems="center" justifyContent="baseline">
            <Grid item>
              <ThumbUpIcon onClick={handleUpChange} color={liked ? 'primary' : 'action'} />
            </Grid>
            <Grid item sx={{ marginLeft: 1 , marginRight: 1 }}>
              <Typography color={"green"}>{background}</Typography>
            </Grid>
            <Grid item>
              <ThumbDownAltIcon onClick={handleDownChange} color={disliked ? 'error' : 'action'} />
            </Grid>
            <Grid item sx={{ marginLeft: 1 }}>
              <Typography color={"red"}>{media}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
