import React, { useRef, useEffect, useState } from 'react';
import { FaCode, FaRocket } from "react-icons/fa";

export default function InternshipGoals() {
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setRotation(scrollPosition * 0.15);

            if (!contactRef.current) return;
            const { top, height } = contactRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight * 0.8 && top + height > 0) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goals = [
        {
            icon: <FaCode size={60} />,
            title: "Professional Mastery & Contribution",
            desc: "My primary goal is to bridge the gap between academic theory and industry standards. I am eager to refine my coding and web development skills by actively contributing to real-world projects. Through effective teamwork and a commitment to high-quality code, I aim to provide meaningful value to the company’s objectives."
        },
        {
            icon: <FaRocket size={60} />,
            title: "Innovation & Future Tooling",
            desc: "Beyond day-to-day tasks, I am driven by a passion for solving complex problems and building the next generation of development tools. I seek to cultivate a growth mindset that allows me to transform emerging technologies into innovative solutions, eventually contributing to the advancement of the global developer community."
        }
    ];

    return (
        <div className='bg-gray-900 font-title py-24 min-h-screen flex items-center overflow-hidden'>
            <div 
                ref={contactRef} 
                className={`max-w-6xl m-auto px-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >   
            
                <div className='flex flex-col items-center mb-16'>
                    <div className='flex justify-center gap-x-3 items-center'>
                        <div className='w-2 h-2 bg-sky-500 rotate-45'></div>
                        <h1 className='text-3xl md:text-4xl font-bold uppercase tracking-widest text-white'>
                            INTERNSHIP GOALS
                        </h1>
                        <div className='w-2 h-2 bg-sky-500 rotate-45'></div>
                    </div>
                    <p className='text-gray-400 mt-4  text-xs md:text-sm uppercase'>Bridging academic theory with professional practice</p>
                </div>                
                <div className='grid grid-cols-1 gap-20'>
                    {goals.map((goal, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20`}
                        >
                            {/* Icon Side with Rotating Border */}
                            <div className='relative flex justify-center items-center flex-shrink-0'>
                                <div 
                                    className='w-44 h-44 border-2 border-dashed border-sky-500/40 absolute' 
                                    style={{ transform: `rotate(${rotation * (index % 2 === 0 ? 1 : -1)}deg)` }}
                                ></div>
                                <div className='w-36 h-36 bg-gray-800 border border-gray-700 flex items-center justify-center text-sky-400 z-10 text- rounded-sm'>
                                    {goal.icon}
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className='flex-1 text-center md:text-left'>
                                <h3 className='text-xl md:text-xl font-bold text-white mb-6 tracking-wide flex items-center justify-center md:justify-start gap-4'>
                                    <span className='text-sky-500 font-mono'>0{index + 1}.</span> {goal.title}
                                </h3>
                                <div className='relative bg-gray-800/10 border-l-4 border-sky-500 p-8 backdrop-blur-sm'>
                                    <p className='text-gray-300  leading-relaxed text-sm italic md:not-italic'>
                                        "{goal.desc}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}