import React from 'react';
import './responsive.css';

function Review({ review }) {
  return (
    <div className='Review'>
      <img src='/person_icon.png' alt={`${review.name}'s review`} />
      <h2 className='username'>{review.name}</h2>
      <h3 className='role'>{review.role}</h3>
      <div className='rating'>
        {[...Array(Math.floor(review.rating))].map((_, index) => (
          <i key={index} className='fa-solid fa-star'></i>
        ))}
        {review.rating % 1 > 0 && <i className='fa-solid fa-star-half-stroke'></i>}
        <span className='ratingNum'>{review.rating}/5.0</span>
      </div>
      <div className='review'>
        {review.comment}
      </div>
    </div>
  );
}

export default Review;
