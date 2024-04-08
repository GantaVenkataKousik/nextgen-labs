import React from 'react'
import './style.css'
import DesignOne from '../../../designs/designOne/DesignOne'

function ImageCon () {
  return (
    <div className='ImageCon'>
      <img src='./assets/images/home/1.jpg'></img>
      <div className='img-done'>
        {' '}
        <DesignOne> </DesignOne>
      </div>
      <div className='img-dtwo'>
        {' '}
        <DesignOne> </DesignOne>
      </div>
    </div>
  )
}

export default ImageCon
