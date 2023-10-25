import React from 'react'
import "./Home.css"
import Banner from "../../components/Banner/Banner"
import BannerProps from '../../components/BannerProps/BannerProps'
import BannerImg from "../../assets/banner.png"


function Home() {
  return (
    <div className='home'>
        <Banner />
        <BannerProps img={BannerImg} textFirst="Chez vous," textSecond=" partout et ailleurs" />
        <h1>
            HomePage 
        </h1>
        
    </div>
  )
}

export default Home