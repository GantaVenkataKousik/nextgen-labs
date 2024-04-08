import React from 'react'
import './style.css'
import './responsive.css'
import Doctor from './components/Doctor'
import ScrollButton from './components/ScrollButton'
import ScrollBtns from '../../components/ScrollBtns/ScrollBtns'

function CaseStudies () {
  return (
    <>
      <div className='Doctors'>
        <h1>
          Meet our Marvellous Doctors <br></br>the backbones of our success
        </h1>

        <h3>
          without you there is no us out restaurant , our succes or anything .
          Always grateful for their <br></br> Loyalty and hardwork making us
          even more bigger .
        </h3>
        <div className='doctorsInfo'>
          <Doctor></Doctor>
          <div></div>
          <Doctor></Doctor>
          <div></div>
          <Doctor></Doctor>
        </div>
        <ScrollBtns></ScrollBtns>
      </div>
    </>
  )
}

export default CaseStudies
