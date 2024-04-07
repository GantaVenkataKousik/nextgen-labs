import React from 'react'
import Cone from './cone/Cone.jsx'
import Ctwo from './ctwo/Ctwo.jsx'
import './responsive.css'
import './style.css'

function Content () {
  return (
    <>
      <div className='content'>
        <Cone></Cone>
        <Ctwo></Ctwo>
      </div>
    </>
  )
}

export default Content
