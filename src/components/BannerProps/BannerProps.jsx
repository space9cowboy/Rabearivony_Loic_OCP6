import React from 'react'
import "./BannerProps.css"


function BannerProps(props) {
  return (
    <div className='bannerProps'>
      <img className='bannerPropsImg' src={props.img} alt="Image de bannière" />
     <div className='bannerPropsContent'>
      <h2 className='bannerPropsTitle'>
        {props.textFirst}
         <span className='bannerPropsTitleNext'>{" "}{props.textSecond}</span>
       </h2>
     </div>
    </div>
  )
}

export default BannerProps