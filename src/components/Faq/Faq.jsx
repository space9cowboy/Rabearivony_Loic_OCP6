import { useState } from "react";
import "./Faq.scss"
import "../../styles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Faq = ({ faq, index, toggleFAQ}) => {
  const [useIcon, setUseIcon] = useState(true);

  const toggleIcon = () => {
    setUseIcon((prevUseIcon) => !prevUseIcon);
  }

  const icon = useIcon ? faChevronUp : faChevronDown; 
  
   
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => {
        toggleFAQ(index);
        toggleIcon();
      }}>
        

      <div className="faq-question">{faq.question}
          <FontAwesomeIcon className="chevronicon" icon={icon} />
      </div>

      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default Faq;