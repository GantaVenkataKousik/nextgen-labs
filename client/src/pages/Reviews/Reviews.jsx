import React from 'react'
import './style.css'
import './responsive.css'
import Review from './Review'
import ScrollBtns from '../../components/ScrollBtns/ScrollBtns'

function Reviews() {
  return (
    <>
      <div className='Reviews'>
        <h1>Feedback by our customers</h1>
        <h3>
          Your response means a lot to us to , your appreciatio really boost out
          confidence to work even <br></br> hard and correct out mistakes.
        </h3>
        <div className='regions'>
          <div>All</div>
          <div className='active'>India</div>
          <div>USA</div>
          <div>China</div>
          <div>Japan</div>
        </div>
        <div className='patients-reviews'>
          <Review></Review>
          <Review></Review>          <Review></Review>
          <Review></Review>
          <Review></Review>          <Review></Review>
          <Review></Review>
          <Review></Review>
        </div>
        <ScrollBtns></ScrollBtns>
      </div>
    </>
  )
}

export default Reviews
