import React, { useState } from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from "framer-motion"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { Coffee, Milktea, Other } from "../typings"

type Props = {
  coffees: Coffee[],
  milkteas: Milktea[],
  others: Other[]
}

function Experience({coffees, milkteas, others}: Props) {
  const coffees1 = coffees.slice(0, 4)
  const coffees2 = coffees.slice(4, 8)
  const others1 = others.slice(0, 4)
  const others2 = others.slice(4, 6)

  const [coffeescount1, setCoffeescount1] = useState(Array.from({length: 18}, () => 0))
  const [coffeescount2, setCoffeescount2] = useState(Array.from({length: 18}, () => 0))
  const [milkteascount, setMilkteascount] = useState(Array.from({length: 18}, () => 0))
  const [otherscount1, setOtherscount1] = useState(Array.from({length: 18}, () => 0))
  const [otherscount2, setOtherscount2] = useState(Array.from({length: 18}, () => 0))

  const slideLeft = () => {
    const slider = document.getElementById('slider')
    if (slider !== null){
      slider.scrollLeft -= 500
    }
  }

  const slideRight = () => {
    const slider = document.getElementById('slider')
    if (slider !== null){
      slider.scrollLeft += 500
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      transition={{ duration: 1.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">MENU</h3>
      <MdChevronLeft className="invisible md:visible hover:cursor-pointer opacity-50 hover:opacity-100 mr-2" onClick={slideLeft} size={30} />
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-full whitespace-nowrap scroll-smooth scrollbar-track-rounded-full" id="slider">
        <ExperienceCard item={coffees1} title="Coffee" change={setCoffeescount1} arr={coffeescount1} />
        <ExperienceCard item={coffees2} title="Coffee" change={setCoffeescount2} arr={coffeescount2} />
        <ExperienceCard item={milkteas} title="Milktea" change={setMilkteascount} arr={milkteascount} />
        <ExperienceCard item={others1} title="Other" change={setOtherscount1} arr={otherscount1} />
        <ExperienceCard item={others2} title="Other" change={setOtherscount2} arr={otherscount2} />
      </div>
      <MdChevronRight className="invisible md:visible hover:cursor-pointer opacity-50 hover:opacity-100 ml-2" onClick={slideRight} size={30} />
      <button className="absolute bottom-4 text-[#F7AB0A] tracking-[5px] border rounded border-[#F7AB0A] pt-[5px] pb-[5px] pl-[40px] pr-[35px] hover:text-gray-700 hover:bg-[#F7AB0A] hover:scale-125 ease-in duration-150">PAY</button>
    </motion.div>
  )
}

export default Experience
