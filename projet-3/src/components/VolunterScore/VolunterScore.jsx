import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import { Grid, IconButton, Collapse, CardActionArea } from '@mui/material'
import { updateUser } from '../../services/user.services'
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'

export default function RatingCard({ volunteer }) {
  const [media, setMedia] = useState(volunteer.media)
  const [background, setBackground] = useState(volunteer.background)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [expanded, setExpanded] = useState(false)

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
        };
        const result = await updateUser(volunteer.id, payload)
        setDisliked(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ width: 345, margin: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={volunteer.profile || 'https://source.unsplash.com/random?person'}
          alt="err image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {volunteer.firstName}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary" style={{ backgroundColor: '#e0e0e0', width: '100%', padding: '8px' }}>
            {volunteer.location}
          </Typography>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item container xs={6} alignItems="center" >
              <ThumbUpIcon onClick={handleUpChange} color={liked ? 'primary' : 'action'} sx={{ marginLeft: 1 , marginRight: 2 }} />
              <Typography color={'green'}>{background}</Typography>
              <ThumbDownAltIcon onClick={handleDownChange} color={disliked ? 'error' : 'action'}sx={{ marginLeft: 2 , marginRight: 2 }} />
              <Typography color={'red'}>{media}</Typography>
            </Grid>
            <Grid item container xs={6} justifyContent="flex-end">
              <IconButton
                aria-expanded={expanded}
                aria-label="show more"
                onClick={handleExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {volunteer.info}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}