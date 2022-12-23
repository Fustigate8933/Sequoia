import Head from 'next/head'
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import type { GetStaticProps } from 'next'
import { Coffee, Milktea, Other } from "../typings"
import { fetchCoffee } from "../utils/fetchCoffee"
import { fetchMilktea } from "../utils/fetchMilktea"
import { fetchOther } from "../utils/fetchOther"

type Props = {
  coffees: Coffee[],
  milkteas: Milktea[],
  others: Other[]
}

export default function Home({coffees, milkteas, others}: Props) {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory duration-700 overflow-auto z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scroll-smooth">
      <Head>
        <title>Sequoia Cafe</title>
      </Head>

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="menu" className="snap-end">
        <Experience coffees={coffees} milkteas={milkteas} others={others} />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
    </div> 
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const coffees: Coffee[] = await fetchCoffee()
  const milkteas: Milktea[] = await fetchMilktea()
  const others: Other[] = await fetchOther()
  return {
    props: {
      coffees,
      milkteas,
      others
    },
    revalidate: 120
  }
}
