import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import Nav from './components/nav/Nav'
import About from './pages/About/About'
import CaseStudies from './pages/CaseStudies/CaseStudies'
import Doctors from './pages/Doctors/Doctors'
import Branches from './pages/Branches/Branches'
import Founder from './pages/Founder/Founder'
import Footer from './pages/Footer/Footer'
import Reviews from './pages/Reviews/Reviews'

function App () {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div id={`${showMenu ? 'appshow' : 'app'}`}>
      <Nav toggleMenu={toggleMenu} showMenu={showMenu} />
      <Home />
      <About />
      <CaseStudies />
      <Doctors></Doctors>
      <Branches></Branches>

      <Reviews></Reviews>
      <Founder></Founder>
      <Footer></Footer>
    </div>
  )
}

export default App
