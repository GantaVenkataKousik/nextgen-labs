import React, { useState } from 'react'
import './nav.css'
import Tags from './components/Tags'
import SearchProfile from './components/SearchProfile'

function Nav () {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
      <nav className='nav container'>
        <ul className='elements'>
          <div className='logo'>
            <i class='fa-solid fa-dna'></i>
          </div>
          <Tags />
          <SearchProfile />
        </ul>
      </nav>
      <nav className='nav-responsive '>
        <div className='logo'>
          <i className='fa-solid fa-dna'></i>
        </div>
        <div
          className={`menu-toggle ${showMenu ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <i className={`fa-solid ${showMenu ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
        {showMenu && (
          <ul className='responsive-menu'>
            <Tags />
            <li>
              <i className='fa-solid fa-user'></i>
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Nav
