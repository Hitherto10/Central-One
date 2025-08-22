import React from 'react';
import {Images} from "../components/images.jsx";
import {engagementModels, processes, reasons, services} from "../utils/imports.jsx";

export default function Home() {
    return (
        <div className={`m-auto relative bg-[#eef2fb]`}>
            <section className={`w-7xl m-auto relative`}>
                {/*Hero Section*/}
                <div className={`m-auto max-w-7xl py-20 `}>
                    <div className={`justify-center ml-20 relative`}>
                        <h2 className={`text-[#0c4d69] h-10 text-[17px] font-[Outfit] tracking-widest font-[600]`}>A TRUSTED COMPANY</h2>

                        <div className={`mb-3`}>
                            <span className={`text-7xl text-[var(--base)] font-[Outfit] leading-16`}> Next-Gen <span className={`font-semibold`}>Software</span> <br /> Services to <br/> Businesses.</span>
                        </div>

                        <div className={`mb-3`}>
                            <p className={`border-l-4 text-md font-[500] font-[Montserrat] px-3  border-[#0c4d69] w-[550px]`}>We create innovative digital solutions that help business grow, scale <span className={`text-[#669140]`}> and succeed.</span></p>
                        </div>

                        <div className={`mb-3`}>
                            <button className={`bg-[#0c4d69] text-lg font-[500] hover:cursor-pointer font-[Outfit] flex text-white text-[17px] px-4 py-2.5 w-fit rounded-lg`}>
                                Contact Us
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative text-white mx-auto px-4 lg:px-8 py-8 text-center font-[Poppins] mb-16">
                <h2 className="text-3xl lg:text-4xl lg:pt-10 font-bold font-['Poppins'] text-[var(--base)] mb-6 text-center">
                    Our Pillars of Excellence
                </h2>

                <div className="gap-5 m-auto max-w-3/4 justify-center grid lg:grid-cols-3 md:grid-cols-2 text-center">
                    {engagementModels.map((model, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 p-6"
                            style={{ margin: "0 auto" }}
                        >
                            <img
                                src={model.icon}
                                loading="lazy"
                                alt={`${model.title} icon`}
                                width="200"
                                height="200"
                                className="mx-auto mb-4"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-[#2a919f] mb-4 font-[Outfit] transition-colors duration-300 group-hover:text-[#1b4d58]">
                                    {model.title}
                                </h3>
                                <p className="text-slate-600 font-[Outfit] leading-relaxed text-[1.05rem]">
                                    {model.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <section className={`w-full max-h-[750px] mb-32 bg-[#0c4d69] py-20`}>
                <div className={`m-auto text-center`}>
                    <span className={`capitalize text-[#bcd1dc] font-[Poppins]`}>why choose us</span>
                    <h2 className={`text-5xl mb-15 text-white leading-14 font-[Outfit] font-[700]`}>Design the Concept <br /> of Your Business Flows</h2>
                </div>
                <div className={`m-auto mb-8`}>
                    <div className={`grid max-w-6xl m-auto grid-cols-4 gap-10`}>
                        <div className={`flex border-1 border-[#bcd1dc] py-16 px-5 font-[Outfit]  flex-col`}>
                            <h3 className={`text-white font-[500] text-[25px] mb-1`}> Product Design</h3>
                            <p className={`text-[#bcd1dc] mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-[#bcd1dc]`}> Learn More</a>
                        </div>
                        <div className={`flex border-1 border-[#bcd1dc] py-16 px-5 font-[Outfit]  flex-col`}>
                            <h3 className={`text-white font-[500] text-[25px] mb-1`}> Product Design</h3>
                            <p className={`text-[#bcd1dc] mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-[#bcd1dc]`}> Learn More</a>
                        </div>
                        <div className={`flex border-1 border-[#bcd1dc] py-16 px-5 font-[Outfit]  flex-col`}>
                            <h3 className={`text-white font-[500] text-[25px] mb-1`}> Product Design</h3>
                            <p className={`text-[#bcd1dc] mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-[#bcd1dc]`}> Learn More</a>
                        </div>
                        <div className={`flex border-1 border-[#bcd1dc] py-16 px-5 font-[Outfit]  flex-col`}>
                            <h3 className={`text-white font-[500] text-[25px] mb-1`}> Product Design</h3>
                            <p className={`text-[#bcd1dc] mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-[#bcd1dc]`}> Learn More</a>
                        </div>

                    </div>
                </div>
                <div className={`m-auto`}>
                    <div className={`grid max-w-6xl m-auto grid-cols-2 gap-10`}>
                        <div className={`flex border-1 border-[#bcd1dc] py-8 px-5 font-[Outfit]  flex-col`}  style={{   backgroundImage: `url(${Images.grid_image2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center' }}>

                            <h3 className={`text-white font-[500] text-[35px] mb-1`}> 15+</h3>
                            <span className={`capitalize text-white font-[Poppins]`}>countries worldwide</span>
                            <p className={`text-white mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-white`}> Learn More</a>

                        </div>
                        <div className={`flex border-1 border-[#bcd1dc] py-8 px-5 font-[Outfit]  flex-col`}  style={{   backgroundImage: `url(${Images.grid_image1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center' }}>

                            <h3 className={`text-white font-[500] text-[35px] mb-1`}> 15+</h3>
                            <span className={`capitalize text-white font-[Poppins]`}>countries worldwide</span>
                            <p className={`text-white mb-6 leading-7`}> Our product design service let's you prototype, test and validate your ideas</p>
                            <a className={`text-white`}> Learn More</a>

                        </div>

                    </div>
                </div>
            </section>

            <section className="text-black mt-36 px-6 font-[Outfit] mx-auto max-w-6xl justify-center py-8">
                <span className={`capitalize font-[Poppins]`}>Our Services</span>
                <div className={`flex justify-between h-auto mb-12 items-center`}>
                    <h2 className="font-[Outfit] my-auto text-4xl font-[700] ">We Offer a Wide <br /> Variety of IT Services</h2>
                    <button className={`bg-[#0c4d69] text-lg font-[500] hover:cursor-pointer text-white text-[17px] px-4 py-2.5 w-fit rounded-lg`}>
                        Contact Us
                    </button>
                </div>


                <div className="grid grid-cols-3">
                    {reasons.map((reason, index) => (
                        <div className="reasoning-card" key={index}>
                            <img
                                src={reason.icon}
                                loading="lazy"
                                alt=""
                                className="engagement-icon "
                            />
                            <div style={{paddingLeft: "1rem"}} className={`mb-6`}>
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

// !max-w-none w-[800px]