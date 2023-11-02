import React from 'react'
import "./Card.scss"
import { Link } from "react-router-dom"

const Card = ({ annonce }) => {
  return (
    <Link className="card" to="/logement/{annonce.id}">
        <img src={annonce.cover} alt={annonce.title} className="card__img" />
        <div className='card__content'>
        <p className='card__title'>{annonce.title}</p>
        </div>
    </Link>
  )
}

export default Card