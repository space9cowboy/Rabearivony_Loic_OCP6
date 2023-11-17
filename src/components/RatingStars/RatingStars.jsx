// RatingStars.js
import React from 'react';
import "./RatingStars.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStars = ({ rating }) => {
  const filledStars = parseInt(rating, 10);
  const emptyStars = 5 - filledStars;

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        className='logement__rating__star'
        icon={faStar}
        style={{ color: '#FF6060' }}
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i + filledStars}
        className='logement__rating__star'
        icon={faStar}
        style={{ color: 'grey' }}
      />
    );
  }

  return <div className='logement__rating'>{stars}</div>;
};

export default RatingStars;
