import React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function HoverRating({ initialValue }) {
  const [value, setValue] = useState(initialValue);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          // setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          // setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

function MyHistory({ history }) {
  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        margin:"20px",
        padding: 5,
        borderRadius: 8,
        boxShadow: 3,
        display: 'flex',
        justifyContent: 'space-between',
        width: "600px",
        height:"500px"
      }}
    >
      {Object.keys(history).length !== 0 ?
        <>
          {/* Box 1 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="https://source.unsplash.com/random?dog"
              alt="Image 1"
              style={{
                borderRadius: '50%',
                marginBottom: 10,
                width: "150px",
                height:"200px"
              }}
            />
            <Typography variant="h6" gutterBottom>
              {history.pet.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {`${history.pet.age} años`}
            </Typography>
            <Typography variant="body2">
              {history.pet.info}
            </Typography>
          </Box>

          <HoverRating initialValue={history.score} />
          {/* Box 2 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="https://source.unsplash.com/random?person"
              alt="Image 2"
              style={{ 
                borderRadius: '50%', 
                marginBottom: 10,
                width: "150px",
                height:"200px" }}
            />
            <Typography variant="h6" gutterBottom>
              {history.user.firstName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {history.user.location}
            </Typography>
            <Typography variant="body2">
              {history.user.info}
            </Typography>
          </Box>
        </> :
        <h1>
          Loading
        </h1>
      }
    </Box>
  )

}

export default MyHistory