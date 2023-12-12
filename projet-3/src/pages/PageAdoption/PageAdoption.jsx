import './PageAdoption.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PetShow from '../../components/PetShow/PetShow';
import { getAdoptionPets } from '../../services/pet.services';


function PageAdoption() {
  const [petShow, setPetShow] = useState([]);
  // console.log(petShow)
  const [racesFilter, setRacesFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAdoptionPets();
      setPetShow(result);
    };
    fetchData();
  }, []);

  const petsShowFunc = () => {
    return filteredPets.map(pet => {
      return (
        <Link to='/adopcion' key={pet.id}>
          <PetShow pet = {pet}/>
        </Link>
      )
    })
  }

  const handleRacesFilterChange = (e) => {
    setRacesFilter(e.target.value);
  };

  const filteredPets = petShow.filter(
    (pet) =>
      pet.info &&
      pet.info.toLowerCase().includes(racesFilter.toLowerCase())
  );
  console.log(filteredPets)

  return (
    <div className='container'>
      <input
        className='input'
        type="text"
        placeholder='    Buscar por palabra clave...'
        value={racesFilter}
        onChange={handleRacesFilterChange}
      />
      <div className='pet-card'>
        {petsShowFunc()}
      </div>
      
    </div>
  );
}

export default PageAdoption;