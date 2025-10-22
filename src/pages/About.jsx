import React from 'react';
import {Images} from "../components/images.jsx";

export const About = () => {
    const stats = [
        { number: "50+", label: "Projects Delivered" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "3", label: "Countries Served" },
        { number: "5", label: "Key Team Members" }
    ];

    const values = [
        {
            icon: "🎯",
            title: "Innovation First",
            description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage."
        },
        {
            icon: "🤝",
            title: "Client Partnership",
            description: "Your success is our success. We build lasting relationships through transparent communication and collaboration."
        },
        {
            icon: "⚡",
            title: "Excellence Driven",
            description: "We don't just meet expectations—we exceed them through meticulous attention to detail and quality."
        },
        {
            icon: "🌍",
            title: "Global Impact",
            description: "From Nigeria to the world, we create solutions that solve real problems and drive meaningful change."
        }
    ];

    const team = [
        {
            name: "Core Team",
            description: "A tight-knit group of senior engineers and designers with proven track records in delivering enterprise-grade solutions across multiple industries."
        },
        {
            name: "Technical Excellence",
            description: "Full-stack developers and mobile specialists who stay current with emerging technologies while maintaining deep expertise in production-ready systems."
        },
        {
            name: "Design & UX",
            description: "Creative professionals who craft intuitive interfaces that users love, blending beautiful aesthetics with seamless functionality."
        },
        {
            name: "Strategic Partnership",
            description: "We work closely with our clients as true partners, ensuring every solution aligns with business goals and delivers measurable value."
        }
    ];

    const timeline = [
        {
            year: "2024",
            title: "Foundation",
            description: "Assembled a team of experienced developers and designers with a shared vision to deliver world-class technology solutions tailored for Nigerian businesses."
        },
        {
            year: "Early",
            title: "First Clients",
            description: "Successfully delivered custom software solutions across Nigeria, Canada, and Georgia, establishing our reputation for quality and reliability."
        },
        {
            year: "Growth",
            title: "Expanding Capabilities",
            description: "Broadened our service offerings to include mobile apps, voice AI, and fintech solutions, staying ahead of market demands."
        },
        {
            year: "2025",
            title: "Innovation Focus",
            description: "Officially establishing Central One Technologies as we continue to build cutting-edge solutions that drive real business impact."
        }
    ];

    return (
        <div className="bg-[#eef2fb]">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#0c4d69] to-[#0a3d54]"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <span className="text-[#90EE90] text-sm font-[Outfit] tracking-wide font-[600]">
                            About Central One Technologies
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-[Outfit] font-bold mb-6 leading-tight">
                        Transforming Ideas Into<br />
                        <span className="bg-gradient-to-r from-[#90EE90] to-[#60d060] bg-clip-text text-transparent">
                            Digital Reality
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-white/90 font-[Outfit] max-w-3xl mx-auto leading-relaxed">
                        We're a team of innovators, engineers, and designers committed to building software solutions that empower businesses to thrive in the digital age.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0c4d69] font-[Outfit] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-[Outfit] text-sm sm:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#0c4d69] font-[Poppins] text-sm uppercase tracking-wide">Our Story</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mt-3 mb-6">
                                Built for Nigeria,<br />Designed for the World
                            </h2>
                            <div className="space-y-4 text-gray-700 font-[Outfit] text-base sm:text-lg leading-relaxed">
                                <p>
                                    Central One Technologies brings together experienced engineers and designers who understand what Nigerian businesses need: reliable software that works, scales efficiently, and delivers real results.
                                </p>
                                <p>
                                    With successful projects across Nigeria, Canada, and Georgia, we've proven our ability to build solutions that work in real-world conditions.
                                </p>
                                <p>
                                    Whether you're a startup building your first product or an established business looking to modernize operations, we bring the technical expertise and market understanding to turn your vision into reality.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src={Images.portrait_programmer}
                                alt="Our Team"
                                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#0c4d69] to-[#2a919f] p-6 rounded-2xl shadow-xl max-w-xs">
                                <p className="text-white font-[Outfit] text-sm sm:text-base leading-relaxed">
                                    "We don't just build software—we build partnerships that drive sustainable growth."
                                </p>
                                <div className="mt-3 text-[#90EE90] font-semibold text-sm">
                                    — Central One Team
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#0c4d69] font-[Poppins] text-sm uppercase tracking-wide">Our Values</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mt-3">
                            What Drives Us Forward
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-[#0c4d69] font-[Outfit] mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 font-[Outfit] leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#0c4d69] font-[Poppins] text-sm uppercase tracking-wide">Our Journey</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mt-3">
                            Milestones That Define Us
                        </h2>
                    </div>

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-8 items-start group"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 bg-gradient-to-br from-[#0c4d69] to-[#2a919f] rounded-2xl flex items-center justify-center text-white font-bold text-xl font-[Outfit] shadow-lg group-hover:scale-110 transition-transform">
                                        {item.year}
                                    </div>
                                </div>
                                <div className="flex-grow pt-2">
                                    <h3 className="text-2xl font-bold text-[#0c4d69] font-[Outfit] mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 font-[Outfit] text-lg leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gradient-to-br from-[#0c4d69] to-[#2a919f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#90EE90] font-[Poppins] text-sm uppercase tracking-wide">Meet The Team</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Outfit] mt-3">
                            The People Behind the Technology
                        </h2>
                        <p className="text-white/90 font-[Outfit] text-lg mt-4 max-w-3xl mx-auto">
                            Our agile team of senior professionals combines deep technical expertise with real-world experience delivering solutions that work.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all"
                            >
                                <h3 className="text-2xl font-bold text-white font-[Outfit] mb-3">
                                    {member.name}
                                </h3>
                                <p className="text-white/90 font-[Outfit] leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c4d69] font-[Outfit] mb-6">
                        Ready to Build Something Great Together?
                    </h2>
                    <p className="text-gray-600 font-[Outfit] text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help transform your business with innovative technology solutions tailored to your needs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-[#0c4d69] text-white text-lg font-[600] hover:cursor-pointer font-[Outfit] px-8 py-3 rounded-full transition-all hover:bg-[#0a3d54] hover:shadow-lg hover:scale-105">
                            Start Your Project
                        </button>
                        <button className="border-2 border-[#0c4d69] text-[#0c4d69] text-lg font-[600] hover:cursor-pointer font-[Outfit] px-8 py-3 rounded-full transition-all hover:bg-[#0c4d69] hover:text-white">
                            Schedule a Call
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}