"use client"
import React from "react";
import Image from "next/image";
import { Anton } from "next/font/google";
import { motion } from "framer-motion";
const AntonFont =  Anton({
    subsets: ["latin"],
    weight: ["400"],
    preload: true,
    display:"swap",
    style:"normal"
  });
const Hero = () => {
  return (
    <>
      <div className="p-2 relative">

        <Image
          src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height={20}
          width={1512}
          alt="hero"
        ></Image>
        {/* <Image src="https://images.unsplash.com/photo-1638959882980-906e24520fe5?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={20} width={1620} alt="hero"></Image> */}
  
          <div className={`${AntonFont.className}`}>
            <h1 className="text-center intro-text text-purple-600 absolute opacity-60">24°</h1>
          </div>
      </div>
    </>
  );
};

export default Hero;
