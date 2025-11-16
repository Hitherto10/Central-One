import React from 'react';
import {Images} from "../components/images.jsx";
import uiux from "../assets/UI-UX-differences-bro.svg";

export const Services = () => {
    const models = [
        {
            title: 'Development Outsourcing',
            description: 'We offer skilled teams for cost-effective solutions, meeting deadlines and budgets.',
            longText: 'Benefit from reduced operational costs and access to a global talent pool. Our agile approach ensures seamless integration with your existing workflows and transparent communication throughout the project lifecycle. We handle all aspects of team management, allowing you to focus on your core business objectives.',
            imageAlt: 'Video call with multiple team members',
            image: `${Images.dev_outsourcing}`,
        },
        {
            title: 'Dedicated Development Team',
            description: 'We match businesses with committed developers, ensuring quality & time delivery.',
            longText: 'Get a full-time, integrated team that works exclusively on your project. Our dedicated teams are hand-picked to match your technical requirements and company culture, acting as an extension of your in-house staff. They follow your processes and report directly to you, providing maximum control and flexibility.',
            imageAlt: 'Three developers smiling around a laptop',
            image: `${Images.dedicated_team}`,
        },
        {
            title: 'Staff Augmentation',
            description: 'Limeup helps you fill skill gaps quickly, refining innovation and execution.',
            longText: 'Seamlessly integrate individual experts or small teams into your current projects. Our staff augmentation services provide specialized skills to boost your capacity, accelerate development, and bring fresh perspectives without the overhead of permanent hiring. Scale up or down as your project demands evolve.',
            imageAlt: 'Cards showing developer profiles and skills',
            image: `${Images.staff_aug}`,
        },
    ];

    return (
        <>
            {/*Hero Section*/}
            <section className="relative min-h-[200px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#0c4d69] to-[#0a3d54]"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <span className="text-[#90EE90] text-sm font-[Outfit] tracking-wide font-[600]">
                            Our Services
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-[Outfit] font-bold mb-6 leading-tight">
                        Bespoke Software<br />
                        <span className="bg-gradient-to-r from-[#90EE90] to-[#60d060] bg-clip-text text-transparent">
                            Development Services
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-white/90 font-[Outfit] max-w-3xl mx-auto leading-relaxed">
                        We craft innovative digital solutions that help startups and small to mid-sized businesses reach their objectives and drive growth
                    </p>
                </div>
            </section>

            {/*Services Section*/}
            <section className="p-8 md:p-16 lg:p-20">
                {/*Development Services*/}
                <div className=" max-w-7xl mb-20 font-[Outfit] mx-auto ">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mb-14">
                        Development Services
                    </h1>

                    {/*Software Development*/}
                    <div className={`flex mx-auto justify-center flex-col mb-20 lg:flex-row items-center lg:space-x-12`}>

                        {/* Left Section: Image/Monitor Container */}
                        <div className="lg:w-1/2 bg-gray-50 rounded-xl shadow-sm mb-8 lg:mb-0 flex justify-center items-center">

                            <div className="relative w-3/5 aspect-video">
                                <div className="flex items-center justify-center rounded-lg overflow-hidden">
                                    <img
                                        src={`${Images.programmer}`}
                                        alt="Software dashboard and code editor"
                                        className="object-cover "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Software Development Details */}
                        <div className="lg:w-1/2 ">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                                Software Development
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Developing custom software to solve real-world challenges.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {/* Service Tags/Buttons */}
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Web app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Mobile app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                MVP development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Custom software development
                            </span>
                            </div>
                        </div>
                    </div>

                    {/*API Integration*/}
                    <div className={`flex mx-auto justify-center flex-col mb-20 lg:flex-row items-center lg:space-x-12`}>

                        {/* Left Section: Image/Monitor Container */}
                        <div className="lg:w-1/2 bg-gray-50 rounded-xl shadow-sm mb-8 lg:mb-0 flex justify-center items-center">

                            <div className="relative py-15 w-3/5 aspect-video">
                                <div className="flex items-center justify-center rounded-lg overflow-hidden">
                                    <img
                                        src={`${Images.api}`}
                                        alt="Software dashboard and code editor"
                                        className="object-cover "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Software Development Details */}
                        <div className="lg:w-1/2 ">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                                API Development & Integration
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Developing custom software to solve real-world challenges.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {/* Service Tags/Buttons */}
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Web app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Mobile app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                MVP development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Custom software development
                            </span>
                            </div>
                        </div>
                    </div>

                    {/*AI Development*/}
                    <div className={`flex mx-auto justify-center flex-col mb-20 lg:flex-row items-center lg:space-x-12`}>

                        {/* Left Section: Image/Monitor Container */}
                        <div className="lg:w-1/2 bg-gray-50 rounded-xl shadow-sm mb-8 lg:mb-0 flex justify-center items-center">

                            <div className="relative w-3/5 aspect-video">
                                <div className="flex items-center justify-center rounded-lg overflow-hidden">
                                    <img
                                        src={`${Images.ai_dev}`}
                                        alt="Software dashboard and code editor"
                                        className="object-cover "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Software Development Details */}
                        <div className="lg:w-1/2 ">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                                AI Development
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Developing custom software to solve real-world challenges.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {/* Service Tags/Buttons */}
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Web app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Mobile app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                MVP development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Custom software development
                            </span>
                            </div>
                        </div>
                    </div>

                    {/*Mobile App Development*/}
                    <div className={`flex mx-auto justify-center flex-col mb-20 lg:flex-row items-center lg:space-x-12`}>

                        {/* Left Section: Image/Monitor Container */}
                        <div className="lg:w-1/2 bg-gray-50 rounded-xl shadow-sm mb-8 lg:mb-0 flex justify-center items-center">

                            <div className="relative w-3/5 aspect-video">
                                <div className="flex items-center justify-center rounded-lg overflow-hidden">
                                    <img
                                        src={`${Images.mobile_app}`}
                                        alt="Software dashboard and code editor"
                                        className="object-cover "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Software Development Details */}
                        <div className="lg:w-1/2 ">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                                Mobile App Development
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Developing custom software to solve real-world challenges.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {/* Service Tags/Buttons */}
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Web app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Mobile app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                MVP development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Custom software development
                            </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Design & Media Services*/}
                <div className=" max-w-7xl mb-20 font-[Outfit] mx-auto ">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mb-14">
                        Design & Media Services
                    </h1>

                    {/*UI/UX Design*/}
                    <div className={`flex mx-auto justify-center flex-col mb-20 lg:flex-row items-center lg:space-x-12`}>

                        {/* Left Section: Image/Monitor Container */}
                        <div className="lg:w-1/2 bg-gray-50 rounded-xl shadow-sm mb-8 lg:mb-0 flex justify-center items-center">

                            <div className="relative w-1/2 aspect-video">
                                <div className="flex items-center justify-center rounded-lg overflow-hidden">
                                    <img
                                        src={`${Images.uiux}`}
                                        alt="Software dashboard and code editor"
                                        className="object-cover "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Software Development Details */}
                        <div className="lg:w-1/2 ">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                                UI/UX Design
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Developing custom software to solve real-world challenges.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {/* Service Tags/Buttons */}
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Web app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Mobile app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                MVP development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Custom software development
                            </span>
                            </div>
                        </div>
                    </div>

                    {/*Branding*/}
                    <div className={`flex mx-auto justify-center flex-col mb-20 lg:flex-row items-center lg:space-x-12`}>

                        {/* Left Section: Image/Monitor Container */}
                        <div className="lg:w-1/2 bg-gray-50 rounded-xl shadow-sm mb-8 lg:mb-0 flex justify-center items-center">

                            <div className="relative w-full max-w-md aspect-video">
                                <div className="flex items-center justify-center rounded-lg overflow-hidden">
                                    <img
                                        src={`${Images.branding}`}
                                        alt="Software dashboard and code editor"
                                        className="object-cover "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Software Development Details */}
                        <div className="lg:w-1/2 ">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                                Branding
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Developing custom software to solve real-world challenges.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {/* Service Tags/Buttons */}
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Web app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Mobile app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                MVP development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Custom software development
                            </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Risk & Compliance Services*/}
                <div className=" max-w-7xl  mb-20 font-[Outfit] mx-auto ">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mb-14">
                        Risk & Compliance Services
                    </h1>

                    <div className={`flex mx-auto justify-center flex-col mb-20 lg:flex-row items-center lg:space-x-12`}>

                        {/* Left Section: Image/Monitor Container */}
                        <div className="lg:w-1/2 bg-gray-50 rounded-xl shadow-sm mb-8 lg:mb-0 flex justify-center items-center">

                            <div className="relative w-full max-w-md aspect-video">
                                <div className="flex items-center justify-center rounded-lg overflow-hidden">
                                    <img
                                        src={`${Images.auth}`}
                                        alt="Software dashboard and code editor"
                                        className="object-cover "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Software Development Details */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                                Identity & Data Verification
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Developing custom software to solve real-world challenges.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {/* Service Tags/Buttons */}
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Web app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Mobile app development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                MVP development
                            </span>
                                <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-150 cursor-pointer">
                                Custom software development
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Co-Operation Models Section*/}
            <section className="p-8 max-w-7xl m-auto md:p-8 bg-white font-[Outfit]">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mb-14">
                    Cooperation models
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
                        >
                            {/* Image Placeholder */}
                            <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img
                                    src={`${model.image}`}
                                    alt="Software dashboard and code editor"
                                    className="object-cover "
                                />

                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                                    {model.title}
                                </h2>
                                {/* Added long text instead of a button */}
                                <p className="text-sm text-gray-500 mt-2">
                                    {model.longText}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/*Contact Form Section*/}
            <section className="flex flex-col lg:flex-row w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto bg-[#eef2fb] shadow-md my-12 sm:my-16 lg:my-20 rounded-lg overflow-hidden">
                <form id="contact-form" className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 font-[Montserrat] text-[13px]">
                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[Outfit] text-gray-800 mb-6 sm:mb-8 lg:mb-12">
                            Ready to Start Your Project?<br />
                            <span style={{color: "#669140"}}>Let's Talk!</span>
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 my-4 sm:my-5">
                            <input type="text" name="name" placeholder="Name" className="input rounded-md font-[Montserrat] text-[13px] p-3 sm:p-4 border border-gray-300 bg-[#f8f8f8]"/>
                            <input type="email" name="email" placeholder="Email" className="input rounded-md font-[Montserrat] text-[13px] p-3 sm:p-4 border border-gray-300 bg-[#f8f8f8]"/>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 my-4 sm:my-5">
                            <input type="text" name="company" placeholder="Company" className="input rounded-md font-[Montserrat] text-[13px] p-3 sm:p-4 border border-gray-300 bg-[#f8f8f8]"/>
                            <input type="tel" name="phoneNumber" placeholder="Phone" className="input rounded-md font-[Montserrat] text-[13px] p-3 sm:p-4 border border-gray-300 bg-[#f8f8f8]"/>
                        </div>

                        <textarea
                            name="message"
                            placeholder="Tell us about your project"
                            rows={4}
                            className="w-full px-3 mb-4 sm:mb-5 border border-gray-300 rounded focus:outline-none font-[Montserrat] text-[13px] p-3 sm:p-4 bg-[#f8f8f8]"
                        />

                        <div className="flex items-start text-xs sm:text-sm mb-4">
                            <label htmlFor="privacy-policy">
                                By submitting this form I agree to the{" "}
                                <a target="_blank" rel="noopener noreferrer" href="/">
                                    Privacy Policy
                                </a>
                                {" "}and{" "}
                                <a target="_blank" rel="noopener noreferrer" href="/" className="text-blue-500 hover:underline">
                                    Terms of Service
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[#3a3d59] cursor-pointer text-white rounded font-[Montserrat] hover:bg-[#2a2d49] transition-all text-sm sm:text-base"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="w-full lg:w-2/5 bg-[#0c4d69] text-white flex items-center justify-center p-6 sm:p-8 lg:p-10 font-[Outfit]">
                    <div className="text-center w-full max-w-md space-y-6 sm:space-y-8">
                        <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                                Let's Create Something Extraordinary
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base">
                                Partner with us to transform your vision into reality. We're committed to delivering innovative solutions that drive real business results.
                            </p>
                        </div>

                        <div className="flex items-start justify-center space-x-3">
                            <div className="text-left">
                                <p className="font-semibold text-white text-sm sm:text-base">Central One Technologies</p>
                                <p className="text-xs sm:text-sm text-gray-400 leading-snug">
                                    Abuja, Nigeria
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded flex items-center justify-center mr-2">
                                <span className="text-xs font-bold">@</span>
                            </div>
                            <a
                                href="mailto:info@centralone.com"
                                className="text-blue-400 hover:underline text-sm sm:text-base break-all"
                            >
                                info@centralone.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}