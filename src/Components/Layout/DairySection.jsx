import React from 'react'
import image1 from "../../assets/Milk/AmulGold.png"
import image2 from "../../assets/Milk/GoSupremo.png"
import image3 from "../../assets/Milk/AmulLactoseFree.png"
import image4 from "../../assets/Milk/AmulMoti.png"
import image5 from "../../assets/Milk/Yakult.png"
import image6 from "../../assets/Milk/AmulTaaza.png"

import ProductCard from '../UI/ProductCard'


const DairySection = () => {
    return (
        <>
        <div className="max-w-full h-[330px] flex justify-center mt-3">
            <div className="max-w-6xl h-[330px]">
                <h1 className='text-2xl font-bold px-2 '>Dairy, Bread & Eggs</h1>
                <div className='w-full h-[90%] py-1 flex justify-center items-center gap-4'>
                    <ProductCard image={image1} name="Amul Gold Full Cream Milk" quantity="500ml" price={35} />
                    <ProductCard image={image2} name="GoSupremo Cows Milk" quantity="1 ltr" price={80} />
                    <ProductCard image={image3} name="Amul Lactose Free Milk" quantity="250ml" price={25} />
                    <ProductCard image={image4} name="Amul Moti Toned Milk (90 Days Shelf Life) " quantity="450ml" price={32} />
                    <ProductCard image={image5} name="Yakult Probiotic Drink(Immune)" quantity="5 x 65ml" price={30} />
                    <ProductCard image={image6} name="Amul Taaza Toned Milk" quantity="200ml" price={16} />
                </div>
            </div>
        </div>
            

        </>
    )
}

export default DairySection
