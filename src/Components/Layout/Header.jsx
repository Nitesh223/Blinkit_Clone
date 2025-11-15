import React from 'react'
import { useState } from 'react';
import { IoSearchOutline, IoLocationSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../../assets/logo.png'
import LoginModal from '../../Pages/Login';


const Header = ({ onLoginClick }) => {
    const [showLogin, setshowLogin] = useState(false)
    return (
        <>
            <nav className='w-full bg-white shadow-xs sticky top-0 z-50 border-y border-gray-100 h-22 box-border'>
                <div className="w-full h-full flex items-center justify-between ">
                    <div className="w-[15%] h-full  flex items-center justify-center px-3 py-2 border-r border-gray-200"><img className='w-full h-9 object-contain cursor-pointer
                    ' src={logo} alt="" /></div>
                    <div className="w-[70%] h-full  flex flex-row ">
                        <div className="px-3 my-auto leading-tight">
                            <span className='text-lg font-bold text-black'>Delivery in 8 minutes</span>
                            <div className="flex items-center gap-1 text-sm text-gray-700">
                                {/* <IoLocationSharp className="text-[#00A82D]" /> */}
                                <span className='text-sm'>Bank More, Dhanbad, Jharkhand</span>
                                <span className="text-lg font-bold -mt-1 cursor-pointer">▾</span>
                            </div>
                        </div>
                        <div className="flex-1 mx-10 hidden md:flex items-center  px-3 py-1.5 border border-gray-100 ">
                            <IoSearchOutline className="text-gray-500 text-lg absolute mx-2 " />
                            <input
                                type="text"
                                placeholder='Search '
                                className="w-full  outline-none px-8 text-sm text-gray-800 py-3 border-2 border-gray-200 bg-[#f8f8f8] realtive  rounded-lg"
                            />
                        </div>
                        {/* <div className="bg-[#f8f8f8] flex justify-center items-center">
                            <input type="text" placeholder='Search' className='border-2'/>
                        </div> */}
                        <div className='text-lg my-auto font-semibold  cursor-pointer hover:font-bold'>
                            <h2 onClick={() => setshowLogin(true)} >Login</h2>
                        </div>
                        {showLogin && <LoginModal closeModal={() => setshowLogin(false)} />}
                    </div>

                    <div className="w-[15%] h-full flex items-center justify-center">
                        <button className="flex items-center gap-2 bg-green-700 hover:bg-green-600  text-white px-6 py-3 rounded-md font-semibold text-sm shadow-sm  cursor-pointer">
                            <FaShoppingCart />
                            My Cart
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
