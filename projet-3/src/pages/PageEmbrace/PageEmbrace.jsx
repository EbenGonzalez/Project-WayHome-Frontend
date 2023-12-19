import './PageAcogida.css'
import { getEmbracePets } from '../../services/pet.services'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PetShow from '../../components/PetShow/PetShow'

function PageEmbrace() {

  const [petShow, setPetShow] = useState([])
  const [racesFilter, setRacesFilter] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await getEmbracePets()
      setPetShow(result)
    }
    fetchData()
  }, [])

  const handleRacesFilterChange = (e) => {
    setRacesFilter(e.target.value)
  };
  
  const filteredPets = petShow.filter(
    (pet) =>
      pet.info &&
      pet.info.toLowerCase().includes(racesFilter.toLowerCase())
  );

  const petsShowFunc = () => {
    return filteredPets.map(pet => {
      return (
        <Link to='/acogida' key={pet.id}>
          <PetShow pet = {pet}/>
        </Link>
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
    <div className='pet-card'>{petsShowFunc()}</div>
    </>
  )
}

export default PageEmbrace