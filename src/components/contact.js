import { gsap, Power3 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

function Contact() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.from('.contact-title .contact-desc', {
      scrollTrigger: {
        trigger: '.contact-content',
        start: 'top 70% center',
      },
      duration: 1.2,
      y: 200,
      ease: Power3.easeOut,
      delay: 0,
      skewY: 10,
      stagger: {
        amount: 0.5,
      },
    })
  }, [])
  return (
    <>
      <section className='container container-contact'>
        <h1>
          <span className='color__orange'>.contact</span>
          <span className='color__yellow'> &#123;</span>
        </h1>
        <br></br>
        <div className='row contact-hover contact-content wrapper'>
          <div className='col-md-9 offset-md-1 contact-title'>
            <div className='d-flex flex-column'>
              <div className='contact-title'>
                <h1 className='contact-desc'>
                  <span>I'm always interested </span>
                </h1>
              </div>
              <div className='contact-title'>
                <h1 className='contact-desc'>
                  <span>about cool stuff.</span>
                </h1>
              </div>
              <div className='contact-title'>
                <h1 className='contact-desc'>
                  <span>Are you minding a project?</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <h1 className='color__yellow col-md-1 offset-md-0'> &#125;</h1>
      </section>
      <a
        href="mailto:migueljr.alejandro190@gmail.com?subject=Let's&nbsp;Talk"
        class='marquee'
      >
        <div class='marquee__inner'>
          <span>let's talk</span>
          <span>let's talk</span>
          <span>let's talk</span>
          <span>let's talk</span>
        </div>
      </a>
    </>
  )
}
export default Contact
