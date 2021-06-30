import Navbar from './nav'
import Headline from './headline'
import About from './about'
import Works from './works'
import React, { useRef } from 'react'

function Home() {
  return (
    <>
      <div className='app'>
        <div className='scroll'>
          <Navbar></Navbar>
          <Headline></Headline>
          <About></About>
          <Works></Works>
        </div>
      </div>
    </>
  )
}

export default Home
