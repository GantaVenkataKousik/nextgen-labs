import React from 'react'
import './style.css'
import Component from './Components/Component'
import ScrollBtn from './Components/ScrollBtn'
import './responsive.css'

function CaseStudies () {
  return (
    <>
      <div className='CaseStudies'>
        <h1>Case Studies</h1>
        <div className='components'>
          <Component></Component>
          <Component></Component>
          <ScrollBtn></ScrollBtn>
        </div>
      </div>
    </>
  )
}

export default CaseStudies
