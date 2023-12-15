import './PageVoluntarios.css'
import { getAllVolunteers } from '../../services/user.services'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RatingCard from '../../components/VolunterScore/VolunterScore'
import Mapa from '../../components/Mapa/Mapa'



function PageVoluntarios() {

    const [volunteers, setVolunteers] = useState([])
    console.log(volunteers)
    const [volunteersFilter, setVolunteersFilter] = useState('');


    useEffect(() => {
        const fetchVolunteers = async () => {
            const result = await getAllVolunteers()
            setVolunteers(result)
        }
        fetchVolunteers()
    }, [])

    const handleVolunteersFilterChange = (e) => {
        setVolunteersFilter(e.target.value);
      };

      const filteredVolunteer = volunteers.filter(
        (volunteer) =>
          volunteer.info &&
          volunteer.info.toLowerCase().includes(volunteersFilter.toLowerCase())
      );

    const volunteerShowFunc = () => {
        return filteredVolunteer.map(volunteer => {
            return (
                <Link to='/voluntarios' key={volunteer.id}>
                    <RatingCard volunteer={ volunteer }/>
                </Link>
            )
        })
    }

  return (
    <>
     <input
        className='input2'
        type="text"
        placeholder='    Buscar por palabra clave...'
        value={volunteersFilter}
        onChange={handleVolunteersFilterChange}
      />
      <div className='ultimatum'>
      <div className='volunteer-card'>{ volunteerShowFunc() }</div>
      </div>
    <Mapa volunteers={volunteers}/>
    </>
  )
}

export default PageVoluntarios