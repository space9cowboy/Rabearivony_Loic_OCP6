import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.scss"

function Error() {
  return (
    <div className='error'>
      <div className='error__Container'>
        <h1 className='error__Text'>404</h1>
      <div className='error__Content'>
        <p className='error__Message'>Oups! La page que <span className='error__Message'>vous demendez n'existe pas.</span></p>
      </div>
      <Link to="/" className="error__Link">Retourner sur la page d'acceuil</Link>
      </div>
    </div>
  )
}

export default Error