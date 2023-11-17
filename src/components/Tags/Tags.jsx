// Tags.js
import React from 'react';
import "./Tags.scss"

const Tags = ({ tags }) => {
  return (
    <div className='logement__tags'>
      {tags ? (
        tags.map((tag, index) => (
          <span key={index} className='logement__tags__tag'>
            {tag}
          </span>
        ))
      ) : (
        <span>Tags non disponibles</span>
      )}
    </div>
  );
};

export default Tags;
