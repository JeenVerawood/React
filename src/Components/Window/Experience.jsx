import React, { useRef, useEffect, useState } from 'react';
// import img1sec1 from "../img-main/img1/1.png";
// import img1sec2 from "../img-main/img3/1.png";
// import img1sec3 from "../img-main/img4/3.png";
// import img1sec4 from "../img-main/img1/Img1.png";
import {useNavigate } from "react-router-dom"; 

export default function Experience() {
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div className='bg-gray-900 h-auto md:h-screen font-title py-10 flex items-center'>
            <div 
                ref={contactRef} 
                className={`flex flex-col text-white max-w-7xl m-auto p-12 h-auto transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
                <div className='flex justify-center gap-x-3 items-center'>
                    <div className='w-2 h-2 bg-white rotate-45'></div>
                    <h1 className='text-3xl font-bold transition-opacity duration-500'>EXPERIENCE</h1>
                    <div className='w-2 h-2 bg-white rotate-45'></div>
                </div>
                <div className='text-center'>
                    <h5 className='mt-3'>SUB HEADING GOES HERE</h5>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-y-4 mt-12'>
                    <div className='h-92 w-72 mr-2 flex border-2 border-gray-400 flex-col items-center p-4 hover:scale-110 transition-all duration-500'>
                        <div className='border-2 border-gray-400 '>
                            {/* <img src={img1sec4} alt="" className='w-64 h-64 bg-white'/> */}
                        </div>
                        <p className='text-center mt-2 text-white'>Participate in research skills training at NSTDA at the NECTEC Center for 2 months.</p>
                    </div>
                    <div className='h-92 w-72 mr-2 flex border-2 border-gray-400 flex-col items-center p-4 hover:scale-110 transition-all duration-500'>
                        <div className='border-2 border-gray-400 '>
                            {/* <img src={img1sec1} alt="" className='w-64 h-64 bg-white'/> */}
                        </div>
                        <p className='text-center mt-2 text-white'>Medal award from the regional SMTE project competition using the ARDUINO board.</p>
                    </div>
                    <div className='h-92 w-72 mr-2 flex border-2 border-gray-400 flex-col items-center p-4 hover:scale-110 transition-all duration-500'>
                        <div className='border-2 border-gray-400 '>
                            {/* <img src={img1sec2} alt="" className='w-64 h-64 bg-white'/> */}
                        </div>
                        <p className='text-center mt-2 text-white'>Silver Medal in the Arts and Crafts Competition in the Mixed Robot Competition.</p>
                    </div>
                    <div className='h-92 w-72 mr-2 flex border-2 border-gray-400 flex-col items-center p-4 hover:scale-110 transition-all duration-500'>
                        <div className='border-2 border-gray-400 '>
                            {/* <img src={img1sec3} alt="" className='w-64 h-64 bg-white'/> */}
                        </div>
                        <p className='text-center mt-2 text-white'>Passed entry into the Junior Web Master Camp project, design category.</p>
                    </div>
                </div>
                <div className='m-auto mt-20 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2'>
                    <h1 className='text-lg md:text-xl font-medium p-2 w-full md:w-64 text-center flex justify-center items-center text-black h-12 bg-white'>
                        MORE EXPERIENCE
                    </h1>
                    <button 
                        onClick={() => handleNavigation('/Competiton')} 
                        className='p-2 w-full md:w-36 h-12 flex justify-center items-center bg-gray-900 border-2 border-gray-400 hover:scale-105 duration-400 transition-all'>
                        PERFORMANCE
                    </button>
                    <button 
                        onClick={() => handleNavigation('/Camp')} 
                        className='p-2 w-full md:w-36 h-12 flex justify-center items-center bg-gray-900 border-2 border-gray-400 hover:scale-105 duration-400 transition-all'>
                        OTHER
                    </button>
                    <button 
                        onClick={() => handleNavigation('/Design')} 
                        className='p-2 w-full md:w-36 h-12 flex justify-center items-center bg-gray-900 border-2 border-gray-400 hover:scale-105 duration-400 transition-all'>
                        DESIGN
                    </button>
                </div>

            </div>
        </div>
    );
}
