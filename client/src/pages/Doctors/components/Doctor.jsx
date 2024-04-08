import React from 'react'
import './style.css'
import ReactStars from 'react-stars'

function Doctor () {
  return (
    <>
      <div className='Doctor'>
        <div className='image'>
          <img src='./assets/images/doctors/d1.png'></img>{' '}
        </div>{' '}
        <div className='info'>
          <h2 className='name'>Alessandro</h2>
          <h4 className='study'>An neuro surgeon</h4>
          <div className='rating'>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
          </div>
          <p className='mainInfo'>
            In the vast expanse of the cosmos, stars dance in celestial ballets
          </p>
        </div>
      </div>
    </>
  )
}

export default Doctor
