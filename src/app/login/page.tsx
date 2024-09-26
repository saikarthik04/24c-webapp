"use client"
import React from 'react'
import {Input} from "@nextui-org/input";
import Image from 'next/image';
import contants from '@/utils/constants';
const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <div className='p-4 md:4 lg:w-2/6 w-screen'>
      <h2 className='py-5 text-xl font-light'>Welcome Back 🔥 
        <br></br>
        <p className='text-2xl sm:text-3xl font-bold'>Sign in to {contants.brandName}</p></h2>
    <div className="flex w-full flex-col flex-wrap md:flex-nowrap gap-4">
    <Input type="email" label="Email" />
    <Input type="password" label="Password" />
    {/* <Button color="secondary">
      Login
    </Button> */}
    <button type="button" className="py-3 bg-black hover:bg-white font-medium text-white hover:text-black  border-2 border-black transition-background ">
      login
    </button>
    <button type="button" className="py-3 bg-black hover:bg-white font-medium text-white hover:text-black border-2 border-black transition-background relative">
    <Image
                src="/assets/google-logo.svg"
                  alt="Google Icon" width={20} height={20}
                  className="absolute left-8 mt-0.5  md:left-20 sm:left-16 lg:left-24"
                />
    {"sign in with google"}
    </button>
    {/* <button type="button" className="py-3 bg-black hover:bg-white font-medium text-white hover:text-black border-2 border-black transition-background relative grid grid-cols-2 grid-rows-1 g">
    <FaApple className='text-xl'/>
    {"Sign In with Apple id"}
    </button> */}
    
    {/* <Button
                type="button"
                className="bg-black hover:bg-black text-white hover:text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center relative "
              >
                <Image
                src="/assets/google-logo.svg"
                  alt="Google Icon" width={20} height={20}
                  className="absolute md:left-20 sm:left-16"
                />
              </Button> */}
  </div>
  </div>
  </div>
  )
}

export default Login