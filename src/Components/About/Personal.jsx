import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { 
    FaUser, FaCakeCandles, FaGlobe, FaMapLocationDot, 
    FaUserTag, FaGraduationCap, FaCalendarCheck 
} from "react-icons/fa6";

export default function Personal() {
    const personalData = [
        { label: "Full Name", value: "Mr. Verawood Langvong", icon: <FaUser className="text-sky-400" /> },
        { label: "Nickname", value: "Jeen", icon: <FaUserTag className="text-sky-400" /> },
        { label: "Age", value: "18 Years Old", icon: <FaCalendarCheck className="text-sky-400" /> },
        { label: "Birthday", value: "February 20 2007", icon: <FaCakeCandles className="text-sky-400" /> },
        { label: "Nationality", value: "Thai", icon: <FaGlobe className="text-sky-400" /> },
        { label: "Ethnicity", value: "Thai", icon: <FaGlobe className="text-sky-400" /> },
    ];

    return (
        <>
            <Navbar />
            <div className='bg-gray-900 font-title min-h-screen flex items-center py-20'>
                <div className="max-w-5xl m-auto px-6 w-full transition-all duration-500">
                    
                    {/* Header Section */}
                    <div className='flex flex-col items-center mb-16'>
                        <div className='flex justify-center gap-x-3 items-center'>
                            <div className='w-2 h-2 bg-sky-500 rotate-45'></div>
                            <h1 className='text-3xl md:text-4xl font-bold tracking-widest text-white uppercase'>Personal Info</h1>
                            <div className='w-2 h-2 bg-sky-500 rotate-45'></div>
                        </div>
                        <p className='text-gray-400 mt-3 text-xs md:text-sm uppercase'>
                            A brief overview of my identity and background
                        </p>
                    </div>

                    {/* Main Info Card */}
                    <div className="bg-white/5 border border-gray-700 p-8 md:p-12 backdrop-blur-sm shadow-2xl">
                        
                        {/* Grid 1: Basic Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {personalData.map((item, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-center gap-3 mb-2">
                                        {item.icon}
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-sky-400 transition-colors">
                                            {item.label}
                                        </span>
                                    </div>
                                    <p className="text-lg text-white font-medium pl-7">
                                        {item.value}
                                    </p>
                                    <div className="h-[1px] w-full bg-gray-800 mt-2 group-hover:bg-sky-500/50 transition-all"></div>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="my-10 border-t border-gray-800"></div>

                        {/* Grid 2: Education & Address (Wide Cards) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Education */}
                            <div className="group">
                                <div className="flex items-center gap-3 mb-3">
                                    <FaGraduationCap size={20} className="text-sky-400" />
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Education Program</span>
                                </div>
                                <div className="bg-gray-900/50 p-4 border border-gray-800 group-hover:border-sky-500/30 transition-all">
                                    <p className="text-white leading-relaxed">
                                        Computer Engineering and Digital Technology 
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="group">
                                <div className="flex items-center gap-3 mb-3">
                                    <FaMapLocationDot size={20} className="text-sky-400" />
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Current Address</span>
                                </div>
                                <div className="bg-gray-900/50 p-4 border border-gray-800 group-hover:border-sky-500/30 transition-all">
                                    <p className="text-white leading-relaxed">
                                        1243 Thadindang 16, Klongsan, Bangkok 10600
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}