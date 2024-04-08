import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import Nav from './components/nav/Nav'
import About from './pages/About/About'

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
    </div>
  )
}

export default App
