import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <p>© Way-Home 2023 - All Rights Reserved</p>
            <p>
                <Link to='/quienesSomos'>Quiénes somos</Link>
            </p>
            <p>
                <Link to='/about'>Información de contacto</Link>
            </p>
            
        </div>
    </div>
  )
}

export default Footer