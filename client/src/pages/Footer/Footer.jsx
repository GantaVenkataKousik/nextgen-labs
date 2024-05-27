import React from 'react'
import './style.css'
import './responsive.css'

function Footer() {
  return (
    <>
      <div className='Footer'>
        <section className='sec1'>
          <h1>Subscribe to our Newsletter</h1>
          <h3>to stay up to date on all the lastest updates </h3>
          <div className='subscribe'>
            <input placeholder='Enter your email address'></input>
            <button>Subscribe</button>
          </div>
        </section>
        <section className='sec2'>
          <div>
            <h3>contact us : </h3>
            <p>E : Info@GVKBites.cpm</p>
            <p className='sec'>P : 02 4567 7895</p>
          </div>
          <div></div>
          <div>
            <h3>Office address : </h3>
            <p>Unit 11/6-8 Allen opp </p>
            <p className='sec'>street , Miyapur</p>
          </div>
          <div></div>
          <div>
            <h3>Office opening timings : </h3>
            <p>Monday to Saturday</p>
            <p className='sec'>P : 02 4567 7895</p>
          </div>
        </section>
        <section className='sec3'>
          <div>
            <h3>Categories :</h3>
            <p>Experimentation</p>
          </div>
          <div></div>
          <div>
            <h3>Resources : </h3>
            <p>warranty policy </p>
            <p>Shipping and Return Policy</p> <p>warranty policy </p>
            <p>Shipping and Return Policy</p>
          </div>{' '}
          <div></div>
          <div>
            <h3>Follow us on</h3>
            <p>Facebook </p>
            <p>Instagram</p> <p>Twitter</p>
          </div>
          <div></div>
          <div>
            <h3>Accepted payments : </h3>
            <div className='payment'>
              <img src='./assets/images/payments/pay.png'></img>
            </div>
          </div>
        </section>
        <section className='sec4'>
          <p>Made with  ❤  by   GantaVenkataKousik </p>
        </section>
      </div>
    </>
  )
}

export default Footer
