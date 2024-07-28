import React from 'react'
import './style.css'
import Component from './Components/Component'
import ScrollBtns from '../../components/ScrollBtns/ScrollBtns'
import './responsive.css'

function CaseStudies() {
  return (
    <>
      <div className='CaseStudies'>
        <h1>Case Studies</h1>
        <div className='components'>
          <Component></Component>
          <Component></Component>
          <Component></Component>
        </div>
      </div>
    </>
  )
}

export default CaseStudies
