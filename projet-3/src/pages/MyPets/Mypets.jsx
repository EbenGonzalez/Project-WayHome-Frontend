import './MyPets.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getOwnPets } from '../../services/pet.services.js'
import { getOwnHistory } from '../../services/history.services.js'
import PetShow from '../../components/PetShow/PetShow'
import MyHistory from '../../components/myHistory/myHistory.jsx'


function Mypets() {

  const [myPet, setMyPet] = useState([])
  
  const [myHistory, setMyHistory] = useState([])
// console.log(myHistory)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOwnPets()
      setMyPet(result)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const {history} = await getOwnHistory()
      setMyHistory(history)
    }
    fetchData()
  }, [])

  const myPetsFun = () => {
    return myPet.map(pet => {
      return (
        <Link key={pet.location}>
          <PetShow pet={pet} />
        </Link>
      )
    })
  }

  const myHistoryFun = () => {
    return myHistory.map(history => {
      console.log(history)
      return (
       <>
       <MyHistory history = {history}/>
       </>
      )
    })
  }

  

  return (
    <div>
      <h1>Mis Mascotas</h1>
      <div className='pet-card'>
        {myPetsFun()}
      </div>
     <div>{myHistoryFun()}</div>
    </div>
  )
}

export default Mypets