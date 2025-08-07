import React from 'react';
import {navLinks} from "../utils/imports.jsx";

export default function Header() {
    return (
        <div className="flex items-center top-3 relative justify-center">
            <header className="relative w-full mx-16">
                <div className="bg-white z-20 absolute font-[Poppins] py-5 px-5 content-center items-center rounded-2xl flex flex-row w-full h-17">
                    <div className="w-1/4">
                        <img src={``} alt="Logo"/>
                    </div>

                    <div className="w-1/2 flex justify-center">
                        <div className="flex flex-row gap-7">
                            {
                                navLinks.map((navLink, index) => {
                                    return ( <ul key={`${index}`}> <li>{navLink.name}</li> </ul> )
                                })
                            }
                        </div>
                    </div>

                    <div className="w-1/4 flex justify-end">
                        <button className={`bg-[#ffc250] font-[700] text-white text-[17px] py-3 w-32 rounded-tr-2xl rounded-bl-2xl`}>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="bg-[#293c62] p-5 z-0 top-0 left-0 w-full h-17"></div>
            </header>
        </div>
    )
}