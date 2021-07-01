import React, { useState, useEffect } from 'react'
import Loading from './loading'
import Home from './home'

function Landing() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return <>{loading ? <Loading></Loading> : <Home></Home>}</>
}
export default Landing
