import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Window/Footer';
import { FaLocationDot, FaLink, FaSchool } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

export default function Education() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const { top } = sectionRef.current.getBoundingClientRect();
            if (top < window.innerHeight * 0.8) setIsVisible(true);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const educationData = [
        {
            level: "Bachelor's Degree (Current)",
            school: "Chulalongkorn University",
            sub: "Computer Engineering & Digital Technology (CEDT)",
            year: "2025 - Present",
            map: "https://maps.app.goo.gl/xxx", // ใส่ลิงก์จริง
            web: "https://www.cp.eng.chula.ac.th/cedt",
            current: true
        },
        {
            level: "High School (Grade 7-12)",
            school: "Taweethapisek School",
            sub: "SMTE Program (Science, Math, Tech, Environment)",
            year: "2019 - 2024",
            map: "https://maps.app.goo.gl/xxx", 
            web: "https://taweethapisek.ac.th/"
        },
        {
            level: "Primary School (Grade 1-6)",
            school: "Kularbwittaya School",
            sub: "General Program",
            year: "2013 - 2019",
            map: "https://maps.app.goo.gl/xxx",
            web: "https://klw.ac.th/"
        }
    ];

    return (
        <>
            <Navbar />
            <div className='bg-gray-900 font-title min-h-screen py-20 overflow-hidden'>
                <div 
                    ref={sectionRef}
                    className={`max-w-4xl m-auto px-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {/* Header */}
                    <div className='flex flex-col items-center mb-16'>
                        <div className='flex justify-center gap-x-3 items-center'>
                            <div className='w-2 h-2 bg-sky-500 rotate-45'></div>
                            <h1 className='text-3xl md:text-4xl font-bold tracking-widest text-white uppercase'>Education</h1>
                            <div className='w-2 h-2 bg-sky-500 rotate-45'></div>
                        </div>
                        <p className='text-gray-400 mt-4  text-xs md:text-sm  uppercase'>Academic background and milestones</p>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative border-l-2 border-gray-700 ml-4 md:ml-10 space-y-12">
                        {educationData.map((edu, index) => (
                            <div key={index} className="relative pl-8 group">
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-gray-900 transition-colors duration-300 ${edu.current ? 'bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]' : 'bg-gray-600 group-hover:bg-sky-400'}`}></div>
                                
                                {/* Card */}
                                <div className={`p-6 border transition-all duration-300 transform group-hover:-translate-y-1 ${edu.current ? 'bg-sky-500/5 border-sky-500/50' : 'bg-gray-800/40 border-gray-700 hover:border-gray-500'}`}>
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div>
                                            <span className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded-sm ${edu.current ? 'bg-sky-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
                                                {edu.year}
                                            </span>
                                            <h2 className="text-xl font-bold text-white mt-2">{edu.level}</h2>
                                            <p className={`text-lg font-medium ${edu.current ? 'text-sky-400' : 'text-gray-300'}`}>{edu.school}</p>
                                            <p className="text-sm text-gray-500 mt-1">{edu.sub}</p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4">
                                            <a 
                                                href={edu.map} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="p-3 bg-gray-900 border border-gray-700 text-gray-400 hover:text-sky-400 hover:border-sky-400 transition-all rounded-sm"
                                                title="View on Google Maps"
                                            >
                                                <FaLocationDot size={18} />
                                            </a>
                                            <a 
                                                href={edu.web} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="p-3 bg-gray-900 border border-gray-700 text-gray-400 hover:text-sky-400 hover:border-sky-400 transition-all rounded-sm"
                                                title="Visit Website"
                                            >
                                                <FaLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}