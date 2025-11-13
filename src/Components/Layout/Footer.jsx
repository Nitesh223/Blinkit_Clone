import React from "react";
import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaGlobe,
} from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-10 px-6 md:px-16 ">
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-5 gap-30 text-gray-700 text-sm">
                <div className="">
                    <h2 className="text-lg font-semibold mb-4">Useful Links</h2>

                    <div className="grid grid-cols-2 gap-x-20">
                        <ul className="space-y-2">
                            <li>Blog</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>FAQs</li>
                            <li>Security</li>
                            <li>Contact</li>
                            <li>Partner</li>
                            <li>Franchise</li>
                        </ul>

                        <ul className="space-y-2">
                            <li>Seller</li>
                            <li>Warehouse</li>
                            <li>Deliver</li>
                            <li>Resources</li>
                            <li>Recipes</li>
                            <li>Bistro</li>
                            <li>District</li>
                        </ul>
                    </div>
                </div>


                <div className="md:col-span-3 gap-x-40">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold">Categories</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-3">
                        {[
                            "Vegetables & Fruits",
                            "Cold Drinks & Juices",
                            "Bakery & Biscuits",
                            "Dry Fruits, Masala & Oil",
                            "Paan Corner",
                            "Pharma & Wellness",
                            "Personal Care",
                            "Kitchen & Dining",
                            "Stationery Needs",
                            "Print Store",
                            "Dairy & Breakfast",
                            "Instant & Frozen Food",
                            "Sweet Tooth",
                            "Sauces & Spreads",
                            "Organic & Premium",
                            "Cleaning Essentials",
                            "Pet Care",
                            "Fashion & Accessories",
                            "Books",
                            "E-Gift Cards",
                            "Munchies",
                            "Tea, Coffee & Milk Drinks",
                            "Atta, Rice & Dal",
                            "Chicken, Meat & Fish",
                            "Baby Care",
                            "Home Furnishing & Decor",
                            "Beauty & Cosmetics",
                            "Electronics & Electricals",
                            "Toys & Games",
                            "Rakhi Gifts",
                        ].map((item, index) => (
                            <span key={index} className="cursor-pointer hover:text-black">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>




            <div className="bg-[#fafafa] border-t border-gray-200 py-5 rounded-lg my-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4 text-gray-700 text-sm">
                    <p className="text-center md:text-left">
                        © Blink Commerce Private Limited, 2016–2025
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="font-semibold text-gray-800">Download App</span>
                        <img
                            src="https://blinkit.com/8ed033800ea38f24c4f0.png"
                            alt="App Store"
                            className="h-9 cursor-pointer"
                        />
                        <img
                            src="https://blinkit.com/d61019073b700ca49d22.png"
                            alt="Google Play"
                            className="h-9 cursor-pointer"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        {[
                            { icon: <FaFacebookF />, link: "#" },
                            { icon: <FaXTwitter />, link: "#" },
                            { icon: <FaInstagram />, link: "" },
                            { icon: <FaLinkedinIn />, link: "#" },
                            { icon: <FaGlobe />, link: "#" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;