import React from 'react'
import "./About.css"
import BannerImgAbout from "../../assets/banner-about.jpeg"
import BannerProps from '../../components/BannerProps/BannerProps'


function About() {
  return (
    <div className='about'>
        <BannerProps img={BannerImgAbout} textFirst="" textSecond="" />
        <h1>
            About 
        </h1>

    </div>
  )
}

export default About