import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
const Landingpage=() => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='grid grid-flow-row md:grid-cols-1 lg:grid-cols-2 gap-2'>
      {/* <div className='row-span-6'>
      <Image src="https://images.unsplash.com/photo-1632282003890-020318a49e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwzNjQ5Njc0N3x8ZW58MHx8fHx8" width={480} height={720} alt='bags'></Image>
        </div>
        <div className='row-span-6'>
      <Image src="https://images.unsplash.com/photo-1632282003890-020318a49e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwzNjQ5Njc0N3x8ZW58MHx8fHx8" width={480} height={720} alt='bags'></Image>
        </div> */}
    </div>
    </>
  )
}

export default Landingpage