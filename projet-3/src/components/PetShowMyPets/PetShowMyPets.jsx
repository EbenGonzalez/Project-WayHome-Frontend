import './PetShowMyPets.css'

import { useState } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearProgress from '@mui/material/LinearProgress';

import DropDownPetUpdate from '../../components/DropDownPetUpdate/DropDownPetUpdate'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PetShowMyPets({pet}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    {Object.keys(pet).length !== 0 ? 
    <>
    <Card sx={{ width:"350px", margin:'20px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[700] }} aria-label="recipe">
            {pet.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={pet.name}
        subheader= {`${pet.age} años`}
      />
      <Link to={`/mascota/${(pet.id)}`}>
      <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random?dog"
        alt="imagen"
      />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {pet.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <DropDownPetUpdate pet={pet}/>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          {pet.info}
          </Typography>
          <Typography paragraph>
        
          </Typography>
          <Typography paragraph>
      
          </Typography>
          <Typography>
           
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </> :
    
      <LinearProgress />
    
    }
    </div>
  );
}

PetShowMyPets.propTypes = {
  pet: PropTypes.object
}