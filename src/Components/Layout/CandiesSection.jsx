import React from 'react'
import ProductCard from '../UI/ProductCard'
import image1 from "../../assets/Candies/image1.png"
import image2 from "../../assets/Candies/image2.png"
import image3 from "../../assets/Candies/image3.png"
import image4 from "../../assets/Candies/image4.png"
import image5 from "../../assets/Candies/image5.png"
import image6 from "../../assets/Candies/image6.png"
const CandiesSection = () => {
  return (
    <>
      <div className="max-w-full h-[330px] flex justify-center mt-3">
                <div className="max-w-6xl h-[330px]">
                    <h1 className='text-2xl font-bold px-2 '>Candies & Gums</h1>
                    <div className='w-full h-[90%] py-1 flex justify-center items-center gap-4'>
                        <ProductCard image={image1} name="Pulse Golmol Imli Candy" quantity="175 g" price={42} />
                        <ProductCard image={image2} name="Chupa Chups Sour Bites Mixed Fruit Candy " quantity="60 g" price={34} />
                        <ProductCard image={image3} name="Happydent Wave Sugarfree Mint Chewing Gum " quantity="30 g" price={46} />
                        <ProductCard image={image4} name="Pulse Kachcha Aam / Mango Candy" quantity="190 g" price={51} />
                        <ProductCard image={image5} name="Alpenliebe Grande with Choco Delight Eclair" quantity="120 g" price={45} />
                        <ProductCard image={image6} name="GO DESi Tangy Imli Desi Popz Lollipop Candy" quantity="8 pieces" price={50} />
                    </div>
                </div>
            </div>
    </>
  )
}

export default CandiesSection
