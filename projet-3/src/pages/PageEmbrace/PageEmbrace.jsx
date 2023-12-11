import './PageAcogida.css'

import { getEmbracePets } from '../../services/pet.services'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PetShow from '../../components/PetShow/PetShow'


function PageEmbrace() {

  const [petShow, setPetShow] = useState([])
  console.log(petShow)
  const [racesFilter, setRacesFilter] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await getEmbracePets()
      setPetShow(result)
    }
    fetchData()
  }, [])

  const petsShowFunc = () => {
    return filteredPets.map(pet => {
      return (
        <Link to='/acogida' key={pet.id}>
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
      pet.race &&
      pet.race.name.toLowerCase().includes(racesFilter.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder='Buscar por raza'
        value={racesFilter}
        onChange={handleRacesFilterChange}
      />
    <div className='pet-card'>{petsShowFunc()}</div>
    </>
  )
}

export default PageEmbrace