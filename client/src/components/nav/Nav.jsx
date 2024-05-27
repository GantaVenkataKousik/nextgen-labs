import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-scroll'
import SearchProfile from './components/SearchProfile'

function Nav() {

  const playSound = () => {
    const audio = new Audio('/sounds/buttonClick.mp3');
    audio.play();
  };
  const [showMenu, setShowMenu] = new useState(false)

  const toggleMenu = () => {
    const audio = new Audio('/sounds/hover_quest.wav');
    audio.play();
    setShowMenu(!showMenu)
  }
  return (
    <>
      <nav className='nav container'>
        <ul className='elements'>
          <div className='logo'>
            <i class='fa-solid fa-dna'></i>
          </div>
          <div className='tags'>
            <Link to='home' smooth={true} duration={1000} onClick={playSound} className='active'>
              Home
            </Link>
            <Link to='about' smooth={true} duration={1000} onClick={playSound}>
              About
            </Link>
            <Link to='caseStudies' smooth={true} duration={2000} onClick={playSound}>
              Case Studies
            </Link>
            <Link to='contact' smooth={true} duration={3000} onClick={playSound}>
              Contact
            </Link>
          </div>
          <SearchProfile />
        </ul>
      </nav>
      <nav className='nav-responsive'>
        <div className='logo'>
          <i className='fa-solid fa-dna'></i>
          <div
            className={`menu-toggle ${showMenu ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <i className={`fa-solid ${showMenu ? 'fa-xmark' : 'fa-bars'}`}></i>
          </div>
        </div>

        {showMenu && (
          <ul className='responsive-menu'>
            <div className='tags show'>
              <Link to='home' smooth={true} duration={1000} onClick={playSound} className='active'>
                Home
              </Link>
              <Link to='about' smooth={true} duration={1000} onClick={playSound}>
                About
              </Link>
              <Link to='caseStudies' smooth={true} duration={2000} onClick={playSound}>
                Case Studies
              </Link>
              <Link to='contact' smooth={true} duration={3000} onClick={playSound}>
                Contact
              </Link>
            </div>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Nav
