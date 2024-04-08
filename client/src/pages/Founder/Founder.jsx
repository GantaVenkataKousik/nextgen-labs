import React from 'react'
import './style.css'

function Founder () {
  return (
    <>
      <div className='Founder'>
        <h1>Founder & CEO of this Labs</h1>

        <h3 className='tag'>
          Our Emperor K.M. Sridevi always thinks of serving the best to the
          people <br></br> her guidance and supervision is the main reason
          behind all this
        </h3>
        <div className='founderDetails'>
          <div></div>
          <div className='founder'>
            <img src='./assets/images/founder/sridevi.png'></img>
            <div className='info'>
              <h2>K.M. Sridevi</h2>
              <h2>Founder & CEO</h2>
              <h3>Expert in Neuro Science</h3>
            </div>
          </div>
          <div></div>
          <div className='motive'>
            <div className='content'>
              <p>
                My principle is simple I don't want profits , what I want is
                trust and support from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Founder
