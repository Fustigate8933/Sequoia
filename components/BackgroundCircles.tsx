import React from 'react'
import { motion } from "framer-motion"

function BackgroundCircles() {
  return (
    <motion.div 
      initial={{ 
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.3, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#a8a0a0] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 absolute" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
    </motion.div>
  )
}

export default BackgroundCircles