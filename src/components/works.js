import { gsap, Power3 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

function Works() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from('.line .line-paragraph', {
      scrollTrigger: {
        trigger: '.klase-top',
        start: 'top 85% center',
      },
      duration: 1.2,
      y: 200,
      ease: Power3.easeOut,
      delay: 0,
      skewY: 10,
      stagger: {
        amount: 0.2,
      },
    })
    gsap.from('.enc-title .enc-desc', {
      scrollTrigger: {
        trigger: '.enc-container',
        start: 'top 85% center',
      },
      duration: 1.2,
      y: 200,
      ease: Power3.easeOut,
      delay: 0,
      skewY: 10,
      stagger: {
        amount: 0.2,
      },
    })
    gsap.from('.klase-title .klase-desc', {
      scrollTrigger: {
        trigger: '.klase-container',
        start: 'top 85% center',
      },
      duration: 1.2,
      y: 200,
      ease: Power3.easeOut,
      delay: 0,
      skewY: 10,
      stagger: {
        amount: 0.2,
      },
    })
  }, [])

  return (
    <section className='container container-works' id='works-section'>
      <h1>
        <span className='color__orange'>.works</span>
        <span className='color__yellow'> &#123;</span>
      </h1>
      <br></br>
      <div className='works-container '>
        <div className='row klase-top'>
          <div className='col order-left wrapper text'>
            <a
              className='col-md-0 offset-md-3 line work-links'
              href='https://www.klase.cf/'
              target='_blank'
            >
              <h1 className='line-paragraph'>
                <span>klase: </span>
              </h1>
            </a>
            <div className='col-md-0 offset-md-3 line'>
              <p className='line-paragraph'>
                <span className='color__grey'>
                  &#47;&#42; e-learning web application &#42;&#47;
                </span>
              </p>
            </div>
          </div>
          <div className='project-container col-md-7 offset-md-0'>
            <a href='https://www.klase.cf/' target='_blank'>
              <div className='klase-tumbnail tumbnail-size tumbnail-top'>
                &nbsp;
              </div>
            </a>
          </div>
        </div>
        <div className='row enc-container'>
          <div className='project-container col-md-7 offset-md-0'>
            <a href='https://encryptee.ga/public/' target='_blank'>
              <div className='encryptee-tumbnail tumbnail-size'>&nbsp;</div>
            </a>
          </div>
          <div className='col wrapper text'>
            <a
              className='col-md-0 offset-md-2 enc-title work-links'
              href='https://encryptee.ga/public/'
              target='_blank'
            >
              <br></br>
              <h1 className='line-paragraph enc-desc'>
                <span>encryptee: </span>
              </h1>
            </a>
            <div className='col-md-0 offset-md-2 enc-title'>
              <p className='line-paragraph enc-desc'>
                <span className='color__grey'>
                  &#47;&#42; e-commerce web application &#42;&#47;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='row tumbnail-bottom klase-container'>
          <div className='col order-left wrapper mobile-top text'>
            <a
              className='col-md-0 offset-md-2 klase-title work-links'
              href='https://anydo.ml/'
              target='_blank'
            >
              <h1 className='klase-desc'>
                <span>anydo: </span>
              </h1>
            </a>
            <div className='col-md-0 offset-md-2 klase-title'>
              <p className='klase-desc'>
                <span className='color__grey'>
                  &#47;&#42;simple task <br></br>management &#42;&#47;{' '}
                </span>
              </p>
            </div>
          </div>
          <div className='project-container col-md-7 offset-md-0'>
            <a href='https://anydo.ml/' target='_blank'>
              <div className='anydo-tumbnail tumbnail-size'>&nbsp;</div>
            </a>
          </div>
        </div>
      </div>
      <br />
      <h1 className='color__yellow col-md-1 offset-md-0'> &#125;</h1>
    </section>
  )
}
export default Works
