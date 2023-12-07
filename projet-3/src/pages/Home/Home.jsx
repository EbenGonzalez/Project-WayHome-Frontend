import './Home.css'
import { useState, useEffect } from "react"
import React from 'react'
import { getAllPets } from '../../services/pet.services'

function Home() {
  const [pets, setPets] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllPets()
      setPets(result)
    }
    fetchData()
  }, [])
  return (
    <div>
       <h1>Lista de mascotas</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>

    </div>
  )
}

export default Home