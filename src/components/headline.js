import { gsap, Power3 } from 'gsap'
import React, { useEffect } from 'react'

function Headline() {
  useEffect(() => {
    const headline = gsap.timeline()

    headline.from('.headline .headline-paragraph', {
      duration: 1.2,
      y: 200,
      ease: Power3.easeOut,
      delay: 0,
      skewY: 10,
      stagger: {
        amount: 0.4,
      },
    })
  })

  return (
    <div className='container headline-content wrapper'>
      <div className='headline'>
        <h1 className='headline-paragraph'>
          <span>Hi! I am </span>
          <span className='color__red'>Miguel. </span>
        </h1>
      </div>
      <div className='headline'>
        <h1 className='headline-paragraph'>
          <span>I build interactive websites that run </span>
        </h1>
      </div>
      <div className='headline'>
        <h1 className='headline-paragraph'>
          <span>across platforms & Devices.</span>
        </h1>
      </div>
    </div>
  )
}

export default Headline
