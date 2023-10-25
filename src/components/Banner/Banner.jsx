import React from 'react'
import "./Banner.css"


function Banner() {
  return (
    <div className='banner'>
      
     <div className='bannerContent'>
       <h2 className='bannerTitle'>
         Chez vous, 
         <span className='bannerTitleNext'>{" "}partout et ailleurs</span>
       </h2>
     </div>
    </div>
  )
}

export default Banner