import "./Voluntario.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import VolunteerShow from "../../components/VolunteerShow/VolunteerShow"
import { getOneUser } from "../../services/user.services"

function Voluntario() {

  let { id } = useParams()

  const [volunteer, setVolunteer] = useState({})
  console.log(volunteer)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOneUser(id)
      setVolunteer(result)
    }
    if (id !== undefined) {
      fetchData()
    }
  }, [id])

  return (

    <div id="voluntario">
      <VolunteerShow volunteer={volunteer} />
    </div>
  )
}

export default Voluntario