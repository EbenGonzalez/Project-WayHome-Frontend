import "./Pet.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getOnePet } from "../../services/pet.services"
import PetShow from "../../components/PetShow/PetShow"

function Pet() {

  let { id } = useParams()

  const [pet, setPet] = useState({})
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await getOnePet(id)
      setPet(result)
    }
    if (id !== undefined) {
      fetchData()
    }
  }, [])

  return (
    <>
    <div id="mascota">
      <PetShow pet={pet} />
    </div>
    </>
  )
}

export default Pet
