import { useState } from 'react';
import '../App.css'
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
    <div className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-ul'>
            <li className='item-li'><NavLink to="/">HOME</NavLink></li>
            <li className='item-li'><NavLink to="/about">ABOUT ME</NavLink></li>
            <li className='item-li'><NavLink to="/service">SERVICES</NavLink></li>
            <li className='item-li'><NavLink to="/work">MY WORK</NavLink></li>
        </ul>
    </div>
    <div className="menu-icon" onClick={toggleMenu}>
    {isMenuOpen ? '✕' : '☰'}
  </div>
  </>
  )
}

export default NavMenu
