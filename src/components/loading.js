import React, { useEffect } from 'react'
import { gsap, Power3 } from 'gsap'
import Typewriter from 'typewriter-effect'

function Loading() {
  useEffect(() => {
    const textrev = gsap.timeline()

    textrev.from('.line .line-paragraph', {
      duration: 1.2,
      y: 200,
      ease: Power3.easeOut,
      delay: 0,
      skewY: 10,
      stagger: {
        amount: 0.4,
      },
    })

    setTimeout(() => {
      const exit = gsap.timeline()

      exit.to('.line .line-paragraph', {
        duration: 1,
        y: 200,
        ease: Power3.easeIn,
        delay: 0,
        skewY: 10,
        stagger: {
          amount: 0.4,
        },
      })
    }, 6800)
  }, [])

  return (
    <section
      className='container d-flex align-items-center'
      style={{ height: '100vh' }}
    >
      <div className='loading-content break-word wrapper'>
        <div className='line'>
          <p className='line-paragraph'>
            <span className='color__violet'>const </span>
            <span className='color__yellow'>name </span>
            <span className='color__blue'>&#61; </span>
            <span className='color__green'>'Alejandro Miguel III'</span>
          </p>
        </div>
        <div className='line'>
          <p className='line-paragraph'>
            <span className='color__violet'>const </span>
            <span className='color__blue'>develop </span>
            <span className='color__blue'>&#61; </span>
            <span className='color__yellow'>&#40; </span>
            <span className='color__red'>frontEnd</span>,
            <span className='color__red'> UI </span>
            <span className='color__yellow'>&#41; </span>
            <span className='color__violet'>&#61;&#62; </span>
            <span className='color__yellow'>&#123; </span>
          </p>
        </div>

        <article className='line'>
          <p className='line-loading color__grey px-3'>
            <Typewriter
              options={{
                pauseFor: 2000,
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('//luading...')
                  .pauseFor(300)
                  .deleteChars(9)
                  .typeString('oaDin')
                  .pauseFor(100)
                  .deleteChars(3)
                  .typeString('ding...')
                  .pauseFor(100)
                  .deleteAll()
                  .start()
              }}
            />
          </p>
        </article>

        <div className='line'>
          <p className='line-paragraph'>
            <span className='color__yellow'>&#125; </span>
          </p>
        </div>
      </div>
    </section>
  )
}
export default Loading
