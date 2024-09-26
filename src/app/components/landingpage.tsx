import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
const Landingpage=() => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='grid grid-flow-row md:grid-cols-1 lg:grid-cols-2 gap-2'>
    </div>
    </>
  )
}

export default Landingpage