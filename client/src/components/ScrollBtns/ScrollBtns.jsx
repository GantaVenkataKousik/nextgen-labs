import React from 'react'
import './style.css'

function ScrollBtns({ doctorsInfoRef }) {
  const scrollLeft = () => {
    doctorsInfoRef.current.scrollBy({ left: -450, behavior: 'smooth' });
  }

  const scrollRight = () => {
    doctorsInfoRef.current.scrollBy({ left: 450, behavior: 'smooth' });
  }

  return (
    <div className='scroll-buttons'>
      <div className='buttons'>
        <div className='left button' onClick={scrollLeft}>
          <i className='fa-solid fa-play' style={{ transform: 'rotate(180deg)' }}></i>
        </div>
        <div className='right button' onClick={scrollRight}>
          <i className='fa-solid fa-play'></i>
        </div>
      </div>
    </div>
  )
}

export default ScrollBtns
