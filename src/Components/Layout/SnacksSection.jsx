import React from 'react'
import image1 from "../../assets/Snacks/image1.png"
import image2 from "../../assets/Snacks/image2.png"
import image3 from "../../assets/Snacks/image3.png"
import image4 from "../../assets/Snacks/image4.png"
import image5 from "../../assets/Snacks/image5.png"
import image6 from "../../assets/Snacks/image6.png"

import ProductCard from '../UI/ProductCard'

const SnacksSection = () => {
    return (
        <>
            <div className="max-w-full h-[330px] flex justify-center mt-3">
                <div className="max-w-6xl h-[330px]">
                    <h1 className='text-2xl font-bold px-2 '>Snacks & Munchies</h1>
                    <div className='w-full h-[90%] py-1 flex justify-center items-center gap-4'>
                        <ProductCard image={image1} name="Kab's Jackpot Cheese Balls" quantity="60 g" price={65} />
                        <ProductCard image={image2} name="Protein Chef Baked Coated Peanuts " quantity="50 g" price={75} />
                        <ProductCard image={image3} name="Beanly Choco Hazelnut Spread" quantity="52 g" price={92} />
                        <ProductCard image={image4} name="Beanly Dark Chocolate Spread " quantity="52 g" price={98} />
                        <ProductCard image={image5} name="Kettle Studio Himalayan Pink salt" quantity="56 g" price={44} />
                        <ProductCard image={image6} name="Orion Korean Kimchi K Snack Onion Rings" quantity="70 g" price={43} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SnacksSection
