import './PageAdoption.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PetShow from '../../components/PetShow/PetShow';
import { getAdoptionPets } from '../../services/pet.services';


function PageAdoption() {
  const [petShow, setPetShow] = useState([]);
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
          <PetShow pet={pet} />
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

  return (
    <>
    <div className='scroll-container'>
    <input
        className='input'
        type="text"
        placeholder='    Buscar por palabra clave...'
        value={racesFilter}
        onChange={handleRacesFilterChange}
      />
    </div>
      <div className='pet-card'>
        {petsShowFunc()}
      </div>
    
    </>
  );
}

export default PageAdoption;