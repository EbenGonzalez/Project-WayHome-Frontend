import './PageAcogida.css'

import { getAllPets } from '../../services/pet.services'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PetShow from '../../components/PetShow/PetShow'


function PageAcogida() {

  const [petShow, setPetShow] = useState([])
  console.log(petShow)
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllPets()
      setPetShow(result)
    }
    fetchData()
  }, [])

  const petsShowFunc = () => {
    return petShow.map(pet => {
      return (
        <Link to='/acogida' key={pet.id}>
          <PetShow pet = {pet}/>
        </Link>
      )
    })
  }

  return (
    <div className='pet-card'>{petsShowFunc()}</div>
  )
}

export default PageAcogida