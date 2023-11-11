import { useState, useEffect } from 'react'
import "./FicheLogement.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination';

import 'swiper/css'
import 'swiper/css/navigation'

//import image poute les tests
import Cosy from '../../assets/cosy.jpeg'
import Cosy2 from '../../assets/cosy2.jpeg'
import Cosy3 from '../../assets/cosy3.jpeg'

//import icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom'

//import faq
import Faq from "../../components/Faq/Faq"



const FicheLogement = () => {
  let { id } = useParams();
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
  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    const fetchAnnonce = async () => {
      try {
        const response = await fetch('/annonces.json');  // L'url doit être relative au dossier public
        const data = await response.json();

        // Trouve l'annonce correspondant à l'id dans les paramètres de l'URL
        const annonceData = data.find(annonce => annonce.id === id);

        if (annonceData) {
          setAnnonce(annonceData);
        } else {
          console.error("Annonce non trouvée");
        }
      } catch (error) {
        console.error("Problème de requête", error);
      }
    };

    fetchAnnonce();
  }, [id]);


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

  if (!annonce) {
    return <div>Loading...</div>; // Ou une autre indication de chargement
  }
 
  return (
    <div className='logement'>
      
     
      <div className='logement__carrousel'>
        
        <Swiper 
        loop={true}
        pagination={{
          type: 'fraction',
        }}
        navigation={true} modules={[Pagination, Navigation]} className='mySwiper logement__swiper'>
          {annonce.pictures ? (
          annonce.pictures.map((picture, index) => (
            <SwiperSlide key={index}>
              <div
                 className='logement__card'><img src={picture} className="logement__img"/>
              </div>
              </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>Tags non disponibles</SwiperSlide>
        )}
        </Swiper>
      </div>

      
        <div className='logement__info'>
          <div className='logement__first'>
            <div className='logement__title'>
              <h2 className='logement__title__h2'>{annonce.title}</h2>
              <span className='logement__title__localisation'>{annonce.location}</span>
              <div className='logement__tags'>
                  <span className='logement__tags__tag'>Tag 1</span>
              </div>
              
            </div>

            <div className='logement__details'>
              <div className='logement__details__host'>
                <span>{annonce.host.name}</span>
                <div className='logement__rating'>
                  <FontAwesomeIcon className="logement__rating__star" icon={faStar} />
                  <FontAwesomeIcon className="logement__rating__star" icon={faStar} />
                  <FontAwesomeIcon className="logement__rating__star" icon={faStar} />
                  <FontAwesomeIcon className="logement__rating__star" icon={faStar} />
                  <FontAwesomeIcon className="logement__rating__star" icon={faStar} />
                </div>
              </div>
            </div>
          </div>

            <div className='faqs flex'>
              <div className='logement__second__dropdown'>
                  <span>description</span>
                  {faqs.map((faq, index) => (
                  <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
                  
              </div>
              <div className='logement__second__dropdown'>
                  <span>equipement</span>
                  {faqs.map((faq, index) => (
                  <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
                  
              </div>
              
            </div>
        </div>
      

    </div>
  )
}

export default FicheLogement