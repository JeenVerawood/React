import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import รูปภาพ
import img1 from "../Performance/img1/1.png";
import img2 from "../Performance/img1/2.png";
import img3 from "../Performance/img1/3.png";
import img4 from "../Performance/img1/4.png";

export default function Experience() {
    const contactRef = useRef(null);
    const scrollRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    // ข้อมูล Experience (ปรับแก้ข้อความตรงนี้ได้เลย)
    const experiences = [
        { img: img4, text: "Participate in research skills training at NSTDA at the NECTEC Center for 2 months." },
        { img: img1, text: "Medal award from the regional SMTE project competition using the ARDUINO board." },
        { img: img2, text: "Silver Medal in the Arts and Crafts Competition in the Mixed Robot Competition." },
        { img: img3, text: "Passed entry into the Junior Web Master Camp project, design category." },
        { img: img3, text: "Passed entry into the Junior Web Master Camp project, design category." },
        { img: img3, text: "Passed entry into the Junior Web Master Camp project, design category." },
        { img: img3, text: "Passed entry into the Junior Web Master Camp project, design category." },
        { img: img3, text: "Passed entry into the Junior Web Master Camp project, design category." },
        { img: img3, text: "Passed entry into the Junior Web Master Camp project, design category." },
        { img: img3, text: "Passed entry into the Junior Web Master Camp project, design category." },
        { img: img3, text: "Passed entry into the Junior Web Master Camp project, design category." },
        { img: img3, text: "Passed entry into the Junior Web Master Camp project, design category." },
        { img: img3, text: "Passed entry into the Junior Web Master Camp project, design category." },
        // สามารถเพิ่ม { img: imgX, text: "..." } ต่อได้เลย กล่องจะเพิ่มให้อัตโนมัติ
    ];

    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = 350; 
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!contactRef.current) return;
            const { top, height } = contactRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (top < windowHeight * 0.8 && top + height > 0) {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // เช็คทันทีที่โหลดหน้า
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div className='bg-gray-900 min-h-screen font-title py-20 flex items-center overflow-hidden'>
            <div 
                ref={contactRef} 
                className={`flex flex-col text-white max-w-7xl m-auto px-6 md:px-12 w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
                {/* Header Section */}
                <div className='flex justify-center gap-x-3 items-center'>
                    <div className='w-2 h-2 bg-white rotate-45'></div>
                    <h1 className='text-3xl md:text-4xl font-bold uppercase tracking-widest'>EXPERIENCE</h1>
                    <div className='w-2 h-2 bg-white rotate-45'></div>
                </div>
                <div className='text-center mt-4'>
                    <h5 className='text-gray-400 tracking-[0.2em] text-sm md:text-base underline underline-offset-8 decoration-sky-500'>
                        MY JOURNEY & ACHIEVEMENTS
                    </h5>
                </div>

                {/* Slider Section */}
                <div className='relative mt-16 group px-4'>
                    {/* Left Button */}
                    <button 
                        onClick={() => scroll('left')}
                        className='absolute left-[-10px] md:left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-sky-600 text-white p-3 rounded-full hidden md:flex items-center justify-center transition-all duration-300 border border-white/20'
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    {/* Cards Container */}
                    <div 
                        ref={scrollRef}
                        className='flex flex-nowrap overflow-x-auto gap-6 scroll-smooth pb-10 no-scrollbar'
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // ซ่อน scrollbar สำหรับ FF และ IE
                    >
                        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style> {/* ซ่อน scrollbar สำหรับ Chrome/Safari */}
                        
                        {experiences.map((item, index) => (
                            <div 
                                key={index}
                                className='h-auto w-[280px] md:w-[320px] flex-shrink-0 border-2 border-gray-700 bg-gray-800/50 p-5 hover:border-sky-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-500 rounded-sm group/card'
                            >
                                <div className='overflow-hidden border border-gray-600'>
                                    <img 
                                        src={item.img} 
                                        alt={`exp-${index}`} 
                                        className='w-full h-56 md:h-64 object-cover bg-white group-hover/card:scale-110 transition-transform duration-700'
                                    />
                                </div>
                                <p className='text-center mt-6 text-gray-300 text-sm leading-relaxed min-h-[60px]'>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Button */}
                    <button 
                        onClick={() => scroll('right')}
                        className='absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-sky-600 text-white p-3 rounded-full hidden md:flex items-center justify-center transition-all duration-300 border border-white/20'
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>

                {/* Navigation Buttons Section */}
                <div className='m-auto mt-16 flex flex-col md:flex-row items-center gap-4'>
                    <div className='text-lg font-bold px-8 py-3 bg-white text-black min-w-[200px] text-center uppercase tracking-tighter'>
                        More Experience
                    </div>
                    <div className='flex flex-wrap justify-center gap-3'>
                        <button 
                            onClick={() => handleNavigation('/Competiton')} 
                            className='px-6 py-3 min-w-[140px] bg-transparent border-2 border-gray-600 text-gray-300 hover:text-white hover:border-sky-500 hover:bg-sky-500/10 transition-all duration-300 uppercase text-xs font-bold tracking-widest'>
                            Performance
                        </button>
                        <button 
                            onClick={() => handleNavigation('/Camp')} 
                            className='px-6 py-3 min-w-[140px] bg-transparent border-2 border-gray-600 text-gray-300 hover:text-white hover:border-sky-500 hover:bg-sky-500/10 transition-all duration-300 uppercase text-xs font-bold tracking-widest'>
                            Other
                        </button>
                        <button 
                            onClick={() => handleNavigation('/Design')} 
                            className='px-6 py-3 min-w-[140px] bg-transparent border-2 border-gray-600 text-gray-300 hover:text-white hover:border-sky-500 hover:bg-sky-500/10 transition-all duration-300 uppercase text-xs font-bold tracking-widest'>
                            Design
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}