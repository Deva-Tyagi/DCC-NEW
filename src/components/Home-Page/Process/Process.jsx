import React from 'react'
import './Process.css'
import process from "../../Images/process.gif";

const Process = () => {
  return (
    <>
      <section className='our-process'>
        <div className='service-area'>
          <h2 style={{color:'#ff4500', fontFamily:"'Montserrat' serif", fontOpticalSizing:"auto",fontWeight:"bold" }} >Our Approach</h2>
          <p className='approach-description'>Unlock your true potential, leverage the best of technology, and create applications based on a modern algorithm with our experts.</p>
        </div>
        <div className='process-img'>
          <img src={process} alt='Process illustration' />
        </div>
      </section>
    </>
  )
}

export default Process;