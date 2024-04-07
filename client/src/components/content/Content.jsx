import React from 'react'
import Cone from './cone/Cone.jsx'
import Ctwo from './ctwo/Ctwo.jsx'
import './responsive.css'
import './style.css'
import TrustedCompanies from './TrustedCompanies/TrustedCompanies.jsx'

function Content () {
  return (
    <>
      <div className='content'>
        <Cone></Cone>
        <Ctwo></Ctwo>
      </div>
      <TrustedCompanies></TrustedCompanies>
    </>
  )
}

export default Content
