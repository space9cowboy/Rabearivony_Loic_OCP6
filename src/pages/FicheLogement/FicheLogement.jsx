import React from 'react'
import "./FicheLogement.scss"
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

//import image poute les tests
import Cosy from '../../assets/cosy.jpeg'
import Cosy2 from '../../assets/cosy2.jpeg'
import Cosy3 from '../../assets/cosy3.jpeg'

//import icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function FicheLogement (){
  return (
    <div className='logement'>
      <span>Logement</span>
     
      <div className='logement__carrousel'>
        <span>carrousel de ma bite</span>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper logement__swiper'>
          <SwiperSlide>
            <div className='logement__card'><img src={Cosy} className="logement__img"/></div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='logement__card'><img src={Cosy2} className="logement__img"/></div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='logement__card'><img src={Cosy3} className="logement__img"/></div>
          </SwiperSlide>
        </Swiper>
      </div>

      
        <div className='logement__info'>
          <div className='logement__first'>
            <div className='logement__title'>
              <h2 className='logement__title__h2'>Cozy loft on the Canal Saint-Martin</h2>
              <span className='logement__title__localisation'>Paris, Ile de France</span>
              <div className='logement__tags'>
                  <span className='logement__tags__tag'>Tag 1</span>
              </div>
            </div>

            <div className='logement__details'>
              <div className='logement__details__host'>
                <span>Alexandre Dumas</span>
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

            <div className='logement__second'>
              <div className='logement__second__dropdown'>
                  <span>description</span>
              </div>
              <div className='logement__second__dropdown'>
                  <span>equipement</span>
              </div>
            </div>
        </div>
      

    </div>
  )
}

export default FicheLogement