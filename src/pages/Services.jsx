import React from 'react';
import {Images} from "../components/images.jsx";
import uiux from "../assets/UI-UX-differences-bro.svg";

const Services = () => {
    const developmentServices = [
        {
            title: 'Software Development',
            description: 'Building custom software solutions tailored to your business needs.',
            image: Images.programmer,
            tags: ['Web app development', 'Mobile app development', 'MVP development', 'Custom software development']
        },
        {
            title: 'API Development & Integration',
            description: 'Seamlessly connect your systems with robust API solutions.',
            image: Images.api,
            tags: ['RESTful APIs', 'Third-party integrations', 'Microservices', 'API documentation']
        },
        {
            title: 'AI Development',
            description: 'Leverage artificial intelligence to automate and enhance your operations.',
            image: Images.ai_dev,
            tags: ['Machine Learning', 'Natural Language Processing', 'Chatbots', 'Predictive Analytics']
        },
        {
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications that users love.',
            image: Images.mobile_app,
            tags: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
        }
    ];

    const designServices = [
        {
            title: 'UI/UX Design',
            description: 'Create intuitive and engaging user experiences.',
            image: Images.uiux,
            tags: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
        },
        {
            title: 'Branding',
            description: 'Build a strong brand identity that resonates with your audience.',
            image: Images.branding,
            tags: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines']
        }
    ];

    const complianceServices = [
        {
            title: 'Identity & Data Verification',
            description: 'Secure identity verification and data compliance solutions.',
            image: Images.auth,
            tags: ['KYC Solutions', 'Data Privacy', 'GDPR Compliance', 'Security Audits']
        }
    ];

    const cooperationModels = [
        {
            title: 'Development Outsourcing',
            description: 'Cost-effective solutions with skilled teams meeting deadlines and budgets.',
            longText: 'Benefit from reduced operational costs and access to a global talent pool. Our agile approach ensures seamless integration with your existing workflows and transparent communication throughout the project lifecycle.',
            image: Images.dev_outsourcing,
        },
        {
            title: 'Dedicated Development Team',
            description: 'Committed developers ensuring quality & timely delivery.',
            longText: 'Get a full-time, integrated team that works exclusively on your project. Our dedicated teams are hand-picked to match your technical requirements and company culture, acting as an extension of your in-house staff.',
            image: Images.dedicated_team,
        },
        {
            title: 'Staff Augmentation',
            description: 'Fill skill gaps quickly to refine innovation and execution.',
            longText: 'Seamlessly integrate individual experts or small teams into your current projects. Our staff augmentation services provide specialized skills to boost your capacity and accelerate development.',
            image: Images.staff_aug,
        },
    ];

    const ServiceCard = ({ service, index }) => (
        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center mb-16 lg:mb-24`}>
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                    {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-[#0c4d69] hover:to-[#2a919f] hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-[#eef2fb]">
            {/* Hero Section */}
            <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#0c4d69] to-[#0a3d54]"></div>
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
                        We craft innovative digital solutions that help businesses reach their objectives and drive growth
                    </p>
                </div>
            </section>

            {/* Development Services */}
            <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <span className="text-[#0c4d69] font-[Poppins] text-sm uppercase tracking-wide">What We Build</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mt-2">
                            Development Services
                        </h2>
                    </div>

                    {developmentServices.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </section>

            {/* Design & Media Services */}
            <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <span className="text-[#0c4d69] font-[Poppins] text-sm uppercase tracking-wide">Creative Excellence</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mt-2">
                            Design & Media Services
                        </h2>
                    </div>

                    {designServices.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </section>

            {/* Risk & Compliance Services */}
            <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <span className="text-[#0c4d69] font-[Poppins] text-sm uppercase tracking-wide">Security & Trust</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mt-2">
                            Risk & Compliance Services
                        </h2>
                    </div>

                    {complianceServices.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </section>

            {/* Cooperation Models */}
            <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <span className="text-[#0c4d69] font-[Poppins] text-sm uppercase tracking-wide">How We Work</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mt-2">
                            Cooperation Models
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cooperationModels.map((model, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={model.image}
                                        alt={model.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                                        {model.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {model.longText}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*Contact Form Section*/}
                <div className="flex flex-col lg:flex-row w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto bg-[#eef2fb] shadow-md mt-12 sm:mt-16 lg:mt-20 rounded-lg mb-16 overflow-hidden">
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
                </div>
        </div>
    );
};

export { Services };
