import './MyPets.css'
import { getOwnPets } from '../../services/pet.services.js'
import PetShowMyPets from '../../components/PetShowMyPets/PetShowMyPets.jsx'

import { useEffect, useState } from 'react'

function Mypets() {

  const [myPet, setMyPet] = useState([])
  const [racesFilter, setRacesFilter] = useState('');

  const handleRacesFilterChange = (e) => {
    setRacesFilter(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { pet } = await getOwnPets()
      setMyPet(pet)
    }
    fetchData()
  }, [])

  const filteredPets = myPet.filter(
    (pet) =>
      pet.info &&
      pet.info.toLowerCase().includes(racesFilter.toLowerCase())
  );

  const myPetsFun = () => {
    return filteredPets.map(pet => {
      return (
        <div key={pet.id}>
          <PetShowMyPets pet={pet} />
        </div>
      )
    })
  }

  return (
    <>
      <input
        className='input'
        type="text"
        placeholder='    Buscar por palabra clave...'
        value={racesFilter}
        onChange={handleRacesFilterChange}
      />
      <div className='pet-card'>
        {myPetsFun()}
      </div>
    </>
  )
}

export default Mypets