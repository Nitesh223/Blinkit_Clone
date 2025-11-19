import React from 'react'
import ProductCard from '../UI/ProductCard'

import image1 from "../../assets/ColdDrink/image1.png"
import image2 from "../../assets/ColdDrink/image2.png"
import image3 from "../../assets/ColdDrink/image3.png"
import image4 from "../../assets/ColdDrink/image4.png"
import image5 from "../../assets/ColdDrink/image5.png"
import image6 from "../../assets/ColdDrink/image6.png"
const ColdDrinkSection = () => {
  return (
    <>
       <div className="max-w-full h-[330px] flex justify-center mt-3">
                <div className="max-w-6xl h-[330px]">
                    <h1 className='text-2xl font-bold px-2 '>Cold Drinks & Juices</h1>
                    <div className='w-full h-[90%] py-1 flex justify-center items-center gap-4'>
                        <ProductCard image={image1} name="Thums Up Soft Drink (750 ml)" quantity="750 ml" price={40} />
                        <ProductCard image={image2} name="Coca-Cola Soft Drink (750 ml) " quantity="750 ml" price={40} />
                        <ProductCard image={image3} name="Frooti Mango Drink" quantity="150 ml" price={10} />
                        <ProductCard image={image4} name="Sprite Lime Flavored Soft Drink 750 ml" quantity="750 ml" price={40} />
                        <ProductCard image={image5} name="Bisleri Packaged Water (1 l)" quantity=" 1 ltr" price={16} />
                        <ProductCard image={image6} name="Bisleri Packaged Water - Pack of 24" quantity="24 x 250 ml" price={156} />
                    </div>
                </div>
            </div>
    </>
  )
}

export default ColdDrinkSection
