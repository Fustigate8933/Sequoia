import React from 'react'
import { motion } from "framer-motion"

function Skills() {
  return (
    <motion.div className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for currency profiency</h3>
    </motion.div>
  )
}

export default Skills
