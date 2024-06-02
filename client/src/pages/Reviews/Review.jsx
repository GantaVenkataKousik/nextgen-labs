import React from 'react'
import './style.css'
import './responsive.css'

function Review() {
  return (
    <>
      <div className='Review'>
        <div className='dp'>
          <img src='./assets/images/reviews/m3.jpg'></img>
          <div className='user'>
            <h2>G.VenkataKousik</h2>
            <h3>Full Stack Developer</h3>
          </div>
        </div>
        <div className='rating'>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
          <span className='ratingNum'>4.0/5.0</span>
        </div>
        <div className='review'>
          Loved their hospitality , the resulat that I got there was the best in
          my life. The discounts are very high compared to other restaurants .
          The order was given in no time , the waiting time is very less .{' '}
        </div>
      </div>
    </>
  )
}

export default Review
