import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./Header.scss"

import Logo from "../../assets/LOGO.svg"
import SmallLogo from "../../assets/LOGO-small.svg"


function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSource, setImageSource] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Condition pour choisir quelle image afficher en fonction de la largeur de la fenêtre
    if (windowWidth < 768) {
      setImageSource(SmallLogo);
    } else {
      setImageSource(Logo);
    }
  }, [windowWidth]);

  return (
    <header className="header">
        <div className='header__logo'>
            <img src={imageSource} alt="logo de kasa" />
        </div>
        <nav className='header__nav'>
            <Link to="/" className='header__link'>
            Accueil 
            </Link>
            <Link to="/about" className='header__link'>
            A propos 
            </Link>
        </nav>
    </header>
  )
}

export default Header