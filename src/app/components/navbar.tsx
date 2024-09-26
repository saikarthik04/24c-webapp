import { Anton } from 'next/font/google';
import React from 'react'
const AntonFont =  Anton({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
  display:"swap",
  style:"normal"
});
const Navbar = () => {
  return (
    <nav className='flex flex-row items-center justify-evenly py-5 sticky'>
      {/* brand logo */}
      <div className={` ${AntonFont.className}`}>
        <h1 className='text-5xl'>24°</h1></div>
      <ul className='text-sm font-medium flex gap-3 cursor-pointer'>
        <li className='uppercase'>men</li>
        <li className='uppercase'>women</li>
        <li className='uppercase'>kids</li>
        <li className='uppercase'>accessories</li>
      </ul>
    </nav>
  )
}

export default Navbar