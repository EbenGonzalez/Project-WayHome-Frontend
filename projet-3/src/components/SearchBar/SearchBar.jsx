import './SearchBar.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import { useState } from 'react';
import PetShow from '../../components/PetShow/PetShow'


const ariaLabel = { 'aria-label': 'description' };

export default function Inputs() {

  // const [racesFilter, setRacesFilter] = useState('')

  // function handleRacesFilterChange(e) {
  //   setRacesFilter(e.target.value)
  // }

  // const filterRaces = () => {
  //   return (
  //     <div>
  //        {Object.keys(history).length !== 0 ?
  //       <>
  //     <PetShow pet={pet.filter(pet => pet.race.name.toLowerCase().includes(racesFilter.toLocaleLowerCase()))} />
  //     </> :
  //       <h1>
  //         Loading
  //       </h1>
  //        }
  //     </div>
  //   )
  // }

  return (
    <Box
      display="flex"
      alignItems="center"
      mx='auto'
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
        marginTop: "100px",
        justifyContent:"center",
        
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{width:"100%"}}
        placeholder="Buscar por raza"
        inputProps={ariaLabel}
        // onChange={handleRacesFilterChange} 
        />
    </Box>
  );

}

