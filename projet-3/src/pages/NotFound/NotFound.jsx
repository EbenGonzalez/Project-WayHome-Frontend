import './NotFound.css'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
        <div className='page404'>NotFound
            <Link to='/'>
                <p className='home'>HOME</p>
            </Link>
        </div>
    </>
    
  )
}

export default NotFound