import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import FicheLogement from './pages/FicheLogement/FicheLogement'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement" element={<FicheLogement />} />
          <Route path="/error404" element={<Error />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App