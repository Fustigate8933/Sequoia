import React from 'react'
import { motion } from "framer-motion"
import { Coffee, Milktea, Other } from "../typings"
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io"

type Props = {
  item: Coffee[] | Milktea[] | Other[],
  title: string,
  change: React.Dispatch<React.SetStateAction<number[]>>,
  arr: number[]
}

function ExperienceCard({ item, title, change, arr }: Props) {
  const handleChangeAdd = (idx: number) => {
    const newarr = arr.slice()
    newarr[idx] = newarr[idx] + 1
    change(newarr)
  }

  const handleChangeSub = (idx: number) => {
    const newarr = arr.slice()
    if (newarr[idx] !== 0){
      newarr[idx] = newarr[idx] - 1   
    }
    change(newarr)
  }

  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 transition-opacity duration-800 overflow-hidden md:hover:scale-105">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-20 h-20 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
          src="https://i.ibb.co/pdyjwZK/2897206133-pastel-art-of-coffee-4k.png"
          alt=""
        />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light pb-2">{title}</h4>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            {item.map((drink, i) => (
              <div className="flex flex-wrap items-center" key={drink._id}>
                <li>{drink.enname}</li>
                <div className="flex w-full">
                  <h4 className="text-left">{drink.cnname} - ¥{drink.price} - <span className="text-[#F7AB0A]">{arr[i]}</span></h4>
                  <IoIosArrowDropup className="ml-2 cursor-pointer" size={25} onClick={() => {handleChangeAdd(i)}} />
                  <IoIosArrowDropdown className="ml-2 cursor-pointer" size={25} onClick={() => {handleChangeSub(i)}} />
                </div>
              </div>
            ))}
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
