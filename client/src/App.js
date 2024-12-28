import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Element, Link } from 'react-scroll'
import Home from './pages/Home'
import Nav from './components/nav/Nav'
import About from './pages/About/About'
import CaseStudies from './pages/CaseStudies/CaseStudies'
import Doctors from './pages/Doctors/Doctors'
import Branches from './pages/Branches/Branches'
import Founder from './pages/Founder/Founder'
import Footer from './pages/Footer/Footer'
import Reviews from './pages/Reviews/Reviews'
import TopButton from './components/TopButton/TopButton'
import './topButton.css'

function App() {
  const playSound = () => {
    const audio = new Audio('/sounds/loud_btn_clk.wav');
    audio.play();
  };

  return (
    <div>
      <Nav />
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='caseStudies'>
        <CaseStudies />
      </Element>
      <Element>
        <Doctors />
      </Element>
      <Element>
        <Branches />
      </Element>
      <Element>
        <Reviews />
      </Element>
      <Element>
        <Founder />
      </Element>
      <Element name='contact'>
        <Footer />
      </Element>
    </div>
  )
}

export default App
