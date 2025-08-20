import React from 'react';
import {Images} from "../components/images.jsx";
import {processes, services} from "../utils/imports.jsx";

export default function Home() {
    return (
        <div className={`w-7xl m-auto relative top-3`}>
            {/*Landing visuals*/}
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

            {/*Work Processes*/}
            <div className={`mb-16`}>
                <h1 className={`text-center text-5xl font-[Outfit] mb-5 font-semibold`}>We Follow the Process</h1>
                <h3 className={`text-center text-lg font-[Outfit] mb-8 `}>Our Work Process</h3>
                {/*<span className={`text-center`}>Our Work Process</span>*/}
                <div className={`grid grid-cols-4`}>
                    {processes.map((process, index) => (
                        <div key={`${index}`} >
                            <img src={`${process.Image}`} alt="process" className={` m-auto w-[198px]`}/>
                            <h3 className={`text-center font-[Outfit] font-semibold my-3`}>{process.title}</h3>
                            <p className={`text-center font-[Outfit] font-[300] text-[15px]`}>{process.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`my-24`}>
                <div className={`content-center items-center justify-center max-w-6xl m-auto`}>
                    <h1 className={`text-center text-5xl font-[Outfit] mb-5 font-semibold`}>Our Top Rated Tech Solutions</h1>
                    <p className={`text-center text-lg font-[Outfit] mb-5 font-[400] content-center items-center justify-center m-auto`}> With a passionate team of developers, designers, and product thinkers, we help clients turn ideas into powerful applications, ranging from web platforms to mobile apps </p>
                </div>

                <div className={`flex max-w-5xl m-auto gap-5`}>
                    {services.map((service, index) => (
                        <div key={`${index}`} className={`bg-white content-center m-auto`}>
                            <img src={`${service.service_icon}`} alt="service" className={`w-[50px]`}/>
                            <h3 className={`font-[Outfit] font-semibold`}>{service.service_name}</h3>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

// !max-w-none w-[800px]