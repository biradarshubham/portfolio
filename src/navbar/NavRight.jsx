
import { NavLink } from 'react-router-dom'
import '../App.css'

const NavRight = () => {
    
  return (
    <>
    <div className="nav-right">
        <NavLink className="contact-btn" to='/contact'>Contact ↗</NavLink>
    </div>
    </>
  )
}

export default NavRight
