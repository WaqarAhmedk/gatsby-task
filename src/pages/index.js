import * as React from "react"

import appBar from '../components/header.js'
import LayOut from "../components/layout.js"
import HeroSection from "../components/hero/herosection.js"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <LayOut>
      <HeroSection />
      <div className="flex justify-between px-24 pt-7 gap- mt-10">
        <div className="w-[50%]">
          <h2 className="text-[40px] " >We offer product design, <span className="font-bold">manufacturing and engineering </span> management services.</h2>
          <p className="text-sm text-gray-600 leading-7 mt-4">Seven world think timed while her. Spoil large oh he rooms on since an. Am up unwilling eagerness perceived incommode. Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitor we private removed. Moderate do subjects to distance. Conviction up partiality as delightful is discovered. Yet jennings resolved disposed.</p>
          <div>
            <p>image</p>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[50%] shadow-xl">
          <div className="col-span-1 border-r border-b pl-8 pt-5">
            <StaticImage src="../images/icons/wall.png" height={70} width={70} />
            <h2 className="text-xl font-bold mt-3">Modern Equipments</h2>
            <p className="font-sm text-gray-400 mt-4">Wisdom new and valley answer. Contented it so is discourse recommend.</p>
          </div>
          <div className="col-span-1 border-b pl-8 pt-5"> <StaticImage />
            <StaticImage src="../images/icons/wall.png" height={70} width={70} />
            <h2 className="text-xl font-bold mt-3">Modern Equipments</h2>
            <p className="font-sm text-gray-400 mt-4">Wisdom new and valley answer. Contented it so is discourse recommend.</p>
          </div>
          <div className="col-span-1 border-r pl-8 pt-5"> <StaticImage />
            <StaticImage src="../images/icons/wall.png" height={70} width={70} />
            <h2 className="text-xl font-bold mt-3">Modern Equipments</h2>
            <p className="font-sm text-gray-400 mt-4">Wisdom new and valley answer. Contented it so is discourse recommend.</p>            </div>
          <div className="col-span-1 pl-8 pt-5"> <StaticImage />
            <StaticImage src="../images/icons/wall.png" height={70} width={70} />
            <h2 className="text-xl font-bold mt-3">Modern Equipments</h2>
            <p className="font-sm text-gray-400 mt-4">Wisdom new and valley answer. Contented it so is discourse recommend.</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        dsdks;lkd
      </div>
    </LayOut>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
