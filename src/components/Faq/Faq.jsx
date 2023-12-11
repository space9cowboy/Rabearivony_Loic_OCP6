import { useState } from "react";

import "../../styles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Faq = ({ faq, index, toggleFAQ}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
   
  return (
    <div
      className={"faq " + (faq.open ? "open" : "close")}
      key={index}
      onClick={() => {
        toggleFAQ(index);
        toggleActive();
      }}>
        

      <div className="faq-question">{faq.question}
      <FontAwesomeIcon className={isActive ? "rotateOpeningIcon _active " : "rotateClosingIcon"} icon={faChevronDown} />
      </div>

      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default Faq;