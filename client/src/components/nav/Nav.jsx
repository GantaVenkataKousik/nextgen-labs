import React from 'react'
import './nav.css'
import Tags from './components/Tags' // Import the 'Tags' component
import SearchProfile from './components/SearchProfile' // Import the 'SearchProfile' component

function Nav () {
  return (
    <nav className='nav container'>
      <ul className='elements'>
        <div className='logo'>
          <i class='fa-solid fa-dna'></i>
        </div>
        <Tags />
        <SearchProfile />
      </ul>
    </nav>
  )
}

export default Nav
