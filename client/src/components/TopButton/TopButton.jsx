import React, { useState } from 'react'
import Link from 'react-scroll'
import './style.css'

function TopButton () {
  return (
    <>
      <div className='btn'>
        <Link to='home' smooth={true} duration={3000}>
          <i className='fa-solid fa-play'></i>
        </Link>
      </div>
    </>
  )
}

export default TopButton
