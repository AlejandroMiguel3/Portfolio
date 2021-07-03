import { gsap, Power3 } from 'gsap'
import React, { useEffect } from 'react'
import { Link } from 'react-scroll'

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
    <nav className='navbar navbar-expand-lg' id='home'>
      <div className='container d-flex justify-content-between'>
        <div></div>
        <div className='' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item' style={{ cursor: 'pointer' }}>
              <Link to='about' spy={true} offset={-50}>
                <span className='nav-link'>.about</span>
              </Link>
            </li>
            <li className='nav-item' style={{ cursor: 'pointer' }}>
              <Link to='works-section' spy={true} offset={-50}>
                <span className='nav-link'>.works</span>
              </Link>
            </li>
            <li className='nav-item' style={{ cursor: 'pointer' }}>
              <Link to='contact' spy={true} offset={-50}>
                <span className='nav-link'>.contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
