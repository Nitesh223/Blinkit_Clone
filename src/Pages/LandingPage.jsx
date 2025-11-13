import React from 'react'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'
import banner from '../assets/image.png'
import cardimg1 from '../assets/cardimage/pharma.png'
import cardimg2 from '../assets/cardimage/pet care.png'
import cardimg3 from '../assets/cardimage/diaper.png'

const LandingPage = () => {
  return (
    <>
      <Header />

      <div className="w-full h-[230px] my-2 mx-auto  ">
        <div className="max-w-7xl h-full  mx-auto">
          <img src={banner} alt="pan banner" className='cursor-pointer'/>
        </div>
      </div>
<div className="w-full h-[200px] mx-auto my-2 hidden md:block">
  <div className="max-w-7xl h-full mx-auto px-4 flex flex-row gap-8 justify-items-start">
    <img src={cardimg1} alt="" className='cursor-pointer'/>
    <img src={cardimg2} alt="" className='cursor-pointer'/>
    <img src={cardimg3} alt="" className='cursor-pointer'/>
  </div>
</div>
<div className="w-full h-[400px] my-4">
  <div className="max-w-7xl"></div>
</div>
      <Footer/>
    </>
  )
}

export default LandingPage
