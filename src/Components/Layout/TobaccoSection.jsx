import React from 'react'
import ProductCard from '../UI/ProductCard'

import image1 from "../../assets/Rolling paper/image1.png"
import image2 from "../../assets/Rolling paper/image2.png"
import image3 from "../../assets/Rolling paper/image3.png"
import image4 from "../../assets/Rolling paper/image4.png"
import image5 from "../../assets/Rolling paper/image5.png"
import image6 from "../../assets/Rolling paper/image6.png"
const TobaccoSection = () => {
  return (
    <>
       <div className="max-w-full h-[330px] flex justify-center mt-3">
                <div className="max-w-6xl h-[330px]">
                    <h1 className='text-2xl font-bold px-2 '>Rolling paper & tobacco</h1>
                    <div className='w-full h-[90%] py-1 flex justify-center items-center gap-4'>
                        <ProductCard image={image1} name="Brown Ripper Rolling Paper 32 Leaves" quantity="64 pieces" price={120} />
                        <ProductCard image={image2} name="GO DESi Meetha Paan Desi Mints " quantity="60 g" price={80} />
                        <ProductCard image={image3} name="Ultimate Rolling Paper with Filter Tips" quantity="32 leaves" price={80} />
                        <ProductCard image={image4} name="Perfect Rolling Paper (Pink) - Bongchie " quantity="3 packs" price={45} />
                        <ProductCard image={image5} name="Perfect Rolled Cones (Natural) - Bongchie" quantity="3 packs" price={45} />
                        <ProductCard image={image6} name="Ultimate Rolling Paper with Filter Tips" quantity="32 pieces" price={90} />
                    </div>
                </div>
            </div>
    </>
  )
}

export default TobaccoSection
