import React, { useState, useEffect } from 'react'

function Works() {
  return (
    <section className='container'>
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
          <h1>
            <span className='color__yellow'>JS</span> vanilla
          </h1>
          <h1>
            <span className='color__yellow'>JS</span> react
          </h1>
          <h1>
            <span className='color__orange'>&#60;&#62;</span> html
          </h1>
          <h1>
            <span className='color__blue'>&nbsp;#</span> css
          </h1>
          <h1>
            <span className='color__yellow'>JS</span> gsap
          </h1>
          <h1>
            <span className='color__yellow'>&#123;&#125;</span> json
          </h1>
          <h1>
            <span className='color__yellow'>JS</span> es6
          </h1>
          <h1>
            <span className='color__pink'>&nbsp;S</span> sass
          </h1>
        </div>
      </div>
      <div className='row'>
        <h1 className='color__yellow col-md-1 offset-md-0'> &#125;</h1>
        <div className='col col-md-11 offset-md-0'>
          <p className='color__grey'>// do what you love</p>
          <p className='color__grey'>// love what you do</p>
        </div>
      </div>
    </section>
  )
}
export default Works
