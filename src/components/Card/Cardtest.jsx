import React from 'react'
import "./Card.scss"
import { Link } from "react-router-dom"

function Cardtest(props){
  return (
    <div className="card">
        <img src={props.img} alt="cover" className='card__img' />
        <div className='card__content'>
            <h3 className='card__title'>
            {props.cardTitleFirstText}
            <span className='card__titleNext'>{" "}{props.cardTitleSecondText}</span>
            </h3>
        </div>
    </div>
  )
}

export default Cardtest