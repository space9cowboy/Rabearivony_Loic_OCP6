import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"

import Home from "./pages/Home/Home"
import FicheLogement from './pages/FicheLogement/FicheLogement'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import "./App.css"


function App() {


  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche/:id" element={<FicheLogement  />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App