import React from 'react'
import "./BannerProps.scss"


function BannerProps(props) {
  return (
    <div className='bannerProps'>
      <img className='bannerProps__img' src={props.img} alt="Image de bannière" />
     <div className='bannerProps__content'>
      <h2 className='bannerProps__title'>
        {props.textFirst}
         <span className='bannerProps__titleNext'>{" "}{props.textSecond}</span>
       </h2>
     </div>
    </div>
  )
}

export default BannerProps