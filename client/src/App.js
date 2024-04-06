import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import Nav from './components/nav/Nav'

function App () {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div id={`${showMenu ? 'appshow' : 'app'}`}>
      <Nav toggleMenu={toggleMenu} showMenu={showMenu} />
      <Home />
    </div>
  )
}

export default App
