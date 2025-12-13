import React, { useRef, useEffect, useState } from 'react';
import { MdOutlineDesignServices } from "react-icons/md";  
import { LuShieldQuestion } from "react-icons/lu";
import { PiUsersThreeLight, PiPingPong } from "react-icons/pi";
import { IoBasketballOutline } from "react-icons/io5";
import { GiTennisCourt } from "react-icons/gi";

export default function TalentAndHobby() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const { top, height } = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (top < windowHeight * 0.85 && top + height > 0) {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const data = [
        { icon: <MdOutlineDesignServices size={40} />, title: "UX / UI DESIGN", desc: "Website design and digital experience", type: "talent" },
        { icon: <LuShieldQuestion size={40} />, title: "SOLUTION", desc: "Practical problem-solving mindset", type: "talent" },
        { icon: <PiUsersThreeLight size={40} />, title: "LEADER", desc: "Guiding teams with effective leadership", type: "talent" },
        { icon: <PiPingPong size={40} />, title: "TABLE TENNIS", desc: "Speed, agility, and quick reflex", type: "hobby" },
        { icon: <IoBasketballOutline size={40} />, title: "BASKETBALL", desc: "Teamwork and court strategy", type: "hobby" },
        { icon: <GiTennisCourt size={40} />, title: "BADMINTON", desc: "Passionate about fitness and stamina", type: "hobby" },
    ];

    return (
        <div className='bg-gradient-to-r from-black to-blue-950 min-h-screen py-24 flex items-center overflow-hidden font-title'>
            <div 
                ref={sectionRef} 
                className={`max-w-7xl m-auto px-6 md:px-12 w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
                {/* Header Section */}
                <div className='flex flex-col items-center mb-16'>
                    <div className='flex justify-center gap-x-3 items-center'>
                        <div className='w-2 h-2 bg-sky-500 rotate-45'></div>
                        <h1 className='text-3xl md:text-4xl font-bold uppercase tracking-widest text-white'>Talents & Hobbies</h1>
                        <div className='w-2 h-2 bg-sky-500 rotate-45'></div>
                    </div>
                    <p className='text-gray-400 mt-4 tracking-[0.2em] text-xs md:text-sm uppercase'>Beyond the world of coding</p>
                </div>

                {/* Grid Layout */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {data.map((item, index) => (
                        <div 
                            key={index}
                            className={`group relative overflow-hidden p-[1px] rounded-sm transition-all duration-500 hover:scale-[1.02] shadow-xl`}
                        >
                            {/* Border Glow Effect on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.type === 'talent' ? 'from-sky-500 to-blue-600' : 'from-emerald-500 to-teal-600'} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            {/* Card Content */}
                            <div className='relative bg-gray-800 h-full p-6 flex items-center gap-5'>
                                {/* Icon Container */}
                                <div className={`flex-shrink-0 w-20 h-20 border border-gray-600 flex justify-center items-center transition-all duration-500 group-hover:border-white ${item.type === 'talent' ? 'text-sky-400' : 'text-emerald-400'} group-hover:text-white`}>
                                    {item.icon}
                                </div>

                                {/* Text Container */}
                                <div className='flex flex-col'>
                                    <h3 className='text-lg font-bold text-white group-hover:text--300 transition-colors duration-300 tracking-tight uppercase'>
                                        {item.title}
                                    </h3>
                                    <p className='text-gray-400 text-sm mt-1 leading-tight group-hover:text-gray-200'>
                                        {item.desc}
                                    </p>
                                    
                                    {/* Subtle Tag */}
                                    <span className={`text-[9px] mt-2 font-bold tracking-widest uppercase opacity-50 ${item.type === 'talent' ? 'text-sky-500' : 'text-emerald-500'}`}>
                                        {item.type}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}