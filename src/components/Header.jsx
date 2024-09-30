import React, { useState } from 'react';
import { PiCaretDownLight } from 'react-icons/pi';
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlineCreditCard } from "react-icons/md";




export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => setToggle(true);
    const hideSideMenu = () => setToggle(false);
    const link = [
        { icon: <IoSearch />, name: "Search" },
        { icon: <RiDiscountPercentFill />, name: "Offers", },
        { icon: <FaHandsHelping />, name: "Help", sup: 'new' },
        { icon: <IoPerson />, name: "Sign In" },
        { icon: <MdOutlineCreditCard />, name: "Card  ", sup:'(11)' },
    ]
    return (
        <>
            <div
                className="black-overlay w-full h-full fixed duration-500"
                onClick={hideSideMenu}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? 'visible' : 'hidden'
                }}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-[500px] bg-white h-full absolute duration-[600ms]"
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}
                >
                </div>
            </div>
            <header className="p-[15px] shadow-xl text-[#686b78]">
                <div className="max-w-[1200px] mx-auto flex items-center ">
                    <div className="w-[100px]">
                        <img
                            src="asets/swigey.png"
                            className="w-full"
                            alt="Swiggy Logo"
                        />
                    </div>
                    <div className="ml-4">
                        <span className="font-bold border-b-[3px] border-black">Noida</span>
                        <span className="ml-2">Uttar Pradesh, India</span>
                        <PiCaretDownLight
                            onClick={showSideMenu}
                            fontSize={21}
                            className="inline font-bold text-[#fc8019] cursor-pointer"
                        />
                    </div>
                    <nav className='flex list-none gap-7 ml-auto font-semibold text-[18px]'>
                        {
                            link.map((link, index) => {
                                return <li key={index} className='cursor-poiner flex hover:text-[#fc8019] items-center gap-2'>
                                    {link.icon}
                                    {link.name}
                                    <sup>{link.sup}</sup>
                                </li>
                            })}
                    </nav>
                </div>
            </header>
        </>
    );
}
