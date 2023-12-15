import React, { useState } from 'react';
import "./Dropdown.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ dropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  let answerContent;

  // Vérification du type de données pour dropdown.answer
  if (Array.isArray(dropdown.answer)) {
    // Si c'est un tableau, rend chaque élément dans une liste
    answerContent = (
      <ul>
        {dropdown.answer.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    );
  } else {
    // Si c'est une chaîne de caractères, affiche simplement la réponse
    answerContent = <p>{dropdown.answer}</p>;
  }

  return (
    <div className={`faq ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleDropdown}>
        {dropdown.question}
        <FontAwesomeIcon className={isOpen ? "rotateOpeningIcon _active " : "rotateClosingIcon"} icon={faChevronDown} />
      </div>
      {isOpen && (
        <div className="faq-answer">
          {answerContent}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
