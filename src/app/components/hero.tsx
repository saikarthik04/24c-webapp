"use client"
import React from "react";
import Image from "next/image";
import { Anton } from "next/font/google";
const AntonFont =  Anton({
    subsets: ["latin"],
    weight: ["400"],
    preload: true,
    display:"swap",
    style:"normal"
  });
const Hero = () => {
  return (
    <div className={`${AntonFont.className}`}>
      <div className="p-2 container">
        <Image
          src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height={900}
          width={1480}
          alt="hero"
        ></Image>
        {/* <Image src="https://images.unsplash.com/photo-1638959882980-906e24520fe5?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={20} width={1620} alt="hero"></Image> */}
            <h1 className=" intro-text text-purple-600 opacity-60">24°</h1>
      </div>
    </div>
  );
};

export default Hero;
