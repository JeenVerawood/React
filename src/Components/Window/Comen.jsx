import React, { useRef, useEffect, useState } from 'react';
import { MdEngineering } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

export default function Comen() {
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [rotation1, setRotation1] = useState(0); // For first icon rotation
    const [rotation2, setRotation2] = useState(0); // For second icon rotation

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Update rotation based on the scroll position
            setRotation1(scrollPosition * 0.2); // Adjust rotation speed as needed
            setRotation2(scrollPosition * 0.2);

            const { top, height } = contactRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && top + height > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='bg-gradient-to-r font-title from-black to-blue-950 h-auto'>
            <div 
                ref={contactRef} 
                className={`flex flex-col justify-center items-center text-white max-w-7xl m-auto p-12 transition-all min-h-screen md:h-auto duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >   
                <div className='flex items-center gap-x-3'>
                    <div className='w-2 h-2 bg-white rotate-45'></div>
                    <h1 className='text-3xl font-bold transition-opacity text-center duration-500'>FUTURE GOALS AND ATTITUDE TO ENGINEERING</h1>
                    <div className='w-2 h-2 bg-white rotate-45'></div>
                </div>
                <h5 className='mt-5'>SUB HEADING GOES HERE</h5>
                
                {/* For first icon and text */}
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='mt-12 flex justify-center items-center relative'>
                        {/* Rotating Border container */}
                        <div className='border-2 border-gray-400 p-16 absolute' style={{ transform: `rotate(${rotation1}deg)` }}></div>
                        {/* Static Icon */}
                        <MdEngineering size={100} />
                    </div>
                    <div className='mt-8 border-2 border-gray-400 p-8 ml-0 md:ml-12 transition-opacity duration-500 max-w-3xl'>
                    My career goal is to become a researcher. I had the opportunity to develop my research skills during a two-month training at NSTDA, where I gained insight into work processes, critical thinking, and systematic approaches. This experience helped me realize the significant impact that a career in research can have on national development.
                    </div>
                </div>

                {/* For second icon and text */}
                <div className='flex flex-col md:flex-row items-center mt-12'>
                    <div className='flex justify-center items-center relative'>
                        {/* Rotating Border container */}
                        <div className='border-2 border-gray-400 p-16 absolute' style={{ transform: `rotate(${rotation2}deg)` }}></div>
                        {/* Static Icon */}
                        <FaLightbulb size={100} />
                    </div>
                    <div className='mt-8 border-2 border-gray-400 p-8 ml-0 md:ml-12 transition-opacity duration-500 max-w-3xl'>
                        For me, the computer engineering profession is more than just a career; it is a tool that can drive the world and solve various problems through the continuous development of cutting-edge technology. This profession not only enhances and transforms people's lifestyles but also creates innovations across various industries, including healthcare, education, finance, and more. Additionally, this field is always evolving because technology never stands still, which emphasizes the importance of continuous development. I believe that computer engineering is a cornerstone that enables humanity to advance and create a better world.
                    </div>
                </div>
            </div>
        </div>
    );
}
