import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from "next/image"
import Link from "next/link"

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Sequoia Cafe",
      "北美森林咖啡",
    ],
    loop: true,
    delaySpeed: 4000
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tT1_9pw35a8lFHILDH7WrEcbNBYzZD82FQ&usqp=CAU" 
        width={200} 
        height={200} 
        alt="" 
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Hankai Academy
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#menu">
            <button className="heroButton">Menu</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
