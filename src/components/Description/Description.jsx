// Description.jsx

import React, { useState } from 'react';
import "./Description.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Description = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    <div className={`faq ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleDescription}>
        Description
        <FontAwesomeIcon className={isOpen ? "rotateOpeningIcon _active " : "rotateClosingIcon"} icon={faChevronDown} />
      </div>
      {isOpen && (
        <div className="faq-answer">
          {description}
        </div>
      )}
    </div>
  );
};

export default Description;
