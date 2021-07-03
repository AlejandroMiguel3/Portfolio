import Typewriter from 'typewriter-effect'
import { gsap, Power3 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

function About() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.from('.skill-title .skill-desc', {
      scrollTrigger: {
        trigger: '.skill-set',
        start: 'top 70% center',
        // markers: true,
        // toggleActions: 'restart none none none',
      },
      duration: 1.2,
      y: 200,
      ease: Power3.easeOut,
      delay: 0,
      skewY: 10,
      stagger: {
        amount: 1,
      },
    })
  }, [])

  return (
    <section className='container container-about'>
      <h1>
        <span className='color__orange'>.about</span>
        <span className='color__yellow'> &#123;</span>
      </h1>
      <div className='row'>
        <div className='col-md-5 offset-md-1'>
          <br></br>
          <p>
            I’m a Front-End Developer located in Taguig, Philippines. I have a
            serious passion on frontend staff like UI, animations, and dynamic
            user experiences.
          </p>
          <br></br>
          <p>
            Creative visionary, problem solver, committed to self-development.
            Fan of anime, volleyball, TV series, Music and Movies.
          </p>
          <br></br>
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
          </p>
          <br></br>
        </div>
        <div className='col-md-5 offset-md-1'>
          <br></br>
          <div className='wrapper skill-set'>
            <div className='skill-title'>
              <h1 className='skill-desc'>
                <span className='color__yellow'>JS</span> vanilla
              </h1>
            </div>
            <div className='skill-title'>
              <h1 className='skill-desc'>
                <span className='color__yellow'>JS</span> react
              </h1>
            </div>
            <div className='skill-title'>
              <h1 className='skill-desc'>
                <span className='color__orange'>&#60;&#62;</span> html
              </h1>
            </div>
            <div className='skill-title'>
              <h1 className='skill-desc'>
                <span className='color__blue'>&nbsp;&#35;</span> css
              </h1>
            </div>
            <div className='skill-title'>
              <h1 className='skill-desc'>
                <span className='color__yellow'>JS</span> gsap
              </h1>
            </div>
            <div className='skill-title'>
              <h1 className='skill-desc'>
                <span className='color__yellow'>&#123;&#125;</span> json
              </h1>
            </div>
            <div className='skill-title'>
              <h1 className='skill-desc'>
                <span className='color__yellow'>JS</span> es6
              </h1>
            </div>
            <div className='skill-title'>
              <h1 className='skill-desc'>
                <span className='color__pink'>&nbsp;S</span> sass
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <h1 className='color__yellow col-md-1 offset-md-0'> &#125;</h1>
        <div className='col col-md-11 offset-md-0'>
          <p className='color__grey'>
            <Typewriter
              options={{
                pauseFor: 2000,
                delay: 500,
              }}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(300)
                  .typeString('// do what you love <br>')
                  .typeString('// love what you do')
                  .start()
              }}
            />
          </p>
        </div>
      </div>
    </section>
  )
}
export default About
