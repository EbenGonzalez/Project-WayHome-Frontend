import './PageVoluntarios.css'
import { getAllVolunteers } from '../../services/user.services'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RatingCard from '../../components/VolunterScore/VolunterScore'
import Mapa from '../../components/Mapa/Mapa'



function PageVoluntarios() {

    const [volunteers, setVolunteers] = useState([])
    console.log(volunteers)

    useEffect(() => {
        const fetchVolunteers = async () => {
            const result = await getAllVolunteers()
            setVolunteers(result)
        }
        fetchVolunteers()
    }, [])

    const volunteerShowFunc = () => {
        return volunteers.map(volunteer => {
            return (
                <Link to='/voluntarios' key={volunteer.id}>
                    <RatingCard volunteer={ volunteer }/>
                </Link>
            )
        })
    }

  return (
    <>
    <div className='volunteer-card'>{ volunteerShowFunc() }</div>
    <Mapa volunteers={volunteers}/>
    </>
  )
}

export default PageVoluntarios