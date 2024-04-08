import React from 'react'
import './style.css'
import DesignOne from '../../components/designs/designOne/DesignOne'
import './responsive.css'

function About () {
  return (
    <>
      <div className='about' id='about'>
        <h1>About</h1>
        <div className='about-content'>
          <div className='deone'>
            {' '}
            <DesignOne></DesignOne>
          </div>
          <div className='dtwo'>
            {' '}
            <DesignOne></DesignOne>
          </div>
          <p>
            We are trying our best to bring to bring you the services at very
            low cost possible . We are boosting our research work to complete as
            fast as possible . We are trying our best to bring to bring you the
            services at very low cost possible . We are boosting our research
            work to complete as fast as possible .{' '}
          </p>
          <br></br>
          <p>
            lorem ipsum dolor sit amet, consectetur adipl lorem lorem30 lorem
            ipsum dolor sit amet, consectetur adipl lorem lorem30 lorem ipsum
            dolor sit amet, consectetur adipl lorem lorem30 liorem ipsum dolor
            sit amet, consectetur adipl lorem lorem30 lorem ipsum dolor sit
            amet, consectetur adipl lorem lorem30 lorem ipsum dolor sit amet,
            consectetur adipl lorem lorem30 lorem ipsum dolor sit amet,
            consectetur adipl lorem lorem30 lorem ipsum dolor sit amet,
            consectetur adipl lorem lorem30 liorem ipsum dolor sit amet,
            consectetur adipl lorem lorem30 lorem ipsum dolor sit amet,
            consectetur adipl lorem lorem3 0
          </p>
          <br></br>
          <p>
            {' '}
            amet, consectetur adipl lorem lorem30 lorem ipsum dolor sit amet,
            consectetur adipl lorem lorem30 lorem ipsum dolor sit amet,
            consectetur adipl lorem lorem30 lorem ipsum dolor sit amet,
            consectetur adipl lorem lorem30 liorem ipsum dolor sit amet,
            consectetur adipl lorem lorem30 lorem ipsum dolor sit amet,
            consectetur adipl lorem lorem30
          </p>
        </div>
      </div>
    </>
  )
}

export default About
