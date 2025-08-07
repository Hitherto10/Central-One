import React from 'react';
import {Images} from "../components/images.jsx";

export default function Home() {
    return (
        <div className={`w-7xl m-auto relative top-3`}>
            <div className={`m-auto grid grid-cols-2 max-w-7xl`}>
                <div className={`mt-28 justify-center ml-20 relative`}>
                    <h2 className={`text-[#33D3D4] h-10 text-xl font-[SF Pro Display] tracking-[7px] font-[700]`}>A TRUSTED COMPANY</h2>

                    <div className={`mb-3`}>
                        <span className={`text-6xl text-[#404040] font-[Outfit] leading-16`}> Next-Gen <span className={`font-semibold`}>Software</span> <br /> Services to <br/> Businesses.</span>
                    </div>

                    <div className={`mb-3`}>
                        <p className={`border-l-4 text-md font-[500] font-[Montserrat] px-3  border-[#33D3D4] w-[550px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim <span className={`text-[#33D3D4]`}> velit mollit.</span></p>
                    </div>

                    <div className={`mb-3`}>
                        <button className={`bg-[#33D3D4] relative font-[SF Pro Display] py-2 px-3 hover:cursor-pointer font-[700] text-white text-sm flex flex-row gap-3 rounded-3xl`}>
                            <span className={` bottom-[1px] relative content-center`}>Get Started</span>
                            <img
                            src={`${Images.right_Arrow}`}
                            className={`w-[25px]`}
                            alt=""/>
                        </button>
                    </div>
                </div>
                <div className={``}>
                    <div className={`relative`}>
                        {/*<img*/}
                        {/*    src={`${Images.code_screen}`}*/}
                        {/*    alt="Landing background"*/}
                        {/*    className="!max-w-none border h-auto "*/}
                        {/*    loading="lazy"*/}
                        {/*/>*/}
                        <img
                            src={`${Images.ldn_avatar}`}
                            alt="Landing background"
                            className="!max-w-none w-[700px] right-24 relative h-auto object-cover"
                            loading="eager"
                            style={{ zIndex: 0 }}
                        />

                </div>
            </div>
        </div>
        </div>
    )
}

// !max-w-none w-[800px]