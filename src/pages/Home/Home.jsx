import { useState, useEffect} from 'react'
import "./Home.scss"

import BannerProps from '../../components/BannerProps/BannerProps'
import BannerImg from "../../assets/banner.png"
import Card from "../../components/Card/Card"

import axios from 'axios'




function Home() {
  
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    axios.get('annonces.json')
    .then((res) => {setAnnonces(res.data)})
    .catch((err) => {console.log("problème de récup de données");})
  },[]);
  
  
  return (
    <div className='home'>
        <BannerProps img={BannerImg} textFirst="Chez vous," textSecond=" partout et ailleurs" />
        
        <div className='home__Container'>
        {annonces.map(annonce => (
          <Card key={annonce.id} annonce={annonce}/>
        ))}
        
        </div>   
       
    </div>
  )
}

export default Home