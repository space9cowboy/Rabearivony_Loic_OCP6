import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

import Logo from "../../assets/LOGO.svg"

function Header() {
  return (
    <header className="header">
        <div className='headerLogo'>
            <img src={Logo} alt="logo de kasa" />
        </div>
        <nav className='headerNav'>
            <Link to="/" className='headerLink'>
            Accueil 
            </Link>
            <Link to="/about" className='headerLink'>
            A propos 
            </Link>
        </nav>
    </header>
  )
}

export default Header