import React, { useRef, useState } from 'react';
import './responsive.css';
import Review from './Review';
import './style.css';
import reviewsData from './reviewsData';


function Reviews() {
  const reviewsInfoRef = useRef(null);
  const scrollLeft = () => {
    reviewsInfoRef.current.scrollBy({ left: -450, behavior: 'smooth' });
  }

  const scrollRight = () => {
    reviewsInfoRef.current.scrollBy({ left: 450, behavior: 'smooth' });
  }

  const [selectedRegion, setSelectedRegion] = useState('all');

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div className='Reviews'>
      <h1>Feedback by our customers</h1>
      <h3>
        Your response means a lot to us to, your appreciation really boosts our confidence to work even harder and correct our mistakes.
      </h3>
      <div className='regions'>
        {Object.keys(reviewsData).map((region) => (
          <div
            key={region}
            className={selectedRegion === region ? 'active' : ''}
            onClick={() => handleRegionClick(region)}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </div>
        ))}
      </div>
      <div className='patients-reviews' ref={reviewsInfoRef}>
        {reviewsData[selectedRegion].map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
      <div className='scroll-buttons'>
        <div className='buttons'>
          <div className='left button' onClick={scrollLeft}>
            <i className='fa-solid fa-play' style={{ transform: 'rotate(180deg)' }}></i>
          </div>
          <div className='right button' onClick={scrollRight}>
            <i className='fa-solid fa-play'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
