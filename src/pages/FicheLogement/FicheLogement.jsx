import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
//import icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import faq

import "./FicheLogement.scss";


// import components
import Tags from '../../components/Tags/Tags';
import RatingStars from '../../components/RatingStars/RatingStars';
import Description from '../../components/Description/Description';
import Equipements from '../../components/Equipements/Equipements';

import Error from '../Error/Error';


const FicheLogement = () => {
  let { id } = useParams();
  
  
  
  const [annonce, setAnnonce] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

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

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? annonce.pictures.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === annonce.pictures.length - 1 ? 0 : prev + 1));
  };

  if (!annonce) {
    return (<Error />); // Ou une autre indication de chargement
  }

  
 
  return (
    <div className='logement'>

      <div className='logement__carrousel'>
        
      {annonce.pictures && annonce.pictures.length > 1 && (
        <>
           <FontAwesomeIcon icon={faChevronLeft} className="logement__carrousel__leftchevron" style={{ color: "#ffffff" }} onClick={handlePrevImage} />

            <img src={annonce.pictures[currentImage]} className="logement__img" alt={`Image ${currentImage + 1}`} />

            <FontAwesomeIcon icon={faChevronRight} className
            ="logement__carrousel__rightchevron" style={{ color: "#ffffff"}} onClick={handleNextImage} />

            <div className="logement__carrousel__pagination">{`${currentImage + 1}/${annonce.pictures.length}`}</div>
          </>
        )}
        
        {annonce.pictures.length === 1 && (
            <img src={annonce.pictures[0]} className="logement__img" alt={`Image 1`} />
          )}
      </div>

      
        <div className='logement__info'>
          <div className='logement__first'>
            <div className='logement__title'>
              

                <h2 className='logement__title__h2'>{annonce.title}</h2>
                <span className='logement__title__localisation'>{annonce.location}</span>
                <div className='logement__tags'>  
                  <Tags tags={annonce.tags} />
                </div>

              
             
            </div>

            <div className='logement__details'>
              
                <div className='host'>
                  <span className='hostname'>{annonce.host.name}</span>
                  <img src={annonce.host.picture} className='imgrond' />
                </div>

                <div className='logement__rating'>
                  <RatingStars rating={annonce.rating} />
                </div>
              
            </div>
          </div>

          <div className='faqs'>
            
            <div className="flex">
              <div className='width-50'>
                <Description  description={annonce.description} />
              </div>
              <div className="width-50">
                <Equipements  equipments={annonce.equipments} />
              </div>
            </div>
          
         </div>
        </div>
      

    </div>
  )
}

export default FicheLogement