import React from 'react';
import {Images} from "../components/images.jsx";

export const Services = () => {
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

            <section>
                <div className={`text-center my-16`}>
                    <span className={`font-[500] text-xl font-[Outfit]`}> How we help you accelerate growth</span>
                </div>

                <div className={`font-[Outfit] mb-16 grid grid-cols-3 gap-8 max-w-5xl m-auto`}>
                    <div className={`max-w-[300px] shadow-lg p-5 rounded-lg`}>
                        <span className={`font-[Sora] font-[600]`}> PRODUCT DEVELOPMENT</span>
                        <p className={`my-3`}> Got a product idea but not technical team? we help you validate the need, shape their concept and deliver a complete, market-ready solution.</p>
                        <h3>You'll receive</h3>
                        <ul className={`list-none`}>
                            <li>✅ full-cycle product development</li>
                            <li>✅ Business Analysis & solution design</li>
                            <li>✅ Scalable MVP and beyond</li>
                        </ul>
                    </div>

                    <div className={`max-w-[300px] shadow-lg p-5 rounded-lg`}>
                        <span className={`font-[Sora] font-[600]`}> TEAM EXTENSION</span>
                        <p className={`my-3`}> Already have a clear plan, budget and timeline? Scale your capacity quickly by adding our skilled engineers to your team.</p>
                        <h3>You'll receive</h3>
                        <ul className={`list-none`}>
                            <li>✅ Experiences specialists</li>
                            <li>✅ flexible hiring options</li>
                            <li>✅ Rapid onboarding</li>
                        </ul>
                    </div>

                    <div className={`max-w-[300px] shadow-lg p-5 rounded-lg`}>
                        <span className={`font-[Sora] font-[600]`}> DEDICATED TEAM</span>
                        <p className={`my-3`}> Need ongoing development support? Collaborate closely with a dedicated team fully committed to your product's success.</p>
                        <h3>You'll receive</h3>
                        <ul className={`list-none`}>
                            <li>✅ End to end product delivery</li>
                            <li>✅ Consistent communication & updates</li>
                            <li>✅ Agile, long term partnership</li>
                        </ul>
                    </div>

                <div className={`max-w-[300px] shadow-lg p-5 rounded-lg`}>
                    <span className={`font-[Sora] font-[600]`}> AI CONSULTING</span>
                        <p className={`my-3`}> Unsure how to start with AI? We identify quick wins assess your data readiness, and provide a straightforward action plan.</p>
                        <h3>You'll receive</h3>
                        <ul className={`list-none`}>
                            <li>✅ Immediate automation opportunities</li>
                            <li>✅ Data readiness checklist</li>
                            <li>✅ Clear budget & timeline roadmap</li>
                        </ul>
                    </div>

                <div className={`max-w-[300px] shadow-lg p-5 rounded-lg`}>
                    <span className={`font-[Sora] font-[600]`}> BUSINESS CONSULTATION</span>
                        <p className={`my-3`}> Business verification at Central one, helps companies turn their challenges into opportunities.</p>
                        <h3>You'll receive</h3>
                        <ul className={`list-none`}>
                            <li>✅ Expert guidance</li>
                            <li>✅ Tailored strategies</li>
                            <li>✅ Technology driven solutions</li>
                        </ul>
                    </div>

                <div className={`max-w-[300px] shadow-lg p-5 rounded-lg`}>
                    <span className={`font-[Sora] font-[600]`}> KYC VERIFICATION FOR BUSINESSES</span>
                        <p className={`my-3`}> Verification of Individuals
                            for Financial Companies We streamline your customer onboarding with fast, reliable KYC verification.
                        </p>
                        <h3>You'll receive</h3>
                        <ul className={`list-none`}>
                            <li>✅ Reduced fraud risk</li>
                            <li>✅ Compliance ready data management</li>
                            <li>✅ Secure Identity checks using BVN/NIN validation</li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    )
}