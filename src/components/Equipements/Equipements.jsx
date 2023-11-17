// Equipements.jsx

import React, { useState } from 'react';
import "./Equipements.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Equipements = ({ equipments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEquipements = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleEquipements}>
        Équipements
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </div>
      {isOpen && (
        <div className="faq-answer">
          <ul className='ul'>
            {equipments.map((equipment, index) => (
              <li className="list" key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Equipements;

