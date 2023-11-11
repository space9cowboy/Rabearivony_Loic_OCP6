import { useState } from 'react'
import "./About.scss"
import "../../styles.scss"
import BannerImgAbout from "../../assets/banner-about.jpeg"
import BannerProps from '../../components/BannerProps/BannerProps'
import Faq from "../../components/Faq/Faq"



function About() {

  const [faqs, setFaqs] = useState([
    {
      question: "Fiabilité",
      answer:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
      open: false
    },
    {
      question: "Respect",
      answer: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      open: false
    },
    {
      question: "Service",
      answer: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      open: false
    },
    {
      question:
        "Sécurité",
      answer: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className='about'>
        <BannerProps img={BannerImgAbout} textFirst="" textSecond="" />
       
        <div className="faqs">
        {faqs.map((faq, index) => (
          <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>

       
    </div>
  )
}

export default About

