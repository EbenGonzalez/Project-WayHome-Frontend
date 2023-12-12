import './MyPets.css'

import { useEffect, useState } from 'react'

import { getOwnPets } from '../../services/pet.services.js'
import { getOwnHistory } from '../../services/history.services.js'
import PetShow from '../../components/PetShow/PetShow'
import MyHistory from '../../components/myHistory/myHistory.jsx'

function Mypets() {

  const [myPet, setMyPet] = useState([])
  console.log(myPet)
  const [myHistory, setMyHistory] = useState([])
  const [racesFilter, setRacesFilter] = useState('');
 
  useEffect(() => {
    const fetchData = async () => {
      const {pet} = await getOwnPets()
      setMyPet(pet)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const { history } = await getOwnHistory()
      setMyHistory(history)
    }
    fetchData()
  }, [])

  const myPetsFun = () => {
    return filteredPets.map(pet => {
      return (
        <div key={pet.id}>
          <PetShow pet={pet} />
        </div>
      )
    })
  }

  const myHistoryFun = () => {
    return myHistory.map(history => {
      // console.log(history)
      return (
        <div key={history.id}>
          <MyHistory history={history} />
        </div>
      )
    })
  }

  const handleRacesFilterChange = (e) => {
    setRacesFilter(e.target.value);
  };

  const filteredPets = myPet.filter(
    (pet) =>
      pet.info &&
      pet.info.toLowerCase().includes(racesFilter.toLowerCase())
  );

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
      <div className='card-myPets'>
        {myHistoryFun()}
      </div>
    </>
  )
}

export default Mypets