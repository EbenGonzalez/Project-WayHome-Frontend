import './MyPets.css'

import { useEffect, useState } from 'react'

import { getOwnPets } from '../../services/pet.services.js'
import { getOwnHistory } from '../../services/history.services.js'
import PetShow from '../../components/PetShow/PetShow'
import MyHistory from '../../components/myHistory/myHistory.jsx'
import TemporaryDrawer from '../../components/Drawer/Drawer.jsx'


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
      const { history } = await getOwnHistory()
      setMyHistory(history)
    }
    fetchData()
  }, [])

  const myPetsFun = () => {
    return myPet.map(pet => {
      return (
        <div key={pet.location}>
          <PetShow pet={pet} />
        </div>
      )
    })
  }

  const myHistoryFun = () => {
    return myHistory.map(history => {
      console.log(history)
      return (
        <div key={history.id}>
          <MyHistory history={history} />
        </div>
      )
    })
  }



  return (
    <div>
      <h1>Mis Mascotas</h1>
      <TemporaryDrawer/>
      <div className='pet-card'>
        {myPetsFun()}
      </div>
      <div className='card-myPets'>
        {myHistoryFun()}
      </div>
    </div>
  )
}

export default Mypets