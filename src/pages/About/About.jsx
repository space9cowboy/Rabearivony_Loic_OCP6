import React from 'react'
import "./About.css"
import BannerImgAbout from "../../assets/banner-about.jpeg"
import BannerProps from '../../components/BannerProps/BannerProps'
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu'


function About() {

  const fiabilityTitle = "Fiabilité"
  const fiabilityContent = ["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."]

  const respectTitle = "Respect"
  const respectContent = ["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]

  const serviceTitle = "Service"

  const securiteTitle = "Securité"
  const securiteContent = ["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]


  return (
    <div className='about'>
        <BannerProps img={BannerImgAbout} textFirst="" textSecond="" />
        <h1>
            About 
        </h1>
        <DropdownMenu options={fiabilityContent} title={fiabilityTitle}/>
        <DropdownMenu options={respectContent} title={respectTitle}/>
        <DropdownMenu options={respectContent} title={serviceTitle}/>
       
        <DropdownMenu options={securiteContent} title={securiteTitle}/>
    </div>
  )
}

export default About