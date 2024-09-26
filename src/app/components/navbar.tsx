"use client"
import { Anton } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { usePathname } from 'next/navigation';
const AntonFont =  Anton({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
  display:"swap",
  style:"normal"
});
const Navbar = () => {
  const currentPathName=usePathname();
  console.log(currentPathName)
  return (
    <nav className='flex flex-row items-center justify-evenly py-5 sticky top-0 border-b-2 border-b-zinc-950 bg-slate-50 z-40'>
      {/* brand logo */}
      <div className={` ${AntonFont.className}`}>
        <Link href="/"><h1 className='text-5xl'>24°</h1></Link></div>
      <ul className='text-sm font-medium flex gap-3 cursor-pointer'>
        <li className='uppercase'>men</li>
        <li className='uppercase'>women</li>
        <li className='uppercase'>kids</li>
        <li className='uppercase'>bags</li>
        <li className='uppercase'>jewellery</li>
      </ul>
      { currentPathName == "/login" ? "":
      <Link href="/login">
        <FaRegUserCircle className='text-3xl'/></Link>
      }
    </nav>
  )
}

export default Navbar