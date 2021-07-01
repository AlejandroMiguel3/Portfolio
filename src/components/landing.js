import React, { useState, useEffect, useRef } from 'react'
import windowSize from '../hooks/useWindowSize'
import Loading from './loading'
import Home from './home'

function Landing() {
  const [loading, setLoading] = useState(false)
  const size = windowSize()

  const app = useRef()
  const scrollContainer = useRef()

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`
  }

  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100

    // Difference between
    const difference = data.current - data.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 7.5

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`

    //loop vai raf
    requestAnimationFrame(() => skewScrolling())
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

      requestAnimationFrame(() => skewScrolling())
      setBodyHeight()
    }, 8000)
  }, [])

  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div ref={app} className='app'>
      <div ref={scrollContainer} className='scroll'>
        <Home></Home>
      </div>
    </div>
  )
}
export default Landing
