import {useState} from 'react'
import "./Dropdown.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ faq, index, toggleFAQ}) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div className='dropdown'>
        <div key={index} id="panel" onClick={() => {
            toggleActive;
            toggleFAQ(index);
        }}>{faq.question} 
            <FontAwesomeIcon className={isActive ? "rotateOpeningIcon _active " : "rotateClosingIcon"} icon={faChevronDown} />
        </div>
        <div className={isActive ? "advanced-search _active" : "advanced-search"}>{faq.answer}
        </div>
       
      </div>
    );
  };

export default Dropdown