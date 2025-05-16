import React from 'react'
import { Link} from 'react-router-dom'
import { useState } from 'react'
import './navbar.css'

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)

const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className='navbar'>
      <div className='container'>
          <img className='logo' src="/assets/Logo.svg" alt="Logo"/>
          
          <button className='hamburger' onClick ={toggleMenu} aria-label='Toggle menu'>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <nav className={`navItems ${isOpen ? 'open' : ''}`}>
              <Link className="link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="link" to="/Booking" onClick={() => setIsOpen(false)}>Booking</Link>
          <Link className="link" to="/" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link className="link" to="/" onClick={() => setIsOpen(false)}>About</Link>
          </nav>
      </div>
    </header>
    
  )
}

export default Navbar