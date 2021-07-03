import { gsap, Power3 } from 'gsap'
import React, { useEffect } from 'react'

function Navbar() {
  const headline = gsap.timeline()

  useEffect(() => {
    headline.from('.navbar', {
      duration: 1.2,
      y: -200,
      ease: Power3.easeOut,
      delay: 0,
      stagger: {
        amount: 0.4,
      },
    })
  }, [])
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container d-flex justify-content-between'>
        <a className='navbar-brand color__yellow'></a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='color__white'>•••</span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav g-5'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page'>
                .skills
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>.works</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>.contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
