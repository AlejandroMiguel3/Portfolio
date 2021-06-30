import React, { useState, useEffect, useRef } from 'react'
import Loading from './loading'
import Home from './home'
import useWindowSize from '../hooks/useWindowSize'

function Landing() {
  const [loading, setLoading] = useState(false)

  //skewscrolling
  const app = useRef()
  const scrollContainer = useRef()
  const size = useWindowSize()
  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

      requestAnimationFrame(() => skewScrolling())
    }, 8000)
  }, [])

  useEffect(() => {
    if (!loading) {
      console.log(scrollContainer.current.getBoundingClientRect())
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`
    }
    return
  }, [])

  // useEffect(() => {
  // }, [])

  const skewScrolling = () => {
    //Set Current to the scroll position amount
    skewConfigs.current = window.scrollY
    // Set Previous to the scroll previous position
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
    // Set rounded to
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100

    // Difference between
    const difference = skewConfigs.current - skewConfigs.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 7.5

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`

    //loop vai raf
    requestAnimationFrame(() => skewScrolling())
  }

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div ref={app} className='app'>
          <div ref={scrollContainer} className='scroll'>
            <Home></Home>
          </div>
        </div>
      )}
    </>
  )
}
export default Landing
