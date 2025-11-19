import React from 'react'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'
import banner from '../assets/image.png'
import cardimg1 from '../assets/cardimage/pharma.png'
import cardimg2 from '../assets/cardimage/pet care.png'
import cardimg3 from '../assets/cardimage/diaper.png'

import { categories } from "../Data/Categories"
import DairySection from '../Components/Layout/DairySection'
import SnacksSection from '../Components/Layout/SnacksSection'
import MouthFreshner from '../Components/Layout/MouthFreshner'
import TobaccoSection from '../Components/Layout/TobaccoSection'
import ColdDrinkSection from '../Components/Layout/ColdDrinkSection'
import CandiesSection from '../Components/Layout/CandiesSection'


const LandingPage = () => {
  return (
    <>
      <Header />

      <div className="w-full h-[230px] my-2 mx-auto  ">
        <div className="max-w-7xl h-full  mx-auto">
          <img src={banner} alt="pan banner" className='cursor-pointer' />
        </div>
      </div>
      <div className="w-full h-[200px] mx-auto my-2 hidden md:block">
        <div className="max-w-7xl h-full mx-auto px-4 flex flex-row gap-8 justify-items-start">
          <img src={cardimg1} alt="" className='cursor-pointer' />
          <img src={cardimg2} alt="" className='cursor-pointer' />
          <img src={cardimg3} alt="" className='cursor-pointer' />
        </div>
      </div>
      <div className="w-full h-auto my-4">
        <div className="max-w-7xl grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 mx-auto px-2 py-1 gap-1">


          {categories.map((item, index) => (
            <div key={index} className="flex items-center justify-center p-2 h-50 w-36">
              <img
                src={item.image}
                className="object-contain cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <DairySection/>
      <SnacksSection/>
      <MouthFreshner/>
      <TobaccoSection/>
      <ColdDrinkSection/>
      <CandiesSection/>
      <Footer />
    </>
  )
}

export default LandingPage
