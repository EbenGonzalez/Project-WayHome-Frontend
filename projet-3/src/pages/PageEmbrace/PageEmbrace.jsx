import './PageAcogida.css'

import { getEmbracePets } from '../../services/pet.services'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PetShow from '../../components/PetShow/PetShow'


function PageEmbrace() {

  const [petShow, setPetShow] = useState([])
  // console.log(petShow)
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await getEmbracePets()
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

export default PageEmbrace