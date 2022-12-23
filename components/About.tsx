import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      transition={{ duration: 1.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly
      mx-auto items-center pt-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img 
        src="https://i.ibb.co/HxZ65t7/Screenshot-2022-12-21-191023.jpg"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-63 rounded-full object-cover md:rounded-lg md:h-95 xl:w-[500px] xl-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">About <span className="underline decoration-[#F7AB0A]/50">Sequoia</span> Cafe</h4>
        <p className="text-base">Description goes here.</p>
      </div>    
    </motion.div>
  )
}

export default About