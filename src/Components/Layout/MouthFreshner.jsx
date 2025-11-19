import React from 'react'
import ProductCard from '../UI/ProductCard'
import image1 from "../../assets/MouthFreshner/image1.png"
import image2 from "../../assets/MouthFreshner/image2.png"
import image3 from "../../assets/MouthFreshner/image3.png"
import image4 from "../../assets/MouthFreshner/image4.png"
import image5 from "../../assets/MouthFreshner/image5.png"
import image6 from "../../assets/MouthFreshner/image6.png"
const MouthFreshner = () => {
  return (
    <>
      <div className="max-w-full h-[330px] flex justify-center mt-3">
                <div className="max-w-6xl h-[330px]">
                    <h1 className='text-2xl font-bold px-2 '>Mouth fresheners</h1>
                    <div className='w-full h-[90%] py-1 flex justify-center items-center gap-4'>
                        <ProductCard image={image1} name="Pass Pass Sweet Magic Mix Mouth Freshener" quantity="105 g" price={92} />
                        <ProductCard image={image2} name="Chandan Jeera Goli Digestive Tablets " quantity="100 g" price={50} />
                        <ProductCard image={image3} name="GO DESi Meetha Paan Desi Mints" quantity="60 g" price={80} />
                        <ProductCard image={image4} name="Spraymintt Icymint Mouth Freshener " quantity="15 g" price={99} />
                        <ProductCard image={image5} name="Chandan Kashmiri Mouth Freshener" quantity="160 g" price={119} />
                        <ProductCard image={image6} name="Chandan Star 5 in 1 Mouth Freshener" quantity="200 g" price={169} />
                    </div>
                </div>
            </div>
    </>
  )
}

export default MouthFreshner
